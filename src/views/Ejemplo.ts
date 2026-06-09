import { renderTablaEjemplo } from "../components/TablaEjemplo";
import { renderBarrasDecenas } from "../components/BarrasDecenas";
import { renderBloquesUnidades } from "../components/BloqueUnidades";

export function renderEjemplo(container: HTMLElement) {
  container.innerHTML = `
    <div class="container mt-5">
      <div class="text-center">
        <img src="./img/emoji_beatriz.jpg" alt="Beatriz" class="mb-4" width="120">
        <h2>Ejemplo Interactivo</h2>
        <p>Vamos a sumar 34 + 28 paso a paso</p>
      </div>

      <!-- Contenedor horizontal -->
      <div id="ejemplo-container" class="d-flex justify-content-center align-items-start gap-5 mt-4">
        <div id="tabla-suma"></div>
        <div id="visualizacion" class="d-flex flex-column align-items-center gap-3">
          <h5>Decenas</h5>
          <div id="decenas"></div>
          <h5 class="mt-3">Unidades</h5>
          <div id="unidades"></div>
        </div>
      </div>

  

      <div class="text-center mt-4">
        <button id="btn-ejercicios" class="btn btn-primary cta-btn">Ejercicios</button>
      </div>
    </div>
  `;

  renderTablaEjemplo("tabla-suma");
  renderBarrasDecenas("decenas", 3);
  renderBloquesUnidades("unidades", 4);

  const btn = document.getElementById("btn-ejercicios");
  if (btn) {
    btn.addEventListener("click", () => {
      import("./Ejercicios").then(module => {
        module.renderEjercicios(container);
      });
    });
  }
}
