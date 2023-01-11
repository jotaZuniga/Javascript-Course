import InvertirCadena from "./InvertirCadena.js";
import Login from "./Login.js";
import { initListeners } from "./listeners.js";

// Ejercicio 1
console.log('Ejercicio #1');
const getObjectProps = (object) => {
  if (typeof object !== 'object') {
    throw new Error('El parametro no es un objeto');
  }

  const properties = Object.keys(object);
  console.log(properties);
  return properties;
};

const Person = {
  name: 'Jose Zuniga',
  position: 'Senior Front End',
  city: 'Costa Rica',
};

getObjectProps(Person);

// Ejercicio 2
console.log('Ejercicio #2')
const thisValues = {
  global: {
    definition: 'Cuando THIS esta asociado al window del browser. Javascript default',
    example: 'console.log(this); //window'
  },
  strict: {
    definition: 'Cuando se tiene activado el modo estricto. El THIS dentro de una funcion es UNDEFINED',
    example: `function hello() { 'strict mode';return this; }`,    
  },
  object: {
    definition: 'Cuando THIS esta dentro de un Objeto. Su contexto es el mismo objeto',
    example: 'const Person: {id: 092, info(){ console.log(this.id); }}',
  },
  arrowFunction: {
    definition: 'Cuando THIS esta en un arrow function. Su contexto es el global de la aplicacion',
    example: 'const Person: {id: 092, info: () => { console.log(this.id); }}',
  },
  events: {
    definition: 'Cuando THIS esta dentro de un evento. Este se asocia al elemento que llama al evento',
    example: 'function handleClick(ev) { ev.preventDefault(); console.log(this);}',
  },
  bind: {
    definition: 'Al utilizar Bind, call, apply. Estas funciones modifican el contexto del THIS, basados en el objeto que se asocia',
    example: 'function x(){...}; x.call(myObject, this)',
  },
};

console.table(thisValues);

// Ejercicio 3
console.log('Ejercicio #3');
const cadena = 'Hola Mundo';

if (cadena.length === 0) {
  throw new Error('cadena NO puede estar vacia!');
} else {
  const Invertir = new InvertirCadena(cadena);
  const cadenaInvertida = Invertir.transformarCadena();
  console.log(cadenaInvertida);

  try {
    Invertir.nuevoMetodo();
  } catch (error) {
   console.log(error);
  }finally {
    console.log('ejecucion .... en progreso');
  }
}

// Ejercicio 4
console.log('Ejercicio #4');

const LoginApp = new Login('admin', 'passwd');
LoginApp.checkCredentials();
const isValidLogin = LoginApp.getIsValidCredentials();

setTimeout(() => {
  if (!isValidLogin) {
    alert('Invalid Credentials');
  }else {
    alert('User Logged!');
  }
}, 2500);

// Ejercicio 5
console.log('Ejercicio #5. Revisar archivo listeners.js');
initListeners();

// Ejercicio 6
console.log('Ejercicio #6. Revisar archivos listeners.js y async.js');
