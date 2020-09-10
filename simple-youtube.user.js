// ==UserScript==
// @name           Simple YouTube
// @description    a simple view of YouTube (turn on theatre mode)
// @author         Winston Smith <winston@sequential.me> (sequential.me)
// @version        0.1.0
// @include        https://www.youtube.com/watch*
// @updateURL      https://github.com/sequentialchaos/userscripts/raw/master/simple-youtube.user.js
// @icon           https://www.youtube.com/s/desktop/34930df8/img/favicon.ico
// @run-at         document-end
// ==/UserScript==

// Create style.
var style = document.createElement('style')
style.type = 'text/css'
style.textContent = `
#secondary, #related {
  display: none;
}
`
// Add style.
document.head.appendChild(style)

// Attempt to click the "more" button!
let clickTimer = setInterval(function () {
  let moreButton = document.querySelector("#meta-contents #more")
  if (moreButton) {
    moreButton.click()
    clearInterval(clickTimer)
  }
}, 1000)
