let mode = document.querySelector('.mode');
mode.addEventListener('click',chMode);
function chMode(){
  mode.className == 'fa-solid fa-sun'?
  mode.className = 'fa-solid fa-moon':
  mode.className = 'fa-solid fa-sun';
  let body = document.querySelector('body');
  mode.classList.contains('fa-sun')?
  body.setAttribute('data-theme' , 'dark'):
  body.setAttribute('data-theme' , 'light');
}


//////////////////////////////////////////////////////////////////////////////////////////


function calc(){
  var replace = res.value;
  if(res.value.includes('÷') || res.value.includes('×')){
    replace =res.value.replaceAll('×', '*').replaceAll('÷', '/');
    res.value= eval(replace);
  }
  res.value= eval(replace);
}