export function renderBarrasDecenas(containerId: string, cantidad: number) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = "";
  for (let i = 0; i < cantidad; i++) {
    const barra = document.createElement("div");
    container.appendChild(barra);
  }
}

export function renderBloquesUnidades(containerId: string, cantidad: number) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = "";
  for (let i = 0; i < cantidad; i++) {
    const bloque = document.createElement("div");
    container.appendChild(bloque);
  }
}
