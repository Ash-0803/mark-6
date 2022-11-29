btn = document.querySelector('#btn-translate');
input = document.querySelector('#textarea');
output = document.querySelector('.output');


btn.addEventListener('click', clickHandler);

function clickHandler() {
  url = `https://api.funtranslations.com/translate/minion.json?text=${input.value}`;
  console.log("clicked");
  console.log(input.value)
  
  fetch(url)
  .then(response => response.json())
  .then(json =>{
    console.log(json);
    console.log(url)
    output.innerText = json.contents.translated;
  })

}
