btn = document.querySelector('#btn-translate');
input = document.querySelector('#textarea');
output = document.querySelector('.output')
btn.addEventListener('click', clickHandler);

function clickHandler() {
  console.log("clicked");
  output.innerText = "lasjdfkljdsfl"+input.value;
}