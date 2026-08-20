# Documentación del uso de IA

## Proyecto Integrador — Generador de Paletas

Durante el desarrollo del Proyecto Integrador utilicé ChatGPT como herramienta de apoyo para comprender conceptos, resolver dudas puntuales, detectar errores y pensar alternativas de implementación.

La IA se utilizó como acompañamiento durante el proceso. El código fue probado en el navegador y en la consola de desarrollo, y las decisiones finales sobre la funcionalidad y el diseño fueron tomadas durante la construcción del proyecto.

---

## 1. Inicio de la lógica JavaScript

### Consulta realizada

Se solicitó orientación para comenzar la lógica JavaScript del generador de paletas y trabajar con los elementos del DOM.

### Trabajo realizado

Se obtuvieron los elementos necesarios mediante `getElementById()`:

```javascript
const boton = document.getElementById("generate-btn");
const cantidadColores = document.getElementById("palette-size");
const contenedorPaleta = document.getElementById("palette-container");
```

También se utilizó `addEventListener()` para detectar el clic sobre el botón.

Se comprobó el funcionamiento mediante `console.log()`.

### Resultado

Se verificó que JavaScript estuviera correctamente conectado con HTML y que el botón respondiera al evento `click`.

---

## 2. Generación de colores aleatorios

### Consulta realizada

Se solicitó acompañamiento para construir paso a paso la generación de colores y comprender el uso de `Math.random()`, `Math.floor()` y el ciclo `for`.

### Trabajo realizado

Se generaron valores aleatorios para los componentes RGB:

```javascript
const rojo = Math.floor(Math.random() * 256);
const verde = Math.floor(Math.random() * 256);
const azul = Math.floor(Math.random() * 256);
```

Luego se construyó el color:

```javascript
const color = `rgb(${rojo}, ${verde}, ${azul})`;
```

Los resultados se comprobaron mediante la consola.

### Resultado

Se logró generar colores RGB aleatorios.

---

## 3. Cantidad de colores seleccionada

### Consulta realizada

Se trabajó sobre cómo obtener la cantidad seleccionada en el `<select>` y utilizarla para controlar el ciclo de generación.

### Trabajo realizado

Se utilizó:

```javascript
cantidadColores.value
```

y:

```javascript
parseInt(cantidadColores.value)
```

para convertir el valor seleccionado en un número.

### Resultado

La aplicación pudo generar la cantidad seleccionada: 6, 8 o 9 colores.

---

## 4. Problema con la acumulación de colores

### Problema detectado

Al seleccionar 6 colores se generaban correctamente 6. Sin embargo, después de seleccionar 9 colores aparecían 15, porque los colores anteriores se estaban acumulando.

### Consulta realizada

Se planteó el problema para analizar por qué las generaciones anteriores no se estaban eliminando.

### Solución

Se utilizó:

```javascript
colores.length = 0;
```

antes de comenzar una nueva generación.

### Resultado

El array se limpia antes de generar una nueva paleta y los colores anteriores dejan de acumularse.

---

## 5. Creación dinámica de las tarjetas

### Consulta realizada

Se solicitó ayuda para crear las tarjetas de color mediante JavaScript y comprender el funcionamiento de `createElement()` y `appendChild()`.

### Trabajo realizado

Se creó dinámicamente una tarjeta:

```javascript
const tarjeta = document.createElement("div");
```

y se le agregó la clase:

```javascript
tarjeta.classList.add("color-card");
```

También se creó el elemento que contiene el código del color.

Finalmente se utilizaron relaciones padre-hijo mediante `appendChild()`:

```javascript
tarjeta.appendChild(codigo);
palette.appendChild(tarjeta);
```

Durante esta etapa se comprendió que `appendChild()` sirve para incorporar un elemento dentro de otro elemento del DOM.

### Resultado

Los colores comenzaron a mostrarse visualmente como tarjetas dentro del contenedor de la paleta.

---

## 6. Códigos HEX

### Consulta realizada

Se consultó cómo representar los colores mediante códigos HEX y cómo utilizar ese valor dentro de las tarjetas.

## 7. Generación de colores en formato HSL

### Consulta realizada

Se revisó el proyecto para verificar el cumplimiento de la consigna, que requería generar colores en formato HSL junto con HEX o RGBA.

### Trabajo realizado

Se modificó la generación de colores para utilizar valores aleatorios de tono, saturación y luminosidad:

```javascript
const h = Math.floor(Math.random() * 361);
const s = Math.floor(Math.random() * 101);
const l = Math.floor(Math.random() * 101);

### Trabajo realizado

Se generaron códigos HEX a partir de los valores RGB y se comprobó su funcionamiento primero en la consola y posteriormente en la interfaz.

El código HEX se utilizó tanto para identificar visualmente el color como para mostrarlo al usuario.

### Resultado

Cada tarjeta muestra su código HEX correspondiente.

---

## 8. Feedback al generar una paleta

### Consulta realizada

Se solicitó ayuda para utilizar el elemento `feedback` del HTML y mostrar un mensaje al usuario después de generar una paleta.

### Trabajo realizado

Se obtuvo el elemento:

```javascript
const parrafo = document.getElementById("feedback");
```

y se modificó su contenido mediante `textContent`:

```javascript
parrafo.textContent = `Paleta de ${cantidadColores.value} colores generada!`;
```

### Resultado

Después de generar una paleta, el usuario recibe un mensaje indicando la cantidad de colores generada.

---

## 9. Funcionalidad extra: copiar códigos HEX

### Consulta realizada

Se consultó cómo utilizar `navigator.clipboard` para permitir que el usuario copie un código HEX.

### Trabajo realizado

Se utilizó:

```javascript
navigator.clipboard.writeText(colorHex);
```

para copiar el código al portapapeles.

Luego se agregó feedback para informar al usuario que el código había sido copiado.

### Resultado

El usuario puede hacer clic sobre el código HEX, copiarlo y recibir una confirmación de la acción.

Esta funcionalidad se incorporó como una de las opciones extra del proyecto.

---

## 10. Diseño visual

### Consulta realizada

Una vez terminada la funcionalidad principal, se solicitó ayuda para mejorar el diseño de la aplicación.

Se evaluaron diferentes propuestas y se descartaron aquellas que no representaban la estética buscada.

### Decisiones tomadas

Se eligió una estética personalizada con:

- fondo oscuro azulado;
- tarjetas grandes para los colores;
- códigos HEX visibles;
- controles centrados;
- navegación sencilla;
- bordes redondeados;
- sombras suaves;
- adaptación a pantallas pequeñas.

Las decisiones finales sobre colores, distribución y apariencia fueron realizadas según las preferencias del proyecto.

### Resultado

Se obtuvo una interfaz visual personalizada en la que los colores generados son el elemento principal.

---

## 11. Pruebas y correcciones

Durante el desarrollo se realizaron pruebas en el navegador y en la consola de desarrollo.

Se comprobó:

- generación de 6 colores;
- generación de 8 colores;
- generación de 9 colores;
- generación de nuevas paletas sin acumulación;
- creación dinámica de tarjetas;
- visualización de códigos HEX;
- mensaje de feedback;
- copia de códigos HEX al portapapeles;
- funcionamiento del botón;
- distribución visual de las tarjetas.

Los problemas encontrados se fueron analizando y corrigiendo durante el desarrollo.

---

## 12. Mejoras de accesibilidad

### Consulta realizada

Se revisaron aspectos básicos de accesibilidad para mejorar el uso de la aplicación mediante teclado y asegurar un contraste visual adecuado.

### Trabajo realizado

Se agregó `role="button"` y `tabindex="0"` al elemento utilizado para copiar el código HEX, permitiendo que pueda recibir el foco mediante teclado.

También se incorporó un evento `keydown` para permitir copiar el código utilizando las teclas `Enter` o `Espacio`.

Además, se modificó el color del botón principal para mejorar el contraste entre el fondo y el texto.

### Resultado

La función de copiar el código HEX puede utilizarse tanto con mouse como con teclado y el botón principal presenta un contraste visual mejorado.


## Conclusión

La IA fue utilizada como herramienta de apoyo y aprendizaje durante el desarrollo del proyecto.

Las consultas permitieron comprender conceptos de JavaScript, manipulación del DOM y algunos aspectos de CSS, además de ayudar a analizar errores y buscar soluciones.

El proceso se realizó de manera progresiva: se implementó una parte, se probó su funcionamiento y luego se continuó con la siguiente. La implementación final fue comprobada en el navegador y adaptada según las decisiones tomadas durante el desarrollo.
