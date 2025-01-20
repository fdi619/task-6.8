document.querySelector("a").addEventListener("click", (event) => {
  let resultShange = prompt("Введите новое название: ");
  event.preventDefault();
  document.querySelector("a").textContent = resultShange;
});
