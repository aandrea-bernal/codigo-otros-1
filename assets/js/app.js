const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('.name'); //necesita identificar la clase no el id
const $b = document.querySelector('.blog');//modificando la seleccion de id a clase
const $l = document.querySelector('.location');

async function displayUser(username) {   //modificando la funcion displayUser a asincrona
  $n.textContent = 'cargando...';
  const response = await fetch(`${usersEndpoint}/${username}`);  //await solo puede ser usado en funciones asincronas
  const data = await response.json(); //necesitamos que devuelva la respuesta a json
  console.log(data);
  $n.textContent = `${data.name}`; //corrigiendo las comillas para que no sean tomadas como string
  $b.textContent = `${data.blog}`;
  $l.textContent = `${data.location}`;
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  $n.textContent = `Algo salió mal: ${err}`; //corrigiendo la variable, faltaba el $
}

displayUser('stolinski').catch(handleError);
