<template>
  <v-container class="transfer" fluid>
    <no-tokens v-if="noTokens" />
    <template v-else>
      <transfer-headers
        class="transfer__menus"
        :token="token"
        :no-channels="noChannels"
        :total-capacity="totalCapacity"
      />
      <transfer-inputs
        class="transfer__inputs"
        :token="token"
        :no-channels="noChannels"
        :max-channel-capacity="maxChannelCapacity"
      />
      <transaction-list class="transfer__list" :token="token" />
      <no-channels-dialog :visible="!openChannels" />
    </template>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapState, mapGetters } from 'vuex';
import { BigNumber, constants } from 'ethers';
import { NotificationContext } from '../store/notifications/notification-context';
import { NotificationImportance } from '../store/notifications/notification-importance';
import { NotificationPayload } from '../store/notifications/types';
import TransferHeaders from '@/components/transfer/TransferHeaders.vue';
import TransferInputs from '@/components/transfer/TransferInputs.vue';
import TransactionList from '@/components/transaction-history/TransactionList.vue';
import NoTokens from '@/components/NoTokens.vue';
import NoChannelsDialog from '@/components/dialogs/NoChannelsDialog.vue';
import { RouteNames } from '@/router/route-names';
import { Token, TokenModel } from '@/model/types';
import { RaidenChannel } from 'raiden-ts';

const ONE_DAY = new Date(0).setUTCHours(24);

@Component({
  components: {
    NoTokens,
    TransferHeaders,
    TransferInputs,
    TransactionList,
    NoChannelsDialog,
  },
  computed: {
    ...mapState(['stateBackupReminderDateMs']),
    ...mapGetters(['tokens', 'channels', 'channelWithBiggestCapacity', 'openChannels']),
  },
})
export default class TransferRoute extends Vue {
  stateBackupReminderDateMs!: number;
  tokens!: TokenModel[];
  channels!: (tokenAddress: string) => RaidenChannel[];
  channelWithBiggestCapacity!: (tokenAddress: string) => RaidenChannel | undefined;

  mounted() {
    const currentTime = new Date().getTime();

    if (
      this.stateBackupReminderDateMs === 0 ||
      currentTime > this.stateBackupReminderDateMs + ONE_DAY
    ) {
      this.pushStateBackupNotification(currentTime);
    }
  }

  pushStateBackupNotification(currentTime: number): void {
    const stateBackupReminder = {
      icon: this.$t('notifications.backup-state.icon') as string,
      title: this.$t('notifications.backup-state.title') as string,
      link: this.$t('notifications.backup-state.link') as string,
      dappRoute: RouteNames.ACCOUNT_BACKUP,
      description: this.$t('notifications.backup-state.description') as string,
      duration: 60000,
      importance: NotificationImportance.HIGH,
      context: NotificationContext.WARNING,
    } as NotificationPayload;

    this.$store.commit('updateStateBackupReminderDate', currentTime);
    this.$store.commit('notifications/notificationAddOrReplace', stateBackupReminder);
  }

  get noTokens(): boolean {
    return this.tokens.length === 0;
  }

  get token(): Token | undefined {
    if (this.noTokens) {
      return undefined;
    } else {
      const { token } = this.$route.params;
      const address = token ? token : this.tokens[0].address;
      return this.$store.getters.token(address) || ({ address } as Token);
    }
  }

  get noChannels(): boolean {
    return this.channels.length === 0;
  }

  get maxChannelCapacity(): BigNumber {
    if (this.token) {
      const channelWithBiggestCapacity = this.channelWithBiggestCapacity(this.token.address);
      return channelWithBiggestCapacity?.capacity ?? constants.Zero;
    } else {
      return constants.Zero;
    }
  }

  get totalCapacity(): BigNumber {
    if (this.token) {
      const channels = this.channels(this.token.address);
      return channels
        .map((channel) => channel.capacity)
        .reduce((previousValue, currentValue) => previousValue.add(currentValue), constants.Zero);
    } else {
      return constants.Zero;
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/scss/mixins';

.transfer {
  display: flex;
  flex-direction: column;
  @include respond-to(handhelds) {
    overflow-y: auto;
  }

  &__menus,
  &__inputs,
  &__list {
    margin: 0 auto;
    width: 550px;
    @include respond-to(handhelds) {
      width: 100%;
    }
  }

  &__inputs,
  &__list {
    margin-top: 20px;
  }
}
</style>
