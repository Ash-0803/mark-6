btn = document.querySelector('#btn-translate');
input = document.querySelector('#textarea');
output = document.querySelector('.output');
navLink = document.querySelectorAll('.nav-link');

btn.addEventListener('click', clickHandler);

navLink.forEach((linkItem, index) => {
  linkItem.addEventListener('click', ()=>{
  document.querySelector(linkItem).classList.remove('active');
  navLink.classList.add('active');
  console.log( index, linkItem, "clicked")
  })
})

function clickHandler() {
  console.log("clicked");
  output.innerText = "lasjdfkljdsfl"+input.value;
}