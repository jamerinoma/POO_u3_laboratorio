(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function e(e,t){let n=document.getElementById(e);if(n){n.innerHTML=``;for(let e=0;e<t;e++){let e=document.createElement(`div`);n.appendChild(e)}}}function t(e,t){let n=document.getElementById(e);if(n){n.innerHTML=``;for(let e=0;e<t;e++){let e=document.createElement(`div`);e.style.width=`30px`,e.style.height=`30px`,e.style.backgroundColor=`skyblue`,e.style.margin=`2px auto`,e.style.border=`1px solid #000`,e.style.borderRadius=`4px`,n.appendChild(e)}}}var n=class{constructor(n,r,i,a,o){this.decenasId=n,this.unidadesId=r,this.resultadoDId=i,this.resultadoUId=a,this.btnId=o,this.paso=0,e(this.decenasId,3),t(this.unidadesId,4),this.init()}init(){let e=document.getElementById(this.btnId);e&&e.addEventListener(`click`,()=>this.siguientePaso())}siguientePaso(){switch(this.paso++,this.paso){case 1:e(this.decenasId,2),t(this.unidadesId,8);break;case 2:let n=document.getElementById(this.resultadoUId);n&&(n.textContent=`2`),this.mostrarLlevada();break;case 3:let r=document.getElementById(this.resultadoDId);r&&(r.textContent=`6`),this.tacharLlevada(),e(this.decenasId,6),t(this.unidadesId,2);break;default:let i=document.getElementById(this.btnId);i&&i.setAttribute(`disabled`,`true`);break}}mostrarLlevada(){let e=document.querySelector(`table`);if(e){let t=document.createElement(`div`);t.id=`llevada`,t.textContent=`1`,t.style.color=`red`,t.style.fontWeight=`bold`,t.style.position=`absolute`,t.style.marginLeft=`60px`,e.parentElement?.appendChild(t)}}tacharLlevada(){let e=document.getElementById(`llevada`);e&&(e.style.textDecoration=`line-through`)}};function r(e){let t=document.getElementById(e);t&&(t.innerHTML=`
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
  `,new n(`decenas`,`unidades`,`resultado-d`,`resultado-u`,`btn-paso`))}var i=`modulepreload`,a=function(e){return`/`+e},o={},s=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),s=document.querySelector(`meta[property=csp-nonce]`),c=s?.nonce||s?.getAttribute(`nonce`);function l(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}r=l(t.map(t=>{if(t=a(t,n),t in o)return;o[t]=!0;let r=t.endsWith(`.css`),s=r?`[rel="stylesheet"]`:``;if(n)for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}else if(document.querySelector(`link[href="${t}"]${s}`))return;let l=document.createElement(`link`);if(l.rel=r?`stylesheet`:i,r||(l.as=`script`),l.crossOrigin=``,l.href=t,c&&l.setAttribute(`nonce`,c),document.head.appendChild(l),r)return new Promise((e,n)=>{l.addEventListener(`load`,e),l.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function s(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&s(e.reason);return e().catch(s)})};function c(n){n.innerHTML=`
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
  `,r(`tabla-suma`),e(`decenas`,3),t(`unidades`,4);let i=document.getElementById(`btn-ejercicios`);i&&i.addEventListener(`click`,()=>{s(()=>import(`./Ejercicios-5r-pFV3T.js`).then(e=>{e.renderEjercicios(n)}),[])})}function l(){let e=document.getElementById(`app`);e&&c(e)}l();