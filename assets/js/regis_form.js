'use strict';
console.log('regis_form.js');

import validateForm from './form_class.js';

const sbmt = document.getElementById('sbmt');
sbmt.addEventListener('click', (e)=>{
    e.preventDefault();

    //Capturamos todo el formulario
    const rawForm = document.forms['regis_form'];

    //Creamos un array con los atributo que nos interesan
    const arrayForm = validateForm.get_arrayForm(rawForm)
    console.log(arrayForm);




})

