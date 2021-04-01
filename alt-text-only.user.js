// ==UserScript==
// @name           Alt Text Only
// @description    Replace images with their alt text.
// @author         Winston Smith <winston@sequential.me> (sequential.me)
// @version        0.0.1
// @include        https://*.*/*
// @updateURL      https://github.com/sequentialchaos/userscripts/raw/master/alt-text-only.user.js
// @run-at         document-start
// ==/UserScript==

// Create style.
var style = document.createElement('style')
style.type = 'text/css'
style.textContent = `
img {
  background-url("");
  filter: blur(1px);
  //border: 20px solid black;
}
img::after {
  content: "alt text";
}
.alt-text-only {
  display: block !important;
  padding: 2px;
  color: black !important;
}
`

function insertAfter(referenceNode, newNode) {
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

// Replace each image with its alt text.
document.head.appendChild(style)
let clickTimer = setInterval(function () {
  for (let img of [...document.getElementsByTagName('img')]){
      var overlay = document.createElement('div')
      overlay.classList.add('alt-text-only')
      overlay.innerHTML = img.alt == '' ? 'no alt text' : img.alt
      overlay.width = img.width
      overlay.height = img.height
      overlay.style.position = 'relative'
      overlay.style.background = img.alt == '' ? '#FF7575' : '#75A3FF'

      insertAfter(img, overlay)
      img.remove()
  }
}, 1000)