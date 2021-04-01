// ==UserScript==
// @name           Alt Text Only
// @description    Replace images with their alt text.
// @author         Winston Smith <winston@sequential.me> (sequential.me)
// @version        0.0.2
// @include        https://*.*/*
// @updateURL      https://github.com/sequentialchaos/userscripts/raw/master/alt-text-only.user.js
// @run-at         document-start
// ==/UserScript==

// Create style.
var style = document.createElement('style')
style.type = 'text/css'
style.textContent = `
* {
  background-size: 0% !important;
}
.alt-text-only {
  padding: 4px;
  color: black !important;
  font-family: monospace;
}
`

function insertAfter(referenceNode, newNode) {
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

var red = '#FF7575'
var blue = '#75A3FF'

// Replace each image with its alt text.
document.head.appendChild(style)
let clickTimer = setInterval(function () {
  for (let img of [...document.getElementsByTagName('img')]){
    var overlay = document.createElement('div')
    overlay.classList.add('alt-text-only')
    overlay.innerHTML = img.alt == '' ? 'no alt text' : img.alt
    if (img.alt == '' || img.alt == "Image" || img.alt == "Embedded video") {
      overlay.style.background = red
    } else {
      overlay.style.background = blue
    }

    insertAfter(img, overlay)
    img.remove()
  }
}, 1000)
