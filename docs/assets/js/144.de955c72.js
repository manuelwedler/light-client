(window.webpackJsonp=window.webpackJsonp||[]).push([[144],{343:function(n,e,t){"use strict";t.r(e);var a=t(0),o=Object(a.a)({},(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("h1",{attrs:{id:"opening-a-channel"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#opening-a-channel"}},[n._v("#")]),n._v(" Opening a Channel")]),n._v(" "),t("p",[n._v("To connect to the Raiden Network, you simply make a transaction to open a channel on-chain with a given partner on a registered token network. You can also specify a "),t("code",[n._v("settleTimeout")]),n._v(", which will be the number of blocks you and your partner will need to wait after closing a channel to be able to settle it and actually get the due tokens back. "),t("code",[n._v("settleTimeout")]),n._v(" defaults to "),t("code",[n._v("500")])]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("import { RaidenChannel } from 'raiden-ts';\n\n# logs channels$ changes\nraiden.channels$.subscribe(\n  (channels: { [token: string]: { [partner: string]: RaidenChannel } }) =>\n    console.log('Raiden channels:', channels)\n);\n\n# get list of registered tokens\nawait raiden.getTokenList();\n# ['0xtoken']\n\n# open a Raiden payment channel!\nconst openTxHash = await raiden.openChannel('0xtoken', '0xpartner');\n\n## output:\n# Raiden channels: {\n#   '0xtoken': {\n#     '0xpartner': {\n#       token: '0xtoken',\n#       tokenNetwork: '0xtokenNetwork',\n#       partner: '0xpartner',\n#       state: 'open',\n#       ownDeposit: BigNumber(0),\n#       partnerDeposit: BigNumber(0),\n#       id: 123,\n#       settleTimeout: 500,\n#       openBlock: 5123,\n#       balance: BigNumber(0),\n#       capacity: BigNumber(0),\n#     }\n#   }\n# }\n")])])])])}),[],!1,null,null,null);e.default=o.exports}}]);