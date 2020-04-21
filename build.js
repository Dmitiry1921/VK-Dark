const fs = require('fs');
const package = require('./package.json');

//Создает файл css/vkdark.css
require('./css_merge');

let vkdark = fs.readFileSync("./css/vkdark.css", "utf8");

let meta = `// ==UserScript==
// @name         VK Dark
// @namespace    https://github.com/
// @version      ${package.version}
// @description  ${package.description}
// @author       ${package.author}
// @downloadURL  ${package.downloadURL}
// @updateURL    ${package.updateURL}
// @supportURL   ${package.supportURL}
// @homepage     ${package.homepage}
// @include      http://vk.com/*
// @include      https://vk.com/*
// @include      https://vkpay.io/*
// @include      https://new.broadcast.vkforms.ru/*
// @include      https://poll.vip243.vkforms.ru/*
// @include      https://donate.vip243.vkforms.ru/*
// @grant        GM_addStyle
// @grant        GM_registerMenuCommand
// @grant        GM_unregisterMenuCommand
// @run-at       document-end
// ==/UserScript==`;

const script = `
// Пункт меню, добавляется после старта браузера
// GM_registerMenuCommand('Разработчик', () => {
//     console.log('GM_registerMenuCommand is work');
// });
const css = \`${vkdark}\`;
GM_addStyle(css);
`;

fs.writeFileSync("./vkdark.user.js", meta+script);
fs.writeFileSync("./vkdark.meta.js", meta);


