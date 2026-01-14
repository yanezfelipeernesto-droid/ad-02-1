const h1Element = document.getElementById("green");
const h2Element = document.getElementById("yellow");
const h4Element = document.getElementById("brown");



h1Element.textContent = "Adios";


h2Element.style.color = "orange";


h4Element.addEventListener("click", (event) => {
    h4Element.textContent = "Hola, me hicieron click"; 
    h4Element.style.color = "brown";
    console.log(event)

    })