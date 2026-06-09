export function renderTablaSuma(containerId: string, a: number, b: number) {
  const tabla = document.getElementById(containerId);
  if (!tabla) return;

  const centenasA = Math.floor(a / 100);
  const decenasA = Math.floor((a % 100) / 10);
  const unidadesA = a % 10;

  const centenasB = Math.floor(b / 100);
  const decenasB = Math.floor((b % 100) / 10);
  const unidadesB = b % 10;

  tabla.innerHTML = `
    <table class="table table-bordered text-center align-middle w-auto mx-auto">
      <thead>
        <tr>
          <th>C</th>
          <th>D</th>
          <th>U</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>${centenasA || ""}</td>
          <td>${decenasA}</td>
          <td>${unidadesA}</td>
        </tr>
        <tr>
          <td>+</td>
          <td>${decenasB}</td>
          <td>${unidadesB}</td>
        </tr>
        <tr>
          <td>
            <input type="number" id="resultado-c-${containerId}" 
                   class="form-control w-75 d-inline-block" placeholder="C">
          </td>
          <td>
            <input type="number" id="resultado-d-${containerId}" 
                   class="form-control w-75 d-inline-block" placeholder="D">
          </td>
          <td>
            <input type="number" id="resultado-u-${containerId}" 
                   class="form-control w-75 d-inline-block" placeholder="U">
          </td>
        </tr>
      </tbody>
    </table>
    <div class="text-center mt-2">
      <button id="validar-${containerId}" class="btn btn-success">Validar</button>
      <span id="feedback-${containerId}" class="ms-2"></span>
    </div>
  `;
}
