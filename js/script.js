const colores = [];
const boton = document.getElementById("generate-btn");
const cantidadColores = document.getElementById("palette-size");
const contenedorPaleta = document.getElementById("palette");
const parrafo = document.getElementById("feedback");

boton.addEventListener("click", function() {

    colores.length = 0;
    palette.innerHTML = "";
    parrafo.textContent = `Paleta de ${cantidadColores.value} colores generada!`;

    for (let i = 0; i < parseInt(cantidadColores.value); i++) {
        const rojo = Math.floor(Math.random() * 256);
        const verde = Math.floor(Math.random() * 256);
        const azul = Math.floor(Math.random() * 256);

        const color = `rgb(${rojo}, ${verde}, ${azul})`;

        const colorHex = `#${rojo.toString(16).padStart(2, "0")}${verde.toString(16).padStart(2, "0")}${azul.toString(16).padStart(2, "0")}`;

        colores.push(colorHex);

        const tarjeta = document.createElement("div");
        tarjeta.classList.add("color-card");

        tarjeta.style.backgroundColor = colorHex;

        palette.appendChild(tarjeta);

        const codigo = document.createElement("div");
        codigo.textContent = colorHex;
        codigo.classList.add("color-code");

        codigo.addEventListener("click", function() {
            navigator.clipboard.writeText(colorHex);
            parrafo.textContent = "¡Código HEX copiado!";
        });

        tarjeta.appendChild(codigo);
    }

});