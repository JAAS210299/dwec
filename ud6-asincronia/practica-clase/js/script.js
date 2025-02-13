
const url = 'https://randomuser.me/api/';
let nombre = "";  // Nombre completo
let nacionalidad = "";  // Nacionalidad
let foto = "";

//CALLBACKS

// Función que obtiene un usuario aleatorio desde la API
function obtenerUsuario(callback) {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const usuario = data.results[0];
        callback(usuario);
      })
      .catch(error => {
        console.log('Error al obtener usuario:', error);
      });
}

/// Llamamos a obtenerUsuario y le pasamos la función mostrarDatos como callback
//obtenerUsuario(mostrarDatos);

// Función callback que maneja la información del usuario
function mostrarDatos(usuario) {
  const nombre = `${usuario.name.first} ${usuario.name.last}`;
  const nacionalidad = usuario.nat;
  const foto = usuario.picture.large;

  console.log('Nombre:', nombre);
  console.log('Nacionalidad:', nacionalidad);
  console.log('Foto:', foto);

  randomUserDOM(nombre, nacionalidad, foto); // Pasar los datos correctamente
}
//      PROMISES
// function obtenerUsuario() {
//     return new Promise((resolve, reject) => {
//         fetch(url)
//             .then(response => response.json())  // Parseamos la respuesta como JSON
//             .then(data => {
//                 const usuario = data.results[0];  // Extraemos el primer usuario del array "results"
//                 resolve(usuario);  // Pasamos el usuario al callback
//             })
//             .catch(error => {
//                 reject('Error al obtener usuario:', error);
//             });
//     });
// }

// // Llamamos a obtenerUsuario y manejamos la promesa
// obtenerUsuario()
//     .then(mostrarDatos)  // Cuando se resuelve la promesa, pasamos el usuario a mostrarDatos
//     .catch((error) => {   // Si ocurre un error, lo mostramos
//         console.log(error);
//     });

//      ASYNC/AWAIT
// async function obtenerUsuario() {
//     try {
//         // Realizamos la solicitud para obtener el usuario aleatorio
//         const response = await fetch(url);
//         const data = await response.json();  // Parseamos la respuesta como JSON
//         const usuario = data.results[0];  // Extraemos el primer usuario del array "results"

//         // Extraemos la información del usuario
//         nombre = `${usuario.name.first} ${usuario.name.last}`;  // Nombre completo
//         nacionalidad = usuario.nat;  // Nacionalidad
//         foto = usuario.picture.large;  // Foto del usuario

//         // Mostramos la información en la consola
//         console.log('Nombre:', nombre);
//         console.log('Nacionalidad:', nacionalidad);
//         console.log('Foto:', foto);
//       } catch (error) {
//         console.log('Error al obtener usuario:', error);  // Si ocurre un error, lo mostramos
//       }

//   }

// obtenerUsuario();  // Llamamos a la función principal

// function getDataCallback(callback) {
//     setTimeout(() => {
//         callback('Los datos han llegado');
//     }, 2000)
// }

// getDataCallback(data => {
//     console.log(data);
// });

// function getData() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve('Los datos han llegado');
//         }, 2000);
//     });
// }

// async function getDataAsync() {
//     const data = await getData();  // Esperamos a que los datos lleguen
//     console.log(data);
// }

// getDataAsync();


 

function randomUserDOM(nombre, nacionalidad, foto) {

 
  document.getElementById("nombre").textContent =  'Nombre: ' + nombre;
  document.getElementById("nacionalidad").textContent = 'Nacionalidad: ' + nacionalidad;
  document.getElementById("foto").src = foto;
} setTimeout(randomUserDOM, 2000);

obtenerUsuario(mostrarDatos);


// getelementsibling y child siempre con element