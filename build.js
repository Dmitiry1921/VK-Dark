'use strict';

const fs = require('fs');
const {setVariable} = require('./utils/general');

const pckg = require('./package.json');

//Создает файл css/vkdark.css
require('./css_merge');

const vkdark = fs.readFileSync("./css/vkdark.css", "utf8");
let script = fs.readFileSync("./script.js", "utf8");
let meta = fs.readFileSync("./meta.js", "utf8");

const VARIABLES = {
    vkdark,
    package: pckg
}

meta = setVariable(meta, VARIABLES);
script = setVariable(script, VARIABLES);

fs.writeFileSync("./vkdark.user.js", meta+script);
fs.writeFileSync("./vkdark.meta.js", meta);


