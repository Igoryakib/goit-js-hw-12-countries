import { error, success, notice } from '@pnotify/core';
import { defaults } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
import cardTemplate from './templates/templateCard.hbs';
import listTemplate from './templates/templateList.hbs';
defaults.delay = 5000;
const inputFormRef = document.querySelector('.searchCountryInput');
const renderCard = (cardInfo) => {
   document.querySelector('.section__wrapper__cards').innerHTML = '';
   document.querySelector('.section__wrapper__cards').insertAdjacentHTML('beforeend', cardTemplate(cardInfo));
};
const renderList = (listInfo) => {
   document.querySelector('.section__wrapper__cards').innerHTML = '';
   document.querySelector('.section__wrapper__cards').insertAdjacentHTML('beforeend', listTemplate(listInfo));
};
const verifyDataLength = (array) => {
   if(array.length > 10) {
      return error({text: "Too many matches found. Please enter a more specific query!"});
    }
    if(array.length >= 2 && array.length <= 10) {
       notice({text: 'if you want see card with country, please type name country!'});
       return renderList(array);
    }
    if(array.length === 1) {
      success({text: 'Great!! your country'});
      inputFormRef.value = '';
       return renderCard(array);
    }
};
export {verifyDataLength};