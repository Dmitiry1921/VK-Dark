const fs = require('fs');

let fileContent = fs.readFileSync("./less/tampermonkey_plugin.css", "utf8");

let file = `// ==UserScript==
// @name         VK Dark
// @namespace    http://tampermonkey.net/
// @version      beta 2.5
// @description  Изменяет внешний вид Вконтакте на темный
// @author       Dmitriy1921
// @include      http://vk.com/*
// @include      https://vk.com/*
// @grant        none
// ==/UserScript==
(function() {
   var css = \`${fileContent}\`,
       head = document.head || document.getElementsByTagName('head')[0],
       style = document.createElement('style');

    head.appendChild(style);

    style.type = 'text/css';
    if (style.styleSheet){
        // This is required for IE8 and below.
        style.styleSheet.cssText = css;
    } else {
        style.appendChild(document.createTextNode(css));
    }
})();
`;

fs.writeFileSync("./vkdark.user.js", file);
