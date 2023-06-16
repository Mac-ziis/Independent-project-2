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
  document.getElementById("environment", "kind", "naturally").addEventListener("submit", selected);
});

  const choices = function() {
    let value = document.getElementById("dropdown1").value === "1";
    let value2 = document.getElementById("dropdown2").value === "1";
    let value3 = document.getElementById("dropdown3").value === "1";
    let value4 = document.getElementById("dropdown1").value === "2";
    let value5 = document.getElementById("dropdown2").value === "2";
    let value6 = document.getElementById("dropdown3").value === "2";
    let value7 = document.getElementById("dropdown1").value === "3";
    let value8 = document.getElementById("dropdown2").value === "3";
    let value9 = document.getElementById("dropdown3").value === "3";

    if (value && value2 && value3) {
      document.getElementById("js").removeAttribute("class", "hidden");
    } else if (value4 && value2 && value3) {
      document.getElementById("c-sharp").removeAttribute("class", "hidden");
    }

  const visibilityAccessor = () => {

  }
}

// <html> 
//   <option>
//     <div onclick={{visibilityAccessor()}}></div> </div>
//   </option>
// </html>


  // function selectValues() {
  //   document.querySelector("#dropdown");
  //   output = select.options[select.selectedIndex].value;
  //   document.querySelector("#javascript").textContent = javascript;
  // }