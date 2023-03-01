var tipoNumero = 3;
var tipoString = "Javier";
var tipoBulenao = true
var tipoObjeto = {
    tipoAltura: 180,
    tipoAccesorio: "gafas",
    tipoSexoMasculino: true,
    tipoListaObjeto: [
        {
            zapatos: 2,
            tenis: 1,
        },
        {
            zapatos: 3,
            tenis: 4,
        }
    ]
}
var tipoLista = [
    "camisa",
    13,
    false,
];
console.log(tipoLista[0])
console.log(tipoObjeto.tipoSexoMasculino);
console.log(tipoString)
console.log(tipoObjeto.tipoListaObjeto[1].zapatos)

var biblioteca = {
    nombre: "Blibioteca Nacional",
    empleados : [
        {
            nombre: 'Laura',
            edad: 12,
            sexo: 'femenino'
        }
    ],
    direccion: 'Carrera 7',
    libros: [
        {
            titulo: "elric de Melnibone",
            paginas: 100,
            categoria: 'fantasia'
        },
        {
            titulo: "harry potter",
            paginas: 75,
            categoria: 'fantasia'
        },
        {
            titulo: "El nombre Del Viento",
            paginas: 150,
            categoria: 'accion'
        },
    ],
    abierta: false,
}
console.log(biblioteca.libros[1].paginas)


var restaurante1 = {
nombre: "La Kalma1",
direccion: "carrera 9",
platillos: [
    {
        plato: "pizza",
        tipos: [
            "peperoni",
            "hawaiana",
        ],
        porciones: 6
    },
    {
        plato: "pasta",
        tipos: [
            "boloñesa",
            "carbonara",
        ],
    },
    {
        plato: "panacotta",
        tamanos: [
            "normal",
            "grande",
        ]
    }
]
}

var restaurante2 = {
    nombre: "La Kalma2",
    direccion: "carrera 8",
    platillos: [
        {
            plato: "pizza",
            tipos: [
                "peperoni",
                "hawaiana",
            ],
            porciones: 6
        },
        {
            plato: "pasta",
            tipos: [
                "boloñesa",
                "carbonara",
            ],
        },
        {
            plato: "panacotta",
            tamanos: [
                "normal",
                "grande",
            ]
        }
    ]
    }

console.log(restaurante1.platillos[1].tipos[0])

function suma(a,b,c){
    var resultado = a+b+c;
    return resultado;
}

console.log(suma(2,3,4));

function saludo(){
    console.log("hola");
}
saludo();

function saludos(nombre,apellido){
    var segundoApellido = "Gomez"
    segundoApellido = 'Gomez2'
    return "hola"+" "+ nombre + " "+ apellido;
}
console.log(saludos("javier","ricaurte"));

var saludose = saludos("javier","ricaurte");

console.log(saludose+" como estas?");

function nombreres(restauranteNum){
    console.log(restauranteNum.nombre);
}
nombreres(restaurante2);

var restaurantes = [
    restaurante1,
    restaurante2,
]

console.log(restaurantes[1].nombre)

function direccionRes(restaurantes){
    console.log(restaurantes[0].direccion+","+restaurantes[1].direccion)
}
direccionRes(restaurantes);

var personas = [
        {
            nombre: "Javier",
            genero: "masculino",
            edad: 29,
            altura: 180,
        },
        {
            nombre: "Francisco",
            genero: "masculino",
            edad: 27,
            altura: 170
        },
        {
            nombre: "Gloria",
            genero: "femenino",
            edad: 25,
            altura: 175,
        }
];

function edads(){
    return (personas[0].edad+", "+personas[1].edad+", "+personas[2].edad);
}

var edades = edads()

console.log(edades);

var personas1 = [
    {
        edad: 21
    },
    {
        edad: 21
    },
    {
        edad: 22
    }
]

function listaEdad(listaPersonas){
    if (listaPersonas[0].edad > 20 && listaPersonas[1].edad > 20 && listaPersonas[2].edad > 20){
        console.log ("Todos son mayores de 20")
    } else if(listaPersonas[0].edad < 20 && listaPersonas[1].edad < 20 && listaPersonas[2].edad < 20){
        console.log ("Nadie es mayor de 20")
    } else if(listaPersonas[0].edad < 20 && listaPersonas[1].edad > 20 && listaPersonas[2].edad > 20){
        console.log ("las siguientes personas son menores de 20:" + listaPersonas[0].nombre)
    } else if(listaPersonas[0].edad < 20 && listaPersonas[1].edad < 20 && listaPersonas[2].edad > 20){
        console.log ("las siguientes personas son menores de 20:" + listaPersonas[0].nombre + listaPersonas[1].nombre)
    }else if(listaPersonas[0].edad < 20 && listaPersonas[1].edad > 20 && listaPersonas[2].edad < 20){
        console.log ("las siguientes personas son menores de 20:" + listaPersonas[0].nombre + listaPersonas[2].nombre)
    } else if(listaPersonas[0].edad > 20 && listaPersonas[1].edad < 20 && listaPersonas[2].edad > 20){
        console.log ("las siguientes personas son menores de 20:" + listaPersonas[1].nombre)
    } else if(listaPersonas[0].edad > 20 && listaPersonas[1].edad < 20 && listaPersonas[2].edad < 20){
        console.log ("las siguientes personas son menores de 20:" + listaPersonas[1].nombre + listaPersonas[2].nombre)
    } else {
        console.log ("las siguentes personas son menores de 20" + listaPersonas[2].nombre)
    }
}

function darListaPersonas(a,b,c){
    return [
        {
            nombre: "david",
            edad: a
        },
        {
            nombre: "jose",
            edad:b
        },
        {
            nombre: "isabel",
            edad: c
        }
    ]
}

console.log(darListaPersonas(13,15,20))
console.log(darListaPersonas(3,5,7))
console.log(darListaPersonas(3,5,70))

function suma(a,b){
    return a + b
}


listaEdad([
    {
        edad:13
    },
    {
        edad:21
    },
    {
        edad:34
    }
])
listaEdad(personas1)

listaEdad(darListaPersonas(10,11,12))
listaEdad(darListaPersonas(21,11,12))
listaEdad(darListaPersonas(10,21,12))
listaEdad(darListaPersonas(12,12,21))
listaEdad(darListaPersonas(11,21,21))
listaEdad(darListaPersonas(21,11,21))
listaEdad(darListaPersonas(21,21,11))
listaEdad(darListaPersonas(21,21,22))

function crearPersona(nombre,edad){
    return {
        nombre: nombre,
        edad: edad,
    }
}
var persona = crearPersona("javier",29)
console.log(persona)

function crearPersonas(nombre1,edad1,nombre2,edad2){
    var persona1 = crearPersona(nombre1,edad1)
    var persona2 = crearPersona(nombre2,edad2)
    return [
       persona1,
       persona2
    ]
}

var cPersonas = crearPersonas("javier",29,"francisco",27)
console.log(cPersonas)

function crearClase(nombreClase,numeroEstudiantes){
    if (numeroEstudiantes <= 5){
        return {
            nombre: nombreClase,
            tamano: "pequena",
        }            
    }
    if (numeroEstudiantes >5){
        return{
            nombre:nombreClase,
            tamano: "grande"
        }
    }
}

var clase = crearClase("geometria",4)
console.log(clase)

function crearClase2(nombreClase,numeroEstudiantes){
    var tamanoClase = "grande"
    if (numeroEstudiantes <= 5){
        tamanoClase = "pequena"
    }
    return{
        nombre:nombreClase,
        tamano: tamanoClase
    }
}



var clase2 = crearClase2("geometria2",4)
var clase3 = crearClase2("geometria3",6)
console.log(clase2)
console.log(clase3)


function crearClase3(nombreClase,numeroEstudiantes){
    var tamanoClase;
    if (numeroEstudiantes <= 5){
        tamanoClase = "pequena"
    } else {
        tamanoClase = "grande"
    }
    return{
        nombre:nombreClase,
        tamano: tamanoClase
    }
}

var clase4 = crearClase3("geometria2",4)
var clase5 = crearClase3("geometria3",6)
console.log(clase4)
console.log(clase5)

function suma5(numeros){
    var numero
    if (numeros[0] > 5 && numeros[1] > 5 && numeros[2] > 5){
        numero = numeros[0] + numeros[1] + numeros[2]
    } else if (numeros[0] > 5 && numeros[1] > 5 && numeros[2] <= 5){
        numero = numeros[0] + numeros[1]
    } else if (numeros[0] > 5 && numeros[1] <= 5 && numeros[2] > 5){
        numero = numeros[0] + numeros[2]
    } else if (numeros[0] <= 5 && numeros[1] > 5 && numeros[2] > 5){
        numero = numeros[1] + numeros[2]
    } else if (numeros[0] > 5 && numeros[1] <= 5 && numeros[2] <= 5){
        numero = numeros[0]
    } else if (numeros[0] <= 5 && numeros[1] > 5 && numeros[2] <= 5){
        numero = numeros[1]
    } else if (numeros[0] <= 5 && numeros[1] <= 5 && numeros[2] > 5){
        numero = numeros[2]
    } else {
        numero = 0
    }
    return numero;
}

console.log(suma5([10,1,7]))

function suma52(numeros){
    var numero = 0
    if (numeros[0] > 5){
        numero = numero + numeros[0]
    } 
    if (numeros[1] > 5){
        numero = numero + numeros[1]
    }
    if (numeros[2] > 5){
        numero += numeros[2]
    }
    return numero;
}

console.log(suma52([10,1,7]))

// Todo esto hace lo mismo
var numero3 = 3
console.log(numero3);
numero3++
console.log(numero3);
numero3+=1
console.log(numero3);
numero3 = numero3 + 1
console.log(numero3);

/** 
    Hay 2 tipos de recorridos a una lista, uno donde estas buscando algo y puedes hacer return
    una vez encuentras lo que estas busando dado que no tiene sentido seguir busando.
    Un ejemplo de esto es buscar en una lista de peliculas la que se llame de x manera, una vez encuentras
    una pelicula que se llame como quieres no tiene sentido que sigas buscando, es decir puede hacer return.
    El otro tipo de recorrido es donde si o si tienes que recorrer toda la lista, una ejemplo de esto es buscar
    el numero mas grande de una lista, no tiene sentido que hagas return antes de reccorrerla toda dado que el mas
    grande podria estar en ultimo lugar. En este ultimo tipo de recorridos se suele guardar en una variables 
    el resultado parcial despues de observar cada item de la lista. 

    ejemplo: buscar cuantos numeros de una lista son mayores a 6
    
    function mayoresA6(lista) {
        var mayores = 0;
        if(lista[0]>6) {
            mayores = mayores + 1
        }
        if(lista[1]>6) {
            mayores = mayores + 1
        }
        if(lista[2]>6) {
            mayores = mayores + 1
        }
        if(lista[3]>6) {
            mayores = mayores + 1
        }
        return mayores
    }

    Si al llamar la funcion mayoresA6 le pasamos el siguiente valor a lista [10,3,1,9] 
    el algoritmo funcionará de la siguiente manera. 

    Inicialmente se inicializa una variable con un resultado parcial sin haber recorrido ningun elemento de la lista,
    en este caso ese variable es "mayores" con un valor de 0 dado que en este punto el numero de elementos
    mayores a 6 que hemos encontrado es 0. Una vez puesto este primer resultado parcial empezamos a iterar.
    
    el primer elemento  es mayor a 6? si lo es nuestro resultado parcial se incrementa en uno!,
    de lo contrario permanece igual

    el segundo elemento  es mayor a 6? si lo es nuestro resultado parcial se incrementa en uno!,
    de lo contrario permanece igual

    ...asi con todos los elementos hasta al final retornar la variable donde estabamos acumulando el resultado

    Es importante tener en cuenta que en algunas ocasiones necesitaremos acumular mas de un valor tras
    cada iteracion!, siempre que quieras ir acumulando algo tras cada iteracion es importante crear
    estas variables antes de empezar a iterar e ir modificandolas como sea necesario.

    Recuerda que por acumulacion nos referimos a cualquier operacion que le hagas a una variable despues 
    de cada iteracion,

    por ejemplo:

    var variableParaGuardarUnBooleano = false
    if(x condicion se cumple) {
        variableParaGuardarUnBooleano = true;
    } 

    var variableParaContar = 0
    if(x condicion se cumple) {
        variableParaContar += 1
    }

    var variableParaSumar = 0
    if(x condicion se cumple) {
        variableParaSumar = variableParaSumar + loQueQuieroSumarle
    }

    var variableParaGuardarUnNumero = 0
    if(x condicion se cumple) {
        variableParaGuardarUnNumero = loQueQuieroGuardar
    }

    var varialbeParaGuardarObjeto = null
    if(x condicion se cumple) {
        varialbeParaGuardarObjeto = unObjeto
    }

    var varialbeParaGuardarCosasEnUnaLista = []
    if(x condicion se cumple) {
        varialbeParaGuardarCosasEnUnaLista.push(loQueQuieroGuardarEnLaLista)
    }
**/

// cantidad y nombre

function claseConMasEstudiantes(clases){
    var clase = null;
    var maxNumeroEstudiantes = 0;
    if(clases[0].cantidad > maxNumeroEstudiantes) {
        maxNumeroEstudiantes = clases[0].cantidad
        clase = clases[0]
    } 
    if(clases[1].cantidad > maxNumeroEstudiantes){
        maxNumeroEstudiantes = clases[1].cantidad
        clase = clases[1]
    } 
    if(clases[2].cantidad > maxNumeroEstudiantes){
        maxNumeroEstudiantes = clases[2].cantidad
        clase = clases[2]
    }
    return clase
} 


console.log(claseConMasEstudiantes([
    {
        cantidad: 14,
        nombre: '1'
    },
    {
        cantidad: 16,
        nombre: '1'
    },
    {
        cantidad: 17,
        nombre: '1'
    },
]))

function claseConMenosEstudiantes(clases){
    var clase = null;
    var minNumeroEstudiantes = Number.MAX_VALUE;
    if(clases[0].cantidad < minNumeroEstudiantes) {
        minNumeroEstudiantes = clases[0].cantidad
        clase = clases[0]
    } if(clases[1].cantidad < minNumeroEstudiantes){
        minNumeroEstudiantes = clases[1].cantidad
        clase = clases[1]
    } if(clases[2].cantidad < minNumeroEstudiantes){
        minNumeroEstudiantes = clases[2].cantidad
        clase = clases[2]
    }
    return clase
} 

function sonTodosClasesMayor5(clases){
    var minNumeroEstudiantes = 5;
    if(clases[0].cantidad <= minNumeroEstudiantes){
        return false;
    } 
    if (clases[1].cantidad <= minNumeroEstudiantes){
        return false;
    } if (clases[2].cantidad <= minNumeroEstudiantes){
        return false
    }
    return true
}

function listaTodasClasesMayorX(clases,cantidad){
    var minNumeroEstudiantes = cantidad
    var listaClases = []

    if(!clases){
        console.log("No se puede dejar clase vacio")
        return
    }
    if (clases.length != 3){
        console.log("Tienen que ser 3 clases")
        return
    }
    if(clases[0].cantidad > minNumeroEstudiantes){
        listaClases.push(clases[0]);
    } 
    if (clases[1].cantidad > minNumeroEstudiantes){
        listaClases.push(clases[1]);;
    } 
    if (clases[2].cantidad > minNumeroEstudiantes){
        listaClases.push(clases[2]);
    }
    return listaClases
}

console.log(listaTodasClasesMayorX([
    {
        cantidad: 14,
        nombre: '1'
    },
    {
        cantidad: 6,
        nombre: '1'
    }
],7))
 

function imprimirNumeros(numero){
   for (var index = 0; index <= numero; index+=1){
    console.log(index)
   }
}

imprimirNumeros(5)
console.log('--------');

function imprimirNumerosAlrevez(numero){
    for (var numeros = numero; numeros > 0; numeros-=1){
     console.log(numeros)
    }
 }

 imprimirNumerosAlrevez(5)
 console.log('--------');

 function imprimirParImpar(numero){
    for (var index = 0; index <= numero; index+=1){
        if(index % 2 == 0){
            console.log("el numero es par " + index)
        } else{
            console.log("el numero es impar " + index)
        }
    }
 }

 imprimirParImpar(11)
 console.log('--------');

 function listaTodasClasesMayorX2(clases,cantidad){
    var listaClases = []

    if(!clases){
        console.log("No se puede dejar clase vacio")
        return
    }
    for (var i = 0; i < clases.length; i++) {
        if(clases[i].cantidad > cantidad){
            listaClases.push(clases[i]);    
        }
    } 
    return listaClases
}

console.log(listaTodasClasesMayorX2([
    {
        cantidad: 14,
        nombre: '1'
    },
    {
        cantidad: 16,
        nombre: '1'
    },
    {
        cantidad: 3,
        nombre: '1'
    }
    ,
    {
        cantidad: 10,
        nombre: '1'
    }
],7))

function claseConMayorNumeroEstudiantes(clases){
    var clase = null;
    var maxNumeroEstudiantes = 0
    if (!clases){
        console.log("Hay que usar una lista")
    }
    for (var i = 0; i < clases.length; i++) {
        if (clases[i].cantidad > maxNumeroEstudiantes) {
            maxNumeroEstudiantes = clases[i].cantidad
            clase = clases[i]
        }
    }
    console.log(clase)
}
 
claseConMayorNumeroEstudiantes([
    {
        cantidad: 14,
        nombre: '1'
    },
    {
        cantidad: 16,
        nombre: '2'
    },
    {
        cantidad: 3,
        nombre: '3'
    }
    ,
    {
        cantidad: 10,
        nombre: '4'
    }
])

function claseUConMayorNumeroEstudiantes(universidades){
    var clasex = null;
    var maxNumeroEstudiantes = 0
    if (!universidades){
        console.log("Hay que usar una lista")
    }
    for (var i = 0; i < universidades.length; i++) {
        var universidad = universidades[i]
        for (var index = 0; index < universidad.clases.length; index++) {
            var materia = universidad.clases[index]
            if (materia.cantidad > maxNumeroEstudiantes) {
                maxNumeroEstudiantes = materia.cantidad
                clasex = materia
            }
        }
    }
    console.log(clasex)
}


claseUConMayorNumeroEstudiantes([
    {
        nombre: 'U1',
        clases: [
            {
                nombre: 'U1C1',
                cantidad: 21,
                tipo: "A"
            },
            {
                nombre: 'U1C2',
                cantidad: 12,
                tipo: "B"
            }
        ]
    },
    {
        nombre: 'U2',
        clases: [
            {
                nombre: 'U2C1',
                cantidad: 20,
                tipo: "A"
            },
            {
                nombre: 'U2C2',
                cantidad: 4,
                tipo: "B"
            }
        ]
    },
])

console.log("------------")

function claseUConMenorNumeroEstudiantesTipoA(universidades){
    var clasex = null;
    var minNumeroEstudiantes = Number.MAX_VALUE;
    if (!universidades){
        console.log("Hay que usar una lista")
    }
    for (var i = 0; i < universidades.length; i++) {
        var universidad = universidades[i]
        for (var index = 0; index < universidad.clases.length; index++) {
            var materia = universidad.clases[index]
            if (materia.tipo == "A" && materia.cantidad < minNumeroEstudiantes) {
                clasex = materia
            } 
        }
    }
    console.log(clasex)
}

claseUConMenorNumeroEstudiantesTipoA([
    {
        nombre: 'U1',
        clases: [
            {
                nombre: 'U1C1',
                cantidad: 21,
                tipo: "A"
            },
            {
                nombre: 'U1C2',
                cantidad: 12,
                tipo: "B"
            }
        ]
    },
    {
        nombre: 'U2',
        clases: [
            {
                nombre: 'U2C1',
                cantidad: 20,
                tipo: "A"
            },
            {
                nombre: 'U2C2',
                cantidad: 4,
                tipo: "B"
            }
        ]
    },
])

console.log('------');

claseConMayorNumeroEstudiantes([
    {
        cantidad: 14,
        nombre: '1'
    },
    {
        cantidad: 16,
        nombre: '2'
    },
    {
        cantidad: 3,
        nombre: '3'
    }
    ,
    {
        cantidad: 10,
        nombre: '4'
    }
])

console.log('------');

var lista9Feb = [
    {
        cantidad: 14,
        nombre: 'aritmetica',
        tipo: 'P'
    },
    {
        cantidad: 16,
        nombre: 'filosofia',
        tipo: 'V'
    },
    {
        cantidad: 3,
        nombre: 'etica',
        tipo: 'P'
    }
    ,
    {
        cantidad: 10,
        nombre: 'biologia',
        tipo: 'V'
    }
]

console.log('------');

for (var comoSeMeDeLaHPGana of lista9Feb) {
    console.log(comoSeMeDeLaHPGana);
}

console.log('------');

function listaClasesTipoA(listaClases,claseTipo){
    var listaTipoClases = []
    for (var clase of listaClases) {
        if(clase.tipo == claseTipo){
            listaTipoClases.push(clase)
        }
    }
    return listaTipoClases
}

console.log(listaClasesTipoA(lista9Feb,"P"))

console.log('------');

function listaClasesTipoP(listaClases){
    var cambioNombreTipo = []
    for (var clase of listaClases) {
        if(clase.tipo == "P"){
            cambioNombreTipo.push({
                cantidad: clase.cantidad,
                tipo: "Presencial",
                nombre: clase.nombre,
            })
        } else if(clase.tipo == "V"){
            cambioNombreTipo.push({
                cantidad: clase.cantidad,
                tipo: "Virtual",
                nombre: clase.nombre,
            })
        }
    }
    return cambioNombreTipo
}

console.log(listaClasesTipoP(lista9Feb))

console.log('------x');

function listaClasesNombreMayuscula(listaClases){
    var cambioNombreMayuscula = []
    for (var clase of listaClases) {
            cambioNombreMayuscula.push({
                cantidad: clase.cantidad,
                nombre: clase.nombre.toUpperCase(),
            })
    }    
    return cambioNombreMayuscula
}

console.log(listaClasesNombreMayuscula(lista9Feb))

console.log('------x');

function listaTipoClaseVoF(listaClases,tipo){
    for (var clase of listaClases) {
        if(clase.tipo == tipo){
            return true
        }
    }
    return false
}

console.log(listaTipoClaseVoF(lista9Feb,"P"))

console.log('------x');

function sumaListaEstudiantes(listaClases){
    var cantidadEstudiantes = 0
    for (var clase of listaClases) {
        cantidadEstudiantes += clase.cantidad
    }
    return cantidadEstudiantes
}

console.log(sumaListaEstudiantes(lista9Feb))

console.log('------');

function sumaListaEstudiantesTipoX(listaClases,tipo){
    var clasesTipoX = listaClasesTipoA(listaClases,tipo)
    var sumaClases = sumaListaEstudiantes(clasesTipoX)
    return sumaClases
}

console.log(sumaListaEstudiantesTipoX(lista9Feb,"P"))

console.log('------');

function sumaListaEstudiantesP(listaClases,tipo){
    var cambioNombretipos = listaClasesTipoP(listaClasesTipoA(listaClases,tipo))
    var sumaClase = sumaListaEstudiantes(cambioNombretipos)
    return sumaClase
}

console.log(sumaListaEstudiantesP(lista9Feb,"P"))

console.log('------');

function buscarClase(listaClases,nombreClase){
        for (var clase of listaClases) {
            if(clase.nombre == nombreClase){
                return clase
            }
        }
        return null
}

var valor = buscarClase(lista9Feb,"filosofias")
console.log(valor);

console.log('------');

function funcion1(funcion2){
    funcion2('z')
   console.log('y')
}

funcion1(
    function funcion3(parametro) {
        console.log('x' +  " " + parametro)
    }
)

console.log('------');

function filtrarTipo(listaMaterias,tipoMateria) {
    var listaFiltrada = listaMaterias.filter(function(clases){
        return clases.tipo == tipoMateria
    })
    return listaFiltrada
}

console.log(filtrarTipo(lista9Feb,"P"))

console.log('------');

function mapeoNombres(listaMaterias){
var listaMapeada = listaMaterias.map(function(clases){
        return clases.nombre
    })
    return listaMapeada
}

console.log(mapeoNombres(lista9Feb))

console.log('------');

function busquedaNombre(listaMaterias,nombreMateria){
    var buscarEnLista = listaMaterias.find(function(clases){
        return clases.nombre == nombreMateria
    })
    return buscarEnLista
}

console.log(busquedaNombre(lista9Feb,"etica"))

console.log('------');

function listaSome(listaMaterias,cantidadMinimaEstudiantes){
    var listaBuleano = listaMaterias.some(function(clases){
        return clases.cantidad >= cantidadMinimaEstudiantes
    })
    return listaBuleano
}

console.log(listaSome(lista9Feb,15))

console.log('------');

function listaMayorX(listaMaterias,cantidadMinimaEstudiantes){
    var filtroLista = listaMaterias.filter(function(clases){
        return clases.cantidad >= cantidadMinimaEstudiantes
    })
    var mapeoLista = filtroLista.map(function(materias){
        return materias.nombre
    })
    return mapeoLista
}

console.log(listaMayorX(lista9Feb,11))

function crearClase(nombre,nombreProfe,cantidad){
    return {
        nombre: nombre,
        nombreProfe: nombreProfe,
        cantidad: cantidad
    }
}


var lista10Feb = [
    {
        nombre: 'aritmetica',
        nombreProfe: 'Gloria',
        cantidad: 2,
    },
    {
        nombre: 'filosofia',
        nombreProfe: 'Dhanna',
        cantided: 15,
    },
    {
        nombre: 'etica',
        nombreProfe: 'Javier',
        cantidad: 22,
    }
    ,
    {
        nombre: 'biologia',
        nombreProfe: 'Pacho',
        cantidad: 5,
    }
]

console.log('------');

function combinarListas(lista1,lista2){
    var listaMapeo = lista1.map(function(clase){
        var findObjeto = lista2.find(function(materia){
            return materia.nombre == clase.nombre
        })    
        clase.nombreProfe = findObjeto.nombreProfe
        return clase
    })
    return listaMapeo
}

console.log(combinarListas(lista9Feb,lista10Feb))

console.log('------');

function combinarListasMayoresDe(lista1,lista2,numero){
    // var listaMapeo = lista1.map(function(clase){
    //     var findObjeto = lista2.find(function(materia){
    //         return materia.nombre == clase.nombre
    //     })    
    //     return {
    //         nombre: findObjeto.nombre,
    //         cantidad: findObjeto.cantidad + clase.cantidad
    //     }
    // })
    var listaFiltro = lista1.filter(function(clase){
        var findObjeto = lista2.find(function(materia){
            return materia.nombre == clase.nombre
        })
        return clase.cantidad + findObjeto.cantidad >= numero
    })
    var mapeo2 = listaFiltro.map(function(clase){
        return clase.nombre
    })
    
    return mapeo2

}

console.log(combinarListasMayoresDe(lista9Feb,lista10Feb, 20))

console.log('-------');

class Clase {
    constructor(nombre,nombreProfe,cantidad){
        this.nombre = nombre;
        this.nombreProfe = nombreProfe;
        this.cantidad = cantidad
    }

    saludar(){
        return "Hola esta clase es " + this.nombre + " y el profe es " + this.nombreProfe 
    }
}

var clase = new Clase('Aritmetica', 'Javi', 12)
var clase2 = new Clase('Aritmetica', 'Glo', 12)
console.log(clase.nombre);
console.log(clase.nombreProfe);
console.log(clase.cantidad);
console.log(clase.saludar());

console.log('-------');

var biblioteca = {
    nombre: "Blibioteca Nacional",
    empleados : [
        {
            nombre: 'Laura',
            edad: 12,
            sexo: 'femenino'
        }
    ],
    direccion: 'Carrera 7',
    libros: [
        {
            titulo: "elric de Melnibone",
            paginas: 100,
            categoria: 'fantasia'
        },
        {
            titulo: "harry potter",
            paginas: 75,
            categoria: 'fantasia'
        },
        {
            titulo: "El nombre Del Viento",
            paginas: 150,
            categoria: 'accion'
        },
    ],
    abierta: false,
}

class Empleado {
    constructor(nombre,edad,sexo){
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo
    }
}  

class Libro {
    constructor(titulo,paginas,categoria){
        this.titulo = titulo
        this.paginas = paginas
        this.categoria = categoria
    }
}

class Biblioteca {
    constructor(nombre,empleados,direccion,libros,abierta){
        this.nombre = nombre
        this.empleados = empleados
        this.direccion = direccion
        this.libros = libros
        this.abierta = abierta
    }
}

var bibliotecas = [
    new Biblioteca(
        "Blibioteca Andina",
        [
            new Empleado("Empleado1",20,"Masculino"),
            new Empleado("Empleado2", 25, "Femenino"),
        ],
        "Cra 7",
        [
            new Libro("libro1",100,"fantasia"),
            new Libro("libro2",75,"ciencia ficcion"),
        ],
        true,
    ),
    new Biblioteca(
        "Blibioteca Javeriana",
        [
            new Empleado("Empleado3",20,"Masculino"),
            new Empleado("Empleado4", 25, "Femenino"),
        ],
        "Cra 8",
        [
            new Libro("libro3",80,"romance"),
            new Libro("libro3",95,"detectives"),
        ],
        false,
    )
]

console.log(bibliotecas[1].empleados[0]);

console.log('-------');

// consignacion -> cedulaOrigen cuentaDestino monto
// persona -> cedula nombre apellido

class Consignacion{
    constructor(cedulaOrigen,cuentaDestino,monto){
        this.cedulaOrigen = cedulaOrigen
        this.cuentaDestino = cuentaDestino
        this.monto = monto
    }
}

class Persona{
    constructor(cedula,nombre,apellido){
        this.cedula = cedula
        this.nombre = nombre
        this.apellido = apellido
    }
}

var listaConsignaciones = [
    new Consignacion("12345","67890",10000),
    new Consignacion("54321","98765",20000),
    new Consignacion("54321","1235543",30000),
]

var listaGente = [
    new Persona("12345","David","Velasquez"),
    new Persona("54321","Jose","Velasquez"),
]

function cuantoConsignoPersona(consignaciones,gente,nombre){
    var buscarEnGente = gente.find(function(persona){
        return persona.nombre == nombre
    })
    var verCedula = buscarEnGente.cedula
    // var listaDeConsignaciones = consignaciones.filter(function(consignacion){
    //     return consignacion.cedulaOrigen == verCedula
    // })
    var sumaMonto = 0
    for (var consignacion of consignaciones) {
        if(consignacion.cedulaOrigen == verCedula){
            sumaMonto += consignacion.monto
        }
        
    }

    return sumaMonto
}

console.log(cuantoConsignoPersona(listaConsignaciones,listaGente, 'Jose'));

console.log("-----")

function listaDeNumeros(listaNum){
    var listaNumMayor10 = []
    for (var numero of listaNum) {
        if(numero > 10){
            listaNumMayor10.push(numero)
        }
    } 
    return listaNumMayor10
}

console.log(listaDeNumeros([12,9,13]))
