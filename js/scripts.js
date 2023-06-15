const init = function() {
  document.getElementById("btn-submit").addEventListener("click", submit);
  document.getElementById("btn-cancel").addEventListener("click", cancel);
}

const cancel = function(ev){
  document.getElementById("dropdown").reset;
  ev.preventDefault();
}

const submit = function(ev) {
  ev.preventDefault();
}

// function return() {
  if (document.getElementById("dropdown1").value === "1" && document.getElementById("dropdown2").value === "1" && document.getElementById("dropdown3").value === "1") {
    document.getElementById("javascript").removeAttribute("class", "hidden");
  }
// }

document.addEventListener("DOMContentLoaded", init);