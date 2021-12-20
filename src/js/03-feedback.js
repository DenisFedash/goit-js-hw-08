import throttle from "lodash/throttle";

const STORAGE_KEY = 'feedback-form-state';

const refs = {
    form: document.querySelector('.feedback-form'),
    input: document.querySelector('.feedback-form input'),
    textarea: document.querySelector('.feedback-form textarea')
};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onFormInput, 500));

savedTextarea();

const formData = {
};

function onFormSubmit(evt) {   
    evt.preventDefault();
    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
    console.log(formData);
};

function onFormInput(evt) {
    formData[evt.target.name] = evt.target.value;    
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
};

function savedTextarea() {    
    const savedData = localStorage.getItem(STORAGE_KEY);
    const parsedData = JSON.parse(savedData);
    if (savedData) {
        refs.input.value = parsedData.email
        refs.textarea.value = parsedData.message
    }           
}