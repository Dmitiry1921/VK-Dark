// Пункт меню, добавляется после старта браузера
const styles = {
    'vkdark-main': `{{vkdark-main}}`,
    'settings': `{{settings}}`,
    'dialog-float': `{{dialog-float}}`,
    'menu-promo': `{{menu-promo}}`,
    'audio-promo': `{{audio-promo}}`,
    'audio-subscribe': `{{audio-subscribe}}`,
    'dialog-friend_online': `{{dialog-friend_online}}`,
};
const styleStorage = {};
const storageName = `{{package.name}}`;
const defaultStorage = `{{defaultStorage}}`;

// Работа с локальным хранилищем.
function getStorage(){
    return JSON.parse(localStorage.getItem(storageName));
}

function mutationStorageAfterSave(key, value, storage){
    switch (key) {
        case 'disable-all_promo':
            if(value) {
                storage['audio-subscribe'] = true;
                storage['audio-promo'] = true;
                storage['menu-promo'] = true;
            }
            break;
        case 'audio-subscribe':
        case 'audio-promo':
        case 'menu-promo':
            if(!value) {
                storage['disable-all_promo'] = false;
            }
            break;
    }
    return storage;
}

function setStorage(key, value) {
    let storage = getStorage();
    if(storage === null) {
        storage = JSON.parse(defaultStorage);
    }
    storage = mutationStorageAfterSave(key, value, storage);
    storage[key] = value;
    localStorage.setItem(storageName, JSON.stringify(storage));
    setStyles();
    setCheckbox();
}

if(getStorage() === null) {
    localStorage.setItem(storageName, defaultStorage);
}
function deleteAllStyles() {
    Object.keys(styleStorage).forEach(key => styleStorage[key].remove());
}

function setStyles() {
    //сначала удаляем стили.
    deleteAllStyles();
    const storage = getStorage();
    Object.keys(storage).forEach(key => {
        if(!!storage[key]) {
            styleStorage[key] = GM_addStyle(styles[key]);
        }
    });
}
//Получаем состояние чекбоксов из сторейжа и проставляешь их значения
function setCheckbox(){
    const storage = getStorage();
    Object.keys(storage).forEach(key => document.getElementById(key).checked = storage[key]);
}

GM_addStyle(styles['settings']);
setStyles();

GM_registerMenuCommand('Github.com', () => {
    GM_openInTab('{{package.homepage}}', {active: true, insert: true});
});
GM_registerMenuCommand('Check Update', () => {
    GM_openInTab('{{package.downloadURL}}', {active: true, insert: true});
});
GM_registerMenuCommand('Настройки', () => {
    const elMain = '.vk-dark.vk-dark-sittings-main-position';
    if(document.querySelector(elMain) !== null) return;
    //Добавляем блок на страницу
    document.body.insertAdjacentHTML('beforeEnd', `{{settingsHTML}}`);
    const main = document.querySelector(elMain);
    //Закрытие настроек
    function close() {
        document.body.removeChild(main);
    }
    document.querySelector('.vk-dark-close-settings').onclick = close;
    //Клик вне поля закрывает окно.
    main.onclick = (e) => {if(main === e.target) close()}
    //Вешаем события onchange на пункты настроек
    document.querySelectorAll('.vk-dark-hidden-checkbox').forEach(element => element.onchange = (e) => setStorage(e.target.id, e.target.checked));
    setCheckbox();
});
GM_registerMenuCommand('Сообщить об ошибке', () => {
    GM_openInTab('{{package.bugsLink}}', {active: true, insert: true});
});

console.info('VK Dark version: ', '{{package.version}}');
