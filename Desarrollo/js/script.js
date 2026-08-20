const colores = [];
const boton = document.getElementById("generate-btn");
const cantidadColores = document.getElementById("palette-size");
const contenedorPaleta = document.getElementById("palette");
const parrafo = document.getElementById("feedback");

function mostrarFeedback(mensaje) {
    parrafo.textContent = mensaje;

    setTimeout(function() {
        parrafo.textContent = "";
    }, 2000);
}

function hslToHex(h, s, l) {
    s /= 100;
    l /= 100;

    const k = n => (n + h / 30) % 12;
    const a = s * Math.min(l, 1 - l);
    const f = n =>
        l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));

    const rojo = Math.round(255 * f(0));
    const verde = Math.round(255 * f(8));
    const azul = Math.round(255 * f(4));

    return `#${rojo.toString(16).padStart(2, "0")}${verde.toString(16).padStart(2, "0")}${azul.toString(16).padStart(2, "0")}`;
}


boton.addEventListener("click", function() {  
    colores.length = 0;
    contenedorPaleta.innerHTML = "";
    mostrarFeedback(`Paleta de ${cantidadColores.value} colores generada!`);

    for (let i = 0; i < parseInt(cantidadColores.value); i++) {
        const h = Math.floor(Math.random() * 361);
        const s = Math.floor(Math.random() * 101);
        const l = Math.floor(Math.random() * 101);

        const colorHsl = `hsl(${h}, ${s}%, ${l}%)`;

        const colorHex = hslToHex(h, s, l);

        colores.push(colorHex);

        const tarjeta = document.createElement("div");
        tarjeta.classList.add("color-card");

        tarjeta.style.backgroundColor = colorHex;

        contenedorPaleta.appendChild(tarjeta);

      const codigo = document.createElement("div");
      codigo.classList.add("color-code");

      codigo.setAttribute("role", "button");
      codigo.setAttribute("tabindex", "0");

     const hexTexto = document.createElement("div");
     hexTexto.textContent = colorHex;

     const hslTexto = document.createElement("div");
     hslTexto.textContent = colorHsl;

codigo.appendChild(hexTexto);
codigo.appendChild(hslTexto);

        codigo.addEventListener("click", function() {
            navigator.clipboard.writeText(colorHex);
            mostrarFeedback("¡Código HEX copiado!");
        });

        tarjeta.appendChild(codigo);
    
        codigo.addEventListener("keydown", function(evento) {
    if (evento.key === "Enter" || evento.key === " ") {
        navigator.clipboard.writeText(colorHex);
        mostrarFeedback("¡Código HEX copiado!");
    }
});
    
      }

  
});