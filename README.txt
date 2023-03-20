Los campos del formulario tendran ciertos tipos de atributos definidos por data-
para una mejor validación.

data-tipo="nombre"
-Nombre
-Ciuedad
-Estado
(Acepta mayusculas o minusculas, espacio, punto o guion medio, ejemplo "G." o "Nicte-Ha", no acepta numeros).
pattern="^[a-zA-ZáéíóúÁÉÍÓÚüÜ.\- ]+$"

data-tipo="mail"
-Email.
pattern="^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$" 

data-tipo="fecha"
-Fecha nacimiento.

data-tipo="tel"
-Telefono
(solo números).
pattern="^[0-9]{10}$"

data-tipo="texto"
-Contraeña
-Direccion completa
(A diferencia de data-tipo="nombre") este campo puede llevar números y caracteres como # o /).
pattern="^[a-zA-ZáéíóúÁÉÍÓÚüÜ0-9.#\/\-\s]+$"
