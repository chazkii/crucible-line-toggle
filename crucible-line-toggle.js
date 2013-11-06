// ==UserScript==
// @name           crucible_line_toggle
// @namespace      crucible
// @description    Toggle line numbering in Crucible
// @version        1.0
// @include        http://crucible.*
// @author         Charlie Smith and Mark Cottrell
// @email          r.charles.smith@gmail.com
// @updateURL      https://raw.github.com/emeraldo/crucible-line-toggle/master/crucible-line-toggle.js
// ==/UserScript==

var isLineNumberingOff = false;
var nodes = null;

function storeNodes () {
    nodes = document.body.querySelectorAll(".tetrisColumn, .diffNav, .author, .revision, .diffLineNumbers, .diffLineNumbersA, .diffLineNumbersB");
}

window.addEventListener("DOMContentLoaded", storeNodes, false);

MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

var observer = new MutationObserver(storeNodes);

// define what element should be observed by the observer
// and what types of mutations trigger the callback
observer.observe(document.getElementById("frxs"), {
  subtree: true,
  attributes: true
});

switch_button = document.createElement("button")
switch_button_text = document.createTextNode("Toggle line numbers")
switch_button.appendChild(switch_button_text)

switch_button.onclick = function() { 
    if (isLineNumberingOff) {
        for (var i = 0; i < nodes.length; i++)
        {
            nodes[i].style.display = "none";
        }
        isLineNumberingOff = false;
    }
    else {
        for (var i = 0; i < nodes.length; i++)
        {
            nodes[i].style.display = "";
        }
        isLineNumberingOff = true;
    }
};
var toolbar = document.getElementsByClassName("toolbar")[0]
toolbar.appendChild(switch_button);

            
