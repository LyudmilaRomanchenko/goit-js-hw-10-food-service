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

// Реализуем мозможность выбора темы

const selectCheckbox = document.querySelector('.theme-switch__toggle');
console.log(selectCheckbox);

const getBody = document.querySelector('body');
console.log(getBody);

selectCheckbox.addEventListener('change', onSelectThemes);


function onSelectThemes(event) {
    if (selectCheckbox.checked) {
        getBody.classList.remove(Theme.LIGHT);
        getBody.classList.add(Theme.DARK);
        const darkTheme = getBody.getAttribute('class');
        console.log(darkTheme);
        
        localStorage.setItem('theme', darkTheme);
        //console.log(localStorage.getItem('theme'));
        if (localStorage.getItem('theme')) {
            selectCheckbox.setAttribute('checked', 'true');
        }
       
        //save();
       
    }
    else {
        getBody.classList.remove(Theme.DARK);
        getBody.classList.add(Theme.LIGHT);
        const lightTheme = getBody.getAttribute('class');
        console.log(lightTheme);
        localStorage.setItem('theme', lightTheme);
        
    }

}
// function saveCheckboxstatus() {
    
        
// }

// function save(){
    
//     if(selectCheckbox.checked) {
//         localStorage.setItem('checkbox1zaal1', true);
//     }
// }
//localStorage.removeItem('checkbox1zaal1');