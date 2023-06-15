// const init = function() {
//   document.getElementById("btn-submit").addEventListener("click", submit);
//   document.getElementById("btn-cancel").addEventListener("click", cancel);
// }

// const cancel = function(ev){
//   document.getElementById("dropdown").reset;
//   ev.preventDefault();
// }

const submit = function(ev) {
  ev.preventDefault();
}

function selected(event) {
  event.preventDefault();
  let selection = document.getElementById("dropdown").value;
}

window.addEventListener("load", function() {
  document.getElementById("environment", "kind", "naturally").addEventListen("submit", selected);
});

  const 
  if (document.getElementById("dropdown1").value === "1" && document.getElementById("dropdown2").value === "1" && document.getElementById("dropdown3").value === "1") {
    document.getElementById("javascript").removeAttribute("class", "hidden");
  }


  // function selectValues() {
  //   document.querySelector("#dropdown");
  //   output = select.options[select.selectedIndex].value;
  //   document.querySelector("#javascript").textContent = javascript;
  // }