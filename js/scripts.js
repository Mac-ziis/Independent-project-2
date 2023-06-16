// const init = function() {
//   document.getElementById("btn-submit").addEventListener("click", submit);
//   document.getElementById("btn-cancel").addEventListener("click", cancel);
// }

// const cancel = function(ev){
//   document.getElementById("dropdown").reset;
//   ev.preventDefault();
// }

// const submit = function(ev) {
//   ev.preventDefault();
// }

// function selected(event) {
//   event.preventDefault();
//   let selection = document.getElementById("dropdown").value;
// }

// window.addEventListener("load", function() {
//   document.getElementById("environment", "kind", "naturally").addEventListener("submit", selected);
// });
document.addEventListener("DOMContentLoaded", () => {
  const visibilityAccessor = () => {
    let value1 = document.getElementById("dropdown1").value === "1";
    let value2 = document.getElementById("dropdown2").value === "1";
    let value3 = document.getElementById("dropdown3").value === "1";
    let value4 = document.getElementById("dropdown1").value === "2";
    let value5 = document.getElementById("dropdown2").value === "2";
    let value6 = document.getElementById("dropdown3").value === "2";
    let value7 = document.getElementById("dropdown1").value === "3";
    let value8 = document.getElementById("dropdown2").value === "3";
    let value9 = document.getElementById("dropdown3").value === "3";

    if (value1 && value2 && value3) {
      document.getElementById("language1-js").removeAttribute("class", "hidden");
    } else if (value4 && value2 && value3) {
      document.getElementById("language2-cs").removeAttribute("class", "hidden");
    } else if (value7 && value2 && value3) {
      document.getElementById("language3-pn").removeAttribute("class", "hidden");
    } else if (value1 && value2 && value6) {
      document.getElementById("language1-js").removeAttribute("class", "hidden");
    } else if (value1 && value2 && value9) {
      document.getElementById("language3-cs").removeAttribute("class", "hidden");
    } else if (value1 && value5 && value6) {
      document.getElementById("language3-pn").removeAttribute("class", "hidden");
    } else if (vaule1 && value5 && value9) {
      document.getElementById("language2-cs").removeAttribute("class", "hidden");
    } else if (value1 && value8 && value6) {
      document.getElementById("language3-pn").removeAttribute("class", "hidden");
    } else if (value1 && value8 && value9) {
      document.getElementById("language1-js").removeAttribute("class", "hidden");
    } else if (value7 && value8 && value9) {
      document.getElementById("language1-js").removeAttribute("class", "hidden");
    } else if (value4 && value5 && value6) {
      document.getElementById("language2-cs").removeAttribute("class", "hidden");
    } else if (value4 && value5 && value9) {
      document.getElementById("language3-pn").removeAttribute("class", "hidden");
    } else if (value4 && value8 && value9) {
      document.getElementById("language2-cs").removeAttribute("class", "hidden");
    } else if (value4 && value2 && value6) {
      document.getElementById("language1-js").removeAttribute("class", "hidden");
    } else if (value4 && value2 && value9) {
      document.getElementById("language3-pn").removeAttribute("class", "hidden");
    } else if (value7 && value2 && value6) {
      document.getElementById("language2-cs").removeAttribute("class", "hidden");
    } else if (value7 && value2 && value9) {
      document.getElementById("language1-js").removeAttribute("class", "hidden");
    } else {
      document.getElementById("not-a-return").removeAttribute("class", "hidden");
    }
    
   
    document.getElementById("btn-submit").addEventListener;
    
    // ("click", visibilityAccessor");
  
  }
});

