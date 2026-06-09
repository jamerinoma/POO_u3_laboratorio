import { SumaController } from "../controllers/SumaController";

export function renderTablaEjemplo(containerId: string) {
  const tabla = document.getElementById(containerId);
  if (!tabla) return;

  tabla.innerHTML = `
    <table class="table table-bordered text-center align-middle">
      <thead>
        <tr>
          <th>C</th>
          <th>D</th>
          <th>U</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td></td>
          <td>3</td>
          <td>4</td>
        </tr>
        <tr>
          <td>+</td>
          <td>2</td>
          <td>8</td>
        </tr>
        <tr>
          <td></td>
          <td id="resultado-d"></td>
          <td id="resultado-u"></td>
        </tr>
      </tbody>
    </table>

    <div class="mt-3">
      <button id="btn-paso" class="btn btn-success">Siguiente paso</button>
    </div>
  `;

  new SumaController("decenas", "unidades", "resultado-d", "resultado-u", "btn-paso");
}
