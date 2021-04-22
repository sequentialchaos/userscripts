// ==UserScript==
// @name           Simple Twitter
// @description    a simple view of Twitter
// @author         Winston Smith <winston@sequential.me>, blinry <sebastian@morr.cc>
// @version        0.1.0
// @include        https://twitter.com/*
// @updateURL      https://github.com/sequentialchaos/userscripts/raw/master/simple-twitter.user.js
// @icon           https://abs.twimg.com/favicons/twitter.ico
// @run-at         document-end
// ==/UserScript==

// Create style.
var style = document.createElement('style')
style.type = 'text/css'
style.textContent = `
[data-testid="sidebarColumn"] {
  display: none !important;
}
`

document.head.appendChild(style)
