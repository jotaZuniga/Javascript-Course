class InvertirCadena {
  cadenaInvertir = '';

  constructor(cadena) {
    this.cadenaInvertir = cadena;
  }

  transformarCadena() {
    return this.cadenaInvertir.split('').reverse().join('');
  }
}

export default InvertirCadena;