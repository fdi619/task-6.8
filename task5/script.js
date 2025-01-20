document.querySelector("button").addEventListener("mousedown", (event) => {
  let inputValue = document.querySelector("input").value;
  let inputData = document.querySelector("#duplicateField");
  console.log(inputValue);
  event.preventDefault();
  inputData.textContent = "";
  document.querySelector("input").form.reset();
});

document.querySelector("input").addEventListener("keydown", (event) => {
  if (event.keyCode === 13) {
    let inputValue1 = document.querySelector("input").value;
    let inputData1 = document.querySelector("#duplicateField");
    inputData1.textContent = inputValue1;
  }
});
