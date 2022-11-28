// navLink = document.querySelectorAll('.nav-link')

// navLink.forEach((linkItem, index) => {
//   linkItem.addEventListener('click', ()=>{
//   document.querySelector(linkItem).classList.remove('active');
//   navLink.classList.add('active');
//   console.log( index, linkItem, "clicked")
//   })
// })


birthday = document.querySelector('#birthday');
check = document.querySelector('#check');
output = document.querySelector('.output-prime')

function convert(){
  string = String(birthday.value).slice(8,10);
  integer = parseInt(string);
  return integer;
}

function isPrime(value){
  a=0

  for(var i=1;i<=value/2;i++){
    if(value%i==0){a++};
  }

  if (a > 1){return false}
  else {return true};
}
check.addEventListener('click', ()=>{
  value = convert();
  if (isPrime(value) == true){
    output.innerHTML = "<span class ='big'>Congratulations!!!</span><br> your birth date is prime!"
  }
  if (isPrime(value)== false){
    output.innerHTML = "<span class ='big'>Sorry,</span><br> but you don't have a prime birth"
  }
  output.style.visibility = "visible";
});