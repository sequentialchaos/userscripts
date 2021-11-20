// ==UserScript==
// @name           Simple Wikipedia
// @description    a simple view of Wikipedia
// @author         Winston Smith <winston@sequential.me> (sequential.me)
// @version        0.2.1
// @include        https://*.wikipedia.org/*
// @updateURL      https://github.com/sequentialchaos/userscripts/raw/master/simple-wikipedia.user.js
// @icon           https://en.wikipedia.org/static/favicon/wikipedia.ico
// @run-at         document-start
// ==/UserScript==

// Create style.
var style = document.createElement('style')
style.type = 'text/css'
style.textContent = `
body{
  --width: 50em;
  --accent: #ccc;
  max-width: var(--width);
  margin-left: max(0px, calc((100vw - var(--width))/2));
  background-color: #474849;
}
a {
  color: rgb(32, 33, 34) !important;
  text-shadow: 0 0 5px var(--accent);
}
a:hover {
  color: black;
  background-color: var(--accent);
}
#content {
  margin-left: 0;
  background-color: #f2f3f4;
  box-shadow: 0 6px 10px 0 rgba(0,0,0,0.2),0 10px 24px 0 rgba(0,0,0,0.19);
}
#p-search {
  float: right;
  margin-right: 2px;
  font-size: 0.5em;
}
#simpleSearch {
  z-index: 1;
}
`
// Add style.
document.head.appendChild(style)

// Save the search bar!
let searchBar = document.getElementById('p-search')

// Remove bad things.
document.getElementById('mw-navigation').remove()
document.getElementById('mw-page-base').remove()
for (let edit of [...document.getElementsByClassName('mw-editsection')]){
  edit.remove()
}

// Add the search bar back!
document.getElementById('firstHeading').prepend(searchBar)
