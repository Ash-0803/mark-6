
year = document.querySelector('#year');
check = document.querySelector('#check');
output = document.querySelector('.output-prime')


function isLeap(value){

  if (value%4==0 && value%100!=0 || value%400==0){return true}
  else {return false};
}
check.addEventListener('click', ()=>{
  value = year.value;

  if (isLeap(value) == true){
    output.innerHTML = `<span class ='big'>Yayyy !!!</span><br> The entered year, ${value} is a leap year :)`
  }
  if (isLeap(value) == false){
    output.innerHTML = `<span class ='big'>Sorry,</span><br> but entered year, ${value} is not a leap year :'(`
  }
  output.style.visibility = "visible";
});