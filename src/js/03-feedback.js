import throttle from "lodash/throttle";

const STORAGE_KEY = 'feedback-form-state';

const refs = {
    form: document.querySelector('.feedback-form'),
    input: document.querySelector('.feedback-form input'),
    textarea: document.querySelector('.feedback-form textarea')
};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onFormInput, 500));

let formData = {};
savedTextarea();

function onFormSubmit(evt) {  
    evt.preventDefault();
    console.log(formData);
    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
    
};

function onFormInput(evt) {
    formData[evt.target.name] = evt.target.value;    
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));    
};

function savedTextarea() {
    const savedData = localStorage.getItem(STORAGE_KEY);
    const parsedData = JSON.parse(savedData);
    if (parsedData) {
        refs.input.value = parsedData.email || '';
        refs.textarea.value = parsedData.message || '';
        formData.email = refs.input.value;
        formData.message = refs.textarea.value;
    }           
}


