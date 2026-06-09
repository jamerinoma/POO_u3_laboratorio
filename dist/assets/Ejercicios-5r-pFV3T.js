function e(e,t,n){let r=document.getElementById(e);if(!r)return;let i=Math.floor(t/100),a=Math.floor(t%100/10),o=t%10;Math.floor(n/100);let s=Math.floor(n%100/10),c=n%10;r.innerHTML=`
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
          <td>${i||``}</td>
          <td>${a}</td>
          <td>${o}</td>
        </tr>
        <tr>
          <td>+</td>
          <td>${s}</td>
          <td>${c}</td>
        </tr>
        <tr>
          <td>
            <input type="number" id="resultado-c-${e}" 
                   class="form-control w-75 d-inline-block" placeholder="C">
          </td>
          <td>
            <input type="number" id="resultado-d-${e}" 
                   class="form-control w-75 d-inline-block" placeholder="D">
          </td>
          <td>
            <input type="number" id="resultado-u-${e}" 
                   class="form-control w-75 d-inline-block" placeholder="U">
          </td>
        </tr>
      </tbody>
    </table>
    <div class="text-center mt-2">
      <button id="validar-${e}" class="btn btn-success">Validar</button>
      <span id="feedback-${e}" class="ms-2"></span>
    </div>
  `}function t(t){t.innerHTML=`
    <div class="container mt-5">
      <h2 class="text-center mb-4">Ejercicios de Suma</h2>
      <p class="text-center">Resuelve las siguientes sumas usando el formato CDU. Ingresa el resultado en cada columna y valida tu respuesta.</p>
      <div id="ejercicios-list"></div>
    </div>
  `;let n=document.getElementById(`ejercicios-list`);if(n)for(let t=0;t<30;t++){let r=Math.floor(Math.random()*90)+10,i=Math.floor(Math.random()*90)+10,a=document.createElement(`div`);a.className=`ejercicio mb-5 p-3 border rounded shadow-sm`,a.innerHTML=`
      <h5>Ejercicio ${t+1}: ${r} + ${i}</h5>
      <div class="d-flex justify-content-center mt-3">
        <div id="tabla-${t}"></div>
      </div>
    `,n.appendChild(a),e(`tabla-${t}`,r,i);let o=document.getElementById(`validar-tabla-${t}`),s=document.getElementById(`feedback-tabla-${t}`);o&&s&&o.addEventListener(`click`,()=>{let e=r+i,n=Math.floor(e/100),a=Math.floor(e%100/10),o=e%10,c=document.getElementById(`resultado-c-tabla-${t}`),l=document.getElementById(`resultado-d-tabla-${t}`),u=document.getElementById(`resultado-u-tabla-${t}`),d=!0;c.value===``||parseInt(c.value)===n?c.style.borderColor=`green`:(c.style.borderColor=`red`,d=!1),parseInt(l.value)===a?l.style.borderColor=`green`:(l.style.borderColor=`red`,d=!1),parseInt(u.value)===o?u.style.borderColor=`green`:(u.style.borderColor=`red`,d=!1),s.innerHTML=d?`✅ Correcto`:`❌ Incorrecto`,s.style.color=d?`green`:`red`})}}export{t as renderEjercicios};