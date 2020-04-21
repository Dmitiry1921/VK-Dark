/**
 * Задает переменные
 * @param template {String} - шаблон
 * @param context {Object} - контекст
 * @return {String} - Шаблон с вставленными переменными
 */
function  setVariable(template, context) {
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

module.exports = {
    setVariable,
};
