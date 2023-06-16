
document.addEventListener("DOMContentLoaded", () => {
  let responseDisplayed = false;

  const visibilityAccessor = () => {
    if (responseDisplayed) {
      return;
    }

    let value1 = document.getElementById("dropdown1-select").value === "1";
    let value2 = document.getElementById("dropdown2-select").value === "1";
    let value3 = document.getElementById("dropdown3-select").value === "1";
    let value4 = document.getElementById("dropdown1-select").value === "2";
    let value5 = document.getElementById("dropdown2-select").value === "2";
    let value6 = document.getElementById("dropdown3-select").value === "2";
    let value7 = document.getElementById("dropdown1-select").value === "3";
    let value8 = document.getElementById("dropdown2-select").value === "3";
    let value9 = document.getElementById("dropdown3-select").value === "3";

    if (value1 && value2 && value3) {
      document.getElementById("recommendation1").removeAttribute("class", "hidden");
      responseDisplayed = true;
    } else if (value4 && value2 && value3) {
      document.getElementById("recommendation2").removeAttribute("class", "hidden");
      responseDisplayed = true;
    } else if (value7 && value2 && value3) {
      document.getElementById("recommendation3").removeAttribute("class", "hidden");
      responseDisplayed = true;
    } else if (value1 && value2 && value6) {
      document.getElementById("recommendation2").removeAttribute("class", "hidden");
      responseDisplayed = true;
    } else if (value1 && value2 && value9) {
      document.getElementById("recommendation2").removeAttribute("class", "hidden");
      responseDisplayed = true;
    } else if (value1 && value5 && value6) {
      document.getElementById("recommendation3").removeAttribute("class", "hidden");
      responseDisplayed = true;
    } else if (value1 && value5 && value9) {
      document.getElementById("recommendation2").removeAttribute("class", "hidden");
      responseDisplayed = true;
    } else if (value1 && value8 && value6) {
      document.getElementById("recommendation3").removeAttribute("class", "hidden");
      responseDisplayed = true;
    } else if (value1 && value8 && value9) {
      document.getElementById("recommendation1").removeAttribute("class", "hidden");
      responseDisplayed = true;
    } else if (value7 && value8 && value9) {
      document.getElementById("recommendation1").removeAttribute("class", "hidden");
      responseDisplayed = true;
    } else if (value4 && value5 && value6) {
      document.getElementById("recommendation2").removeAttribute("class", "hidden");
      responseDisplayed = true;
    } else if (value4 && value5 && value9) {
      document.getElementById("recommendation3").removeAttribute("class", "hidden");
      responseDisplayed = true;
    } else if (value4 && value8 && value9) {
      document.getElementById("recommendation2").removeAttribute("class", "hidden");
      responseDisplayed = true;
    } else if (value4 && value2 && value6) {
      document.getElementById("recommendation1").removeAttribute("class", "hidden");
      responseDisplayed = true;
    } else if (value4 && value2 && value9) {
      document.getElementById("recommendation3").removeAttribute("class", "hidden");
      responseDisplayed = true;
    } else if (value7 && value2 && value6) {
      document.getElementById("recommendation2").removeAttribute("class", "hidden");
      responseDisplayed = true;
    } else if (value7 && value2 && value9) {
      document.getElementById("recommendation1").removeAttribute("class", "hidden");
      responseDisplayed = true;
    } else if (value4 && value8 && value6) {
      document.getElementById("recommendation3").removeAttribute("class", "hidden");
      responseDisplayed = true;
    } else if (value7 && value5 && value9) {
      document.getElementById("recommendation2").removeAttribute("class", "hidden");
      responseDisplayed = true;
    } else if (value7 && value5 && value6) {
      document.getElementById("recommendation1").removeAttribute("class", "hidden");
      responseDisplayed = true;
    } else if (value7 && value2 && value9) {
      document.getElementById("recommendation1").removeAttribute("class", "hidden");
      responseDisplayed = true;
    } else if (value7 && value5 && value6) {
      document.getElementById("recommendation3").removeAttribute("class", "hidden");
      responseDisplayed = true;
    } else if (value1 && value5 && value3) {
      document.getElementById("recommendation2").removeAttribute("class", "hidden");
      responseDisplayed = true;
    } else if (value7 && value5 && value1) {
      document.getElementById("recommendation3").removeAttribute("class", "hidden");
      responseDisplayed = true;
    } else if (value4 && value8 && value3) {
      document.getElementById("recommendation1").removeAttribute("class", "hidden");
      responseDisplayed = true;
    } else if (value4 && value5 && value3) {
      document.getElementById("recommendation2").removeAttribute("class", "hidden");
      responseDisplayed = true;
    } else if (value7 && value5 && value3) {
      document.getElementById("recommendation1").removeAttribute("class", "hidden");
      responseDisplayed = true;
    } else {
      document.getElementById("recommendation4").removeAttribute("class", "hidden");
      responseDisplayed = true;
    }
  };

  document.getElementById("btn-submit").addEventListener("click", visibilityAccessor);
});

