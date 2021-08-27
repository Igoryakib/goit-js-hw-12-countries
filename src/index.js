import './sass/main.scss';
import * as functions from './functions';
import fetchCountries from './fetchCountries';
const debounce = require('lodash.debounce');
const inputFormRef = document.querySelector('.searchCountryInput');

const inputFn = () => {
       fetchCountries(inputFormRef.value).then(functions.verifyDataLength);
 };

inputFormRef.addEventListener('input', debounce(() => {
    inputFn();
}, 500));