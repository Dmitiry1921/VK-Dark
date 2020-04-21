// Пункт меню, добавляется после старта браузера
GM_registerMenuCommand('Github.com', () => {
    GM_openInTab('{{package.homepage}}', {active: true, insert: true});
});
GM_registerMenuCommand('Check Update', () => {
    GM_openInTab('{{package.downloadURL}}', {active: true, insert: true});
});
GM_registerMenuCommand('Сообщить об ошибке', () => {
    GM_openInTab('{{package.bugsLink}}', {active: true, insert: true});
});
const css = `{{vkdark}}`;
GM_addStyle(css);
