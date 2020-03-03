var lista = [ 'huevos', 'tocino', 'aceite', 'chorizo', 'jamon', 'sal','pimienta','oregano' ];
 
console.info( lista.includes( 'sal' ) ); // true
console.info( lista.includes( 'aceite' ) ); // true
console.info( lista.includes( 'tocino' ) ); // true
console.info( lista.includes( 'chirizo' ) ); // false
console.info( lista.includes( 'oregano' ) ); // true
console.info( lista.includes( 'coca' ) ); // false