// ==UserScript==
// @name     			Zulip Zen Script
// @description 	A zen-like view for Zulip, toggle sidebars with 'z'.
// @author				Winston Smith <winston@sequential.me> (sequential.me)
// @author				blinry <sebastian@morr.cc> (morr.cc)
// @version  			0.1.0
// @include  			https://*.zulip.com/*
// @include  			https://*.zulipchat.com/*
// @include       https://chat.zulip.org/*
// @updateURL     https://github.com/sequentialchaos/userscripts/raw/master/zulip-zen.user.js
// @icon 					https://zulip.com/static/images/favicon.png
// @grant    			none
// ==/UserScript==

var zenToggled = true
var style = document.createElement('style')
style.type = 'text/css'
style.textContent = `
.column-left, .right-sidebar-items {
	display: none;
}`
document.head.appendChild(style)

document.addEventListener('keydown', (e) => {
	if (e.key == 'z') {
		if (zenToggled) {
			style.remove()
		} else {
			document.head.appendChild(style)
		}
		zenToggled = !zenToggled
	}
})
