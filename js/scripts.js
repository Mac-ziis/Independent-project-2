const init = function() {
  document.getElementById("btn").addEventListener("click", submit);
  document.getElementById("btn").addEventListener("click", cancel);
}

const cancel = function(ev){
  ev.preventDefault();
  document.getElementById("dropdown").reset();
}

const submit = function(ev) {
  ev.preventDefault();
  
}

document.addEventListener("DOMContentLoaded", init);