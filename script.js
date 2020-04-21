// Пункт меню, добавляется после старта браузера
GM_registerMenuCommand('Check Update', () => {
    GM_openInTab('{{package.downloadURL}}', {active: true, insert: true});
});
const css = `{{vkdark}}`;
GM_addStyle(css);
