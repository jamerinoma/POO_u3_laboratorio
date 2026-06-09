import { renderEjemplo } from "./views/Ejemplo";

function main() {
  const app = document.getElementById("app");
  if (app) {
    renderEjemplo(app);
  }
}

main();
