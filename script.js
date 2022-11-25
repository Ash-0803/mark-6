btn = document.querySelector('#btn-translate');
text = document.querySelector('#textarea');

btn.addEventListener('click', clickHandler);

function clickHandler() {
  console.log("clicked");
  console.log(text.value);
}