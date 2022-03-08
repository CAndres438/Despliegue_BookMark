formulario= document.getElementById('form')

// Aquí se escucha el envío del formulario newsletter con el botón submit a un fake api previamente alojado en Heroku.
formulario.addEventListener('submit', async (e) => {
    e.preventDefault()
   
    let email = document.getElementById('email').value

    let resp = await fetch('https://data-emails.herokuapp.com/correos', {
        method: 'POST',
        body: JSON.stringify({
            correo: email
        }),
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        }
    })
    let data = resp.json()
    alert("we will keep you up to date with our news");
})

//Cambio de imagenes 
const imagen_paralelo = document.getElementById('Paralelo');

const svg1 = './images/illustration-features-tab-1.svg';
const svg2 = './images/illustration-features-tab-2.svg';
const svg3 = './images/illustration-features-tab-3.svg';
const idSvg1 = document.getElementById('svg_1')
const idSvg2 = document.getElementById('svg_2')
const idSvg3 = document.getElementById('svg_3')

document.addEventListener('DOMContentLoaded', change());


function change(comp, id) {
    if (comp == undefined) {
        comp = svg1
        id = idSvg1
    }
    imagen_paralelo.innerHTML = `
    <img id="imagen_one" src="${comp}" class="img-fluid rounded-start fondoImg2" alt="...">
    <div class="fondo2"></div>
    `
}