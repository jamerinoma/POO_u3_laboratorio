import { renderTablaSuma } from "../components/TablaSuma";

export function renderEjercicios(container: HTMLElement) {
  container.innerHTML = `
    <div class="container mt-5">
      <h2 class="text-center mb-4">Ejercicios de Suma</h2>
      <p class="text-center">Resuelve las siguientes sumas usando el formato CDU. Ingresa el resultado en cada columna y valida tu respuesta.</p>
      <div id="ejercicios-list"></div>
    </div>
  `;

  const ejerciciosList = document.getElementById("ejercicios-list");
  if (!ejerciciosList) return;

  for (let i = 0; i < 30; i++) {
    const a = Math.floor(Math.random() * 90) + 10;
    const b = Math.floor(Math.random() * 90) + 10;

    const ejercicioDiv = document.createElement("div");
    ejercicioDiv.className = "ejercicio mb-5 p-3 border rounded shadow-sm";

    ejercicioDiv.innerHTML = `
      <h5>Ejercicio ${i + 1}: ${a} + ${b}</h5>
      <div class="d-flex justify-content-center mt-3">
        <div id="tabla-${i}"></div>
      </div>
    `;

    ejerciciosList.appendChild(ejercicioDiv);

    renderTablaSuma(`tabla-${i}`, a, b);

    const btnValidar = document.getElementById(`validar-tabla-${i}`);
    const feedback = document.getElementById(`feedback-tabla-${i}`);
    if (btnValidar && feedback) {
    btnValidar.addEventListener("click", () => {
    const correcto = a + b;
    const centenasCorrectas = Math.floor(correcto / 100);
    const decenasCorrectas = Math.floor((correcto % 100) / 10);
    const unidadesCorrectas = correcto % 10;

    const inputC = document.getElementById(`resultado-c-tabla-${i}`) as HTMLInputElement;
    const inputD = document.getElementById(`resultado-d-tabla-${i}`) as HTMLInputElement;
    const inputU = document.getElementById(`resultado-u-tabla-${i}`) as HTMLInputElement;

    let ok = true;

    // Centenas
    if (inputC.value === "" || parseInt(inputC.value) === centenasCorrectas) {
        inputC.style.borderColor = "green";
    } else {
        inputC.style.borderColor = "red";
        ok = false;
    }

    // Decenas
    if (parseInt(inputD.value) === decenasCorrectas) {
        inputD.style.borderColor = "green";
    } else {
        inputD.style.borderColor = "red";
        ok = false;
    }

    // Unidades
    if (parseInt(inputU.value) === unidadesCorrectas) {
        inputU.style.borderColor = "green";
    } else {
        inputU.style.borderColor = "red";
        ok = false;
    }

    feedback.innerHTML = ok ? "Correcto" : "Incorrecto";
    feedback.style.color = ok ? "green" : "red";
    });
    }
  }
}
