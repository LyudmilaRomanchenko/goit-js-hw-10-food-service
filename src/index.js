//Было установлено с шаблона
//import './sass/main.scss';

//event.preventDefault();

import foodCardsTmp from './templates/cards.hbs';
console.log(foodCardsTmp);

import menu from './menu.json';
console.log(menu);

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

// Создаем разметку по шаблону
const menuList = document.querySelector('.js-menu');
//console.log(menuList);

const cardMarkup = createMenuList(menu);
//console.log(cardMarkup);

menuList.insertAdjacentHTML('afterbegin', cardMarkup);

function createMenuList(menu) {
    return foodCardsTmp(menu);
};

//По умолчанию тема светлая.
const getBody = document.querySelector('body');
console.log(getBody);
getBody.classList.add(Theme.LIGHT);

// Реализуем мозможность выбора темы
const selectCheckbox = document.querySelector('.theme-switch__toggle');
console.log(selectCheckbox);

//При изменении темы, необходимо добавлять на элемент body класс light-theme или dark-theme
selectCheckbox.addEventListener('change', onSelectThemes);

//Выбранная тема должна сохраняться между перезагрузками страницы. Для хранения темы используй localStorage.
function onSelectThemes(event) {
    if (selectCheckbox.checked) {
        getBody.classList.remove(Theme.LIGHT);
        getBody.classList.add(Theme.DARK);
        const darkTheme = getBody.getAttribute('class');
        console.log(darkTheme);
        
        localStorage.setItem('theme', darkTheme);
        console.log(localStorage.getItem('theme'));
    }
    else {
        getBody.classList.remove(Theme.DARK);
        getBody.classList.add(Theme.LIGHT);
        const lightTheme = getBody.getAttribute('class');
        console.log(lightTheme);
        localStorage.setItem('theme', lightTheme);
    }

}

//Если при загрузке страницы тема тёмная, не забудь поставить свойство checked у чекбокса #theme-switch-toggle в true, чтобы ползунок сдвинулся в правильное положение.
const getSwitchЬarker = document.querySelector('.theme-switch__marker');
console.log(getSwitchЬarker);

if (localStorage.getItem('theme') === 'dark-theme') {
    selectCheckbox.setAttribute('checked', 'true');
    getBody.classList.remove(Theme.LIGHT);
    getBody.classList.add(Theme.DARK);

    getSwitchЬarker.style.transition = 'none';
}

