// console.log('correcto');

document.querySelector('#pintar').addEventListener('click', traerdatos);

function traerdatos(){
    // console.log('vas bien');

    const impresion = new XMLHttpRequest();

    impresion.open('GET', '/data/Ficha.json', true);

    impresion.send();

    impresion.onreadystatechange = function(){
        if(this.readyState ==4 && this.status == 200){
            // console.log(this.responseText);
            let datos = JSON.parse(this.responseText);
            // console.log(datos);
            let inicio = document.querySelector('#inicio')
            inicio.innerHTML = '';

            for(let ss of datos){
                // console.log(ss);
                inicio.innerHTML += `
                 
  <div class="ficha">
  <div class="encabezado-ficha">
                <div class="nombre-estudiante"><h1>${ss.nombre}</h1></div>
                <div class="enlaces"> 
              
                  <a href="https://github.com/sebek823/Pagina-Web"><i class='bx bxl-github bx-sm'>${ss.github}</i></a>
                  <a href="https://sebasmb.neocities.org/"><i class='bx bx-book-content bx-sm'> ${ss.neocities}</i></a>
                  <a href="mailto:samunozb@correo.iue.edu.co"><i class='bx bx-message-alt-detail bx-sm'> ${ss.email}</i></a>
                  <a href="https://wa.me/573012835661"><i class='bx bxl-whatsapp bx-sm'> ${ss.wpp}</i></a>
    
          </div>

          <div class="fotografia">
          <img src="https://sebasmb.neocities.org/sebas.jpeg">
          </div>
        </div>

        <div class="actividades-ficha">
          <div class="titulo-actividades"><h2>Actividades</h2></div>
          
          <div class="encabezado-actividades">
            <div class="item"><p>Nro.</p></div>
            <div class="nombre"><p>Actividad</p></div>
            <div class="estadouiux"><p>% UI/UX</p></div>
            <div class="estadodev"><p>% Dev</p></div>
          </div>

          <div class="estado-actividades">
            <div class="nro"><p>1</p></div>
            <div class="enlace"><a href="https://sebasmb.neocities.org/Desktop%20-%201.svg"><i class='bx bx-show-alt bx-sm'>${ss.actividad}</i></a></div>
            <div class="porcentajeuiux"><p>${ss.uiux}</p></div>
            <div class="porcentajedev"><p>${ss.dev}</p></div>

            
          </div>
        </div>

        <div class="estados-ficha">
          <div class="estadohtml"><p>${ss.val_html}</p></div>
          <div class="estadocss"><p>${ss.val_css}</p></div>
          <div class="estadojs"><p>${ss.val_js}</p></div>
          <div class="estadoui"><p>${ss.val_ui}</p></div>
          <div class="estadoux"><p>${ss.val_ux}</p></div>
          <div class="total"><p>${ss.total}</p></div>
        </div>
      </div>
                `
            }
        }
    }
}




