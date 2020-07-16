// ==UserScript==
// @name           Zulip Zen Script
// @description    A zen-like view for Zulip, toggle sidebars with 'z'.
// @author         Winston Smith <winston@sequential.me> (sequential.me)
// @author         blinry <sebastian@morr.cc> (morr.cc)
// @version        0.2.0
// @include        https://*.zulip.com/*
// @include        https://*.zulipchat.com/*
// @include        https://chat.zulip.org/*
// @updateURL      https://github.com/sequentialchaos/userscripts/raw/master/zulip-zen.user.js
// @icon           https://zulip.com/static/images/favicon.png
// @run-at         document-start
// @grant          GM.getValue
// @grant          GM.setValue
// ==/UserScript==

;(async () => {
  let zenToggled = await GM.getValue('zenToggled', false)

  var style = document.createElement('style')
  style.type = 'text/css'
  style.textContent = `
  .column-left, .right-sidebar-items {
    display: none;
  }`

  if (zenToggled) {
    document.head.appendChild(style)
  }

  document.addEventListener('keydown', (e) => {
    if (e.key == 'z') {
      if (zenToggled) {
        style.remove()
      } else {
        document.head.appendChild(style)
      }
      zenToggled = !zenToggled
      GM.setValue('zenToggled', zenToggled)
    }
  })
})()
