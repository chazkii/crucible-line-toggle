// ==UserScript==
// @name           crucible_line_toggle
// @namespace      crucible
// @description    Toggle line numbering in Crucible
// @version        1.0
// @include        http://crucible.*
// @author         Charlie Smith
// @email          r.charles.smith@gmail.com
// @updateURL      https://raw.github.com/emeraldo/crucible-line-toggle/master/crucible-line-toggle.js
// ==/UserScript==

var isLineNumberingOff = true;
var nodes = null;
var originalTexts = new Array();

window.addEventListener("DOMContentLoaded", function() {
    nodes = document.body.querySelectorAll(".tetrisColumn, .diffNav, .author, .revision, .diffLineNumbers, .diffLineNumbersA, .diffLineNumbersB");
    for (var i = 0; i < nodes.length; i++)
    {
        originalTexts[i] = nodes[i].innerHTML;
    }
    switch_button = document.createElement("button")
    switch_button_text = document.createTextNode("Toggle line numbers")
    switch_button.appendChild(switch_button_text)
    
    switch_button.onclick = function() { 
        if (isLineNumberingOff) {
            for (var i = 0; i < nodes.length; i++)
            {
                nodes[i].innerHTML = originalTexts[i];
            }
            isLineNumberingOff = false;
        }
        else {
            for (var i = 0; i < nodes.length; i++)
            {
                nodes[i].innerHTML = '';
            }
            isLineNumberingOff = true;
        }
    };
    var toolbar = document.getElementsByClassName("toolbar")[0]
    toolbar.appendChild(switch_button);
}, false);


            
