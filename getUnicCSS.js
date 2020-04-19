'use strict';

const css = require('css');
const fs = require('fs');

const readCSS = fs.readFileSync("./less/tampermonkey_plugin.css", "utf8");

const parsedCSS = css.parse(readCSS);

let res = {};
parsedCSS.stylesheet.rules.forEach(style => {
    style.declarations.forEach(dec => {
        const key = `${dec.property}: ${dec.value};`
        if(!res[key]) res[key] = [];
        res[key].push(style.selectors.join(','));
    })
});
const res1 = {};
Object.keys(res).map(key => {
    if(res[key].length > 1)
        res1[key] = res[key]
});

fs.writeFileSync("./notUniq.json", JSON.stringify(res1, null, 4));

