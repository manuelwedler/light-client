<template>
  <span v-if="updateAvailable">
    <blurred-overlay :show="updateAvailable" :fullscreen="true" />
    <v-snackbar v-model="updateAvailable" :timeout="-1" color="primary">
      {{ $t('update.available') }}
      <v-btn dark text :loading="isUpdating" @click="update">
        {{ $t('update.update') }}
      </v-btn>
    </v-snackbar>
  </span>
</template>

<script lang="ts">
/* istanbul ignore file */
import { Component, Vue } from 'vue-property-decorator';
import BlurredOverlay from '@/components/overlays/BlurredOverlay.vue';

@Component({ components: { BlurredOverlay } })
export default class UpdateSnackbar extends Vue {
  isUpdating = false;
  updateAvailable = false;
  swRegistration: ServiceWorkerRegistration | null = null;

  created() {
    window.addEventListener('swUpdated', this.handleSWUpdate, { once: true });

    navigator.serviceWorker.addEventListener('controllerchange', () => {
      setTimeout(() => {
        this.updateAvailable = false;
        window.location.reload();
      }, 1500);
    });
  }
  beforeDestroy() {
    window.removeEventListener('swUpdated', this.handleSWUpdate);
  }

  handleSWUpdate(event: ServiceWorkerUpdatedEvent) {
    this.swRegistration = event.detail;
    this.updateAvailable = true;
  }

  update() {
    this.isUpdating = true;
    if (!this.swRegistration || !this.swRegistration.waiting) {
      return;
    }
    this.swRegistration.waiting.postMessage('skipWaiting');
  }
}
</script>
