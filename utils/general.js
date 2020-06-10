/**
 * Задает переменные
 * @param template {String} - шаблон
 * @param context {Object} - контекст
 * @return {String} - Шаблон с вставленными переменными
 */
function setVariable(template, context) {
    let temp = template;
    temp.match(/{{(.*)}}/g).map(v => {
        v = v.substring(-2, v.length - 2).substring(2);
        let data;
        v.split('.').map(adr => {
            if(!data){
                data = context[adr];
                return;
            }
            if(!data[adr]) {
                console.error(`Wrong variable ${v}`, {data});
            }
            data = data[adr]
        })
        if(data === undefined){
            console.error('[BUILD]', 'Variable is undefined', v);
            return;
        }

        temp = temp.replace(`{{${v}}}`, data);
    })
    return temp;
}

/**
 * Схлопывает HTML код в 1 строку
 * @param htmlCode
 * @return {string}
 */
function inlineHTML(htmlCode){
    return htmlCode
        .replace(/\t/g, '')
        .replace(/\n/g, '')
        .split(' ').filter((el)=>el).join(' ')
}

/**
 * Проставляем значение defaultStorageFromHTML
 * @param defaultData {Object} - Значения из файлу defaultStorage.json
 * @return {Object}
 */
function getDefaultStorageFromHTML(defaultData){
    const res = {};
    Object.keys(defaultData).forEach(key => {
        res[key] = defaultData[key] ? 'checked' : '';
    })
    return res;
}

module.exports = {
    setVariable,
    inlineHTML,
    getDefaultStorageFromHTML,
};
