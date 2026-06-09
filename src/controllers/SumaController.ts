import { renderBarrasDecenas } from "../components/BarrasDecenas";
import { renderBloquesUnidades } from "../components/BloqueUnidades";

export class SumaController {
  private paso: number = 0;

  constructor(
    private decenasId: string,
    private unidadesId: string,
    private resultadoDId: string,
    private resultadoUId: string,
    private btnId: string
  ) {
    renderBarrasDecenas(this.decenasId, 3);
    renderBloquesUnidades(this.unidadesId, 4);

    this.init();
  }

  private init() {
    const btn = document.getElementById(this.btnId);
    if (btn) {
      btn.addEventListener("click", () => this.siguientePaso());
    }
  }

  private siguientePaso() {
    this.paso++;
    switch (this.paso) {
      case 1:
        renderBarrasDecenas(this.decenasId, 2);
        renderBloquesUnidades(this.unidadesId, 8);
        break;
      case 2:
        const resultadoU = document.getElementById(this.resultadoUId);
        if (resultadoU) resultadoU.textContent = "2";
        this.mostrarLlevada();
        break;
      case 3:
        const resultadoD = document.getElementById(this.resultadoDId);
        if (resultadoD) resultadoD.textContent = "6";
        this.tacharLlevada();

        renderBarrasDecenas(this.decenasId, 6);
        renderBloquesUnidades(this.unidadesId, 2);
        break;
      default:
        const btn = document.getElementById(this.btnId);
        if (btn) btn.setAttribute("disabled", "true");
        break;
    }
  }

  private mostrarLlevada() {
    const tabla = document.querySelector("table");
    if (tabla) {
      const llevada = document.createElement("div");
      llevada.id = "llevada";
      llevada.textContent = "1";
      llevada.style.color = "red";
      llevada.style.fontWeight = "bold";
      llevada.style.position = "absolute";
      llevada.style.marginLeft = "60px";
      tabla.parentElement?.appendChild(llevada);
    }
  }

  private tacharLlevada() {
    const llevada = document.getElementById("llevada");
    if (llevada) {
      llevada.style.textDecoration = "line-through";
    }
  }
}
