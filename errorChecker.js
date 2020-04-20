'use strict';

const css = require('css');
const fs = require('fs');

const readCSS = fs.readFileSync("./less/tampermonkey_plugin.css", "utf8");

const parsedCSS = css.parse(readCSS);

let res = {};
let selectors = {};
parsedCSS.stylesheet.rules.forEach(style => {
    style.declarations.forEach(dec => {
        const key = `${dec.property}: ${dec.value};`
        if(!res[key]) res[key] = [];
        if(!selectors[key]) selectors[key] = {};
        res[key].push(style.selectors.join(`,`));
        //Поиск не уникальных селекторов
        selectors[key] = style.selectors.reduce((acc, item, index) => {
            if(!acc[item]) acc[item] = 0;
            acc[item]++
            return acc
        }, {});
    });
});
const notUniq = {};
Object.keys(res).map(key => {
    if(res[key].length > 1)
        notUniq[key] = res[key]
});

//Получение списка повторяющихся селекторов в стиле
const doubleSelectors = {};
Object.keys(selectors).map(key => {
    Object.keys(selectors[key]).map(sel => {
        if(selectors[key][sel] > 1){
            if(!doubleSelectors[key]) doubleSelectors[key] = {};
            doubleSelectors[key][sel] = selectors[key][sel];
        }
    })
});

fs.writeFileSync("./errors.json", JSON.stringify({notUniq, doubleSelectors}, null, 4));


//Вывод сообщений об ошибках
if(Object.keys(doubleSelectors).length){
    Object.keys(doubleSelectors).map(selector => {
        console.error('ERROR [doubleSelectors]', `selector: ${selector}`, `count doubles: ${JSON.stringify(doubleSelectors[selector], null , 4)}`)
    });
}
if(Object.keys(notUniq).length){
    Object.keys(notUniq).map(selector => {
        console.error('ERROR [notUniq]', `selector: ${selector}`, `count doubles: ${JSON.stringify(notUniq[selector], null , 4)}`)
    });
}

