/*console.log('ok...');*/


function typeWrite(elemento) {
  const textoArray = elemento.innerHTML.split('');
  elemento.innerHTML = '';
  textoArray.forEach((letra, i) => {

    setTimeout(() => {
      elemento.innerHTML += letra;
    }, 75 * i)
  });
  //console.log(textoArray);
}
const titulo = document.querySelector(".dev");
typeWrite(titulo);

/*inicio teste texto*/

const el = document.querySelector("#text");
const text = "Programador web front-end2...";
const interval = 75;

function showText(el, text, interval) {
  const char = text.split("").reverse();
  /*console.log(char);*/

  const type = setInterval(() =>{

    if(!char.length){
      return clearInterval(type);
    }

    const next = char.pop();
    /*console.log(next);*/

    el.innerHTML += next;

  }, interval);

}
showText(el, text, interval);


