
//1. Creación de un Objeto Básico:
const Libro = {
    titulo:'Harry Potter',
    autos:'J.K. Rowling',
    añoDePublicacion:1956
};

console.log(Libro);

//2. Anidación de Objetos:
const Estudiante = {
    nombre:'Axel',
    edad:'21',
//3. Métodos en Objetos:
    Direccion:{
        calle:'Guemes',
        ciudad:'Concepcion del uruguay',
        pais:'Argentina'       
    }
};

console.log(Estudiante)

//4. Iteración sobre Propiedades de un Objeto:
const Product = {
    name:'Keyboard',
    price: 10500,
    available: true
};

for (let property in Product){
    console.log (`${property}: ${Product[property]}`)
};

//5. Actualización de Propiedades:
Product.price = 12000;

console.log(Product);

//6. Comprobación de Propiedades:
function hasProperty(objet,string){
    return string in objet
};

console.log(hasProperty(Product,'price'));

//7. Eliminación de Propiedades:
console.log(Product);

delete Product.available;

console.log(Product);

//8. Combinar Objetos:
const Person1 = {
    name:'Axel',

};
const person2 = {
    name1:'Jose',
};

const combination = Object.assign(Person1,person2);

console.log(combination);

//9. Copiar Objetos:
const copyStudent = JSON.parse(JSON.stringify(Estudiante));

copyStudent.nombre = "Carlos";

console.log(Estudiante)
console.log(copyStudent)

//10. Métodos Getters y Setters:

const Libro1 = {
    titulo:'Harry Potter',
    autos:'J.K. Rowling',
    _añoDePublicacion:1956,

    get añoDePublicacion() {
        return this._añoDePublicacion;
    },

    set añoDePublicacion(nuevoAño) {
        if (typeof nuevoAño === 'number' && nuevoAño > 0) {
            this._añoDePublicacion = nuevoAño;
        } else {
            console.log("Por favor, introduce un año válido.");
        }
    }
};

Libro1.añoDePublicacion = 1997;
console.log(Libro1);
