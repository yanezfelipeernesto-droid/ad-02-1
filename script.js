const h1Element = document.getElementById("red");
const h2Element = document.getElementById("blue");
const h4Element = document.getElementById("cafe");



h1Element.textContent = "Adios";


h2Element.style.color = "orange";


h4Element.addEventListener("click", (event) => {
    h1Element.textContent = "Hola, me hicieron click"; 
    h1Element.style.color = "brown";

    })