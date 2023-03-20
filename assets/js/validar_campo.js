//CATALOGO DE ESTADOS
function estados(){
    return ['valueMissing', 'typeMismatch', 'patternMismatch', 'customError'];
}

//CATALOGO DE MENSAJES SEGUN VALIDACIÓN
function msg(typeValid, elemento){
    let states =  [
        {tipo: 'nombre',    valid: 'valueMissing',    msg: 'El campo no puede estar vacio'},
        {tipo: 'nombre',    valid: 'patternMismatch', msg: 'Hay caracteres no permitidos'},
        {tipo: 'mail',      valid: 'valueMissing',    msg: 'El campo no puede estar vacio'},
        {tipo: 'mail',      valid: 'typeMismatch',    msg: 'El correo no es válido'},
        {tipo: 'texto',     valid: 'valueMissing',    msg: 'El campo no puede estar vacio'},
        {tipo: 'pass',      valid: 'valueMissing',    msg: 'El campo no puede estar vacio'},
        {tipo: 'pass',      valid: 'patternMismatch', msg: 'Debe contener al menos 6 caracteres, máximo 12, al menos una letra minuscula, una mayuscula y numero.'},
        {tipo: 'fecha',     valid: 'valueMissing',    msg: 'El campo no puede estar vacio'},
        {tipo: 'tel',       valid: 'valueMissing',    msg: 'El campo no puede estar vacio'},
        {tipo: 'tel',       valid: 'patternMismatch', msg: 'Solo se permiten números'},
    ];

    //Filtrar para encontrar los tipos de validación
    let filter_valid = states.filter(ele => ele.valid == typeValid && ele.tipo == elemento.dataset.tipo);
    //console.log(elemento.validity);

    //console.log(filter_valid[0].msg);
    return filter_valid[0].msg;
}

//VALIDAR MAYORIA EDAD
function validar_mayoriaEdad(elemento){
    //Validar edad
    let feNac = new Date(elemento.value);
    let fech18 = new Date(feNac);
    fech18.setFullYear(fech18.getFullYear() + 18);
    let feAct = new Date();

    if(feAct > fech18){        
        elemento.parentElement.classList.remove('input-container--invalid');
        elemento.parentElement.querySelector('.input-message-error').innerHTML = "";
                
    }else{
        elemento.parentElement.classList.add('input-container--invalid');
        elemento.parentElement.querySelector('.input-message-error').innerHTML = "Debe tener al menos 18 años";
    }
}


//FUNCIÓN PRINCIPAL
function validar(elemento){
    //console.log("Se esta validando");
    //console.log(elemento.validity);

    if(elemento.dataset.edadmin == '18'){
        validar_mayoriaEdad(elemento);

    }else{
        if(!elemento.checkValidity()){
            elemento.parentElement.classList.add('input-container--invalid');
    
            //TRAER EL ARRAY DE ESTADOS
            let arrayEstados = estados();
    
            //VERIFICAR QUE ESTADO PRESENTA EL CAMPO
            arrayEstados.forEach(element => {
                if(elemento.validity[element]){
                    elemento.parentElement.querySelector('.input-message-error').innerHTML = msg(element, elemento);
                }
            });
        
        }else{
            elemento.parentElement.classList.remove('input-container--invalid');
        }
    }
}






