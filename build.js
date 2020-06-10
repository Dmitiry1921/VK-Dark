'use strict';
const fs = require('fs');
const path = require('path');
const JSObfuscator = require('javascript-obfuscator');

const {setVariable, inlineHTML, getDefaultStorageFromHTML} = require('./utils/general');

const pckg = require('./package.json');

const defaultStorage = require('./src/defaultStorage.json');

const lessFiles = fs.readdirSync('./styles');
const Styles = {};

lessFiles.forEach(file => {
    Styles[file.replace('.less', '')] = fs.readFileSync(path.join( './css', file.replace('.less', '.css')), "utf8");
});

let script = fs.readFileSync("src/script.js", "utf8");
let meta = fs.readFileSync("src/meta.js", "utf8");
let settingsHTML = fs.readFileSync("src/settings.html", "utf8");

settingsHTML = inlineHTML(setVariable(settingsHTML, {
    bugsLink: pckg.bugsLink,
    ...getDefaultStorageFromHTML(defaultStorage)
})); //Устанавливаем переменные в HTML

const VARIABLES = {
    package: pckg,
    settingsHTML,
    defaultStorage: JSON.stringify(defaultStorage, null, 4),
    ...Styles,
}

meta = setVariable(meta, VARIABLES);
script = setVariable(script, VARIABLES);

try {
    script = JSObfuscator.obfuscate(script, {compact: true})
} catch(e) {
    console.error('JSObfuscatorERROR', e)
}

fs.writeFileSync("./vkdark.user.js", meta+script);
fs.writeFileSync("./vkdark.meta.js", meta);


