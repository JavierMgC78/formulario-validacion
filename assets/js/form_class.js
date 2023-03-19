'use strict';
console.log('form.js');

export default  class ValidateForm{


    static get_arrayForm(form){
        let arrayForm = []; 

        //Obtenemos los elementos del formulario
        let elementsForm = form.elements;

        //Vemos que es un objeto
        console.log(typeof(form.elements));
            
        //Por lo que recorremos el objeto
        for(const elmnt in elementsForm){

            //Identificamos las etiquetas de input
            if(elementsForm[elmnt].tagName == 'INPUT'){
                console.log(elementsForm[elmnt].tagName);

                //Identificamos los elemntos que necesitamos
                console.log(elementsForm[elmnt].value);

                //Creamos el arra de la forma que necesitamos y añadimos los elementos
                //arrayForm.push([])


            }
        }


        //return arrayForm;
    }





}
