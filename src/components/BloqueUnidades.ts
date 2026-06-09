export function renderBloquesUnidades(containerId: string, cantidad: number) {
  const contenedor = document.getElementById(containerId);
  if (!contenedor) return;

  contenedor.innerHTML = "";

  for (let i = 0; i < cantidad; i++) {
    const bloque = document.createElement("div");
    bloque.style.width = "30px";
    bloque.style.height = "30px";
    bloque.style.backgroundColor = "skyblue";
    bloque.style.margin = "2px auto";
    bloque.style.border = "1px solid #000";
    bloque.style.borderRadius = "4px";
    contenedor.appendChild(bloque);
  }
}
