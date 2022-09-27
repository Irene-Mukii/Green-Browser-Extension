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

function init() {
    //if anything is in the local storage, pick it up
    const storedApiKey = localStorage.getItem('apiKey');
    const storedRegion = localStorage.getItem('regionName');

    //set icon to be generic green
    //todo

    if(storedApiKey === null || storedRegion === null) {
        //if we dont have the keys show the form
        form.style.display = 'block';
        results.style.display = 'none';
		loading.style.display = 'none';
		clearBtn.style.display = 'none';
		errors.textContent = '';
    }else {
        //if jeys/regions in localStorage, show results when they load
        displayCarbonUsage(storedApiKey, storedRegion);
            results.style.display = 'none';
            form.style.display = 'none';
            clearBtn.style.display = 'block'
    }
};

function reset(e) {
    e.preventDefault();
    //clear local storage for region only
    localStorage.removeItem('regionName');
    init();
}

function handleSubmit(e) {
    e.preventDefault(); //stop browser from refreshing
    setUpUser(apikey.ariaValueMax, region.value);
}

function setUpUser (apiKey, regionName){
    localStorage.setItem('apiKey', apiKey);
    localStorage.setItem('regionName', regionName);

    loading.style.display = 'block'
    errors.textContent = '';
    clearBtn.style.display = 'block';

    displayCarbonUsage(apiKey,regionName)
}