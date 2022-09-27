//form fields
const form = document.querySelector('.form-data');
const region = document.querySelector('.region-name');
const apikey = document.querySelector('.api-key');

//results
const errors = document.querySelector('.errors');
const loading = document.querySelector('.loading');
const results = document.querySelector('.result-container');
const usage = document.querySelector('.carbon-usage');
const fossilfuel = document.querySelector('.fossil-fuel');
const myregion = document.querySelector('.my-region');
const clearBtn = document.querySelector('.clear-btn');


form.addEventListener('submit', (e)=> handleSubmit(e));
clearBtn.addEventListener('click', (e)=> reset(e));
init();

