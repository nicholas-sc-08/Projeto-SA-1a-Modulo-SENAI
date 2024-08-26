// função para o usuário escolher se é cuidador ou responsável;
function ecolhaResponsavelOuBaba() {

    const divPerfil = document.getElementById('divPerfil');
    divPerfil.className = 'divPerfil';
    divPerfil.innerHTML = `
        
        <div class="containertres">
            
         <div class="sair">
             <a href="../html/TelaInicial.html" class="saida">X</a>
         </div>

         <div class="titulo">
             <p><strong>Você é cuidador (a)<br> ou responsável?</strong></p>
         </div>

        </div>

        <div class="containerDois">

        <!--CUIDADOR-->
         <a href="../html/cadastroBabá.html" class="cuidador">
             <p><strong>Sou cuidador(a)</strong></p>
             <img src="../fotos/iconCuidador.png" alt="iconCuidador">
         </a>

        <!--RESPONSÀVEL-->
         <a href="../html/cadastroPais.html" class="responsável">
             <p><strong>Sou responsável</strong></p>
             <img src="../fotos/iconResponsavel.webp" alt="iconResponsavel">
         </a>

        </div>
    `;
}

const imgs = document.getElementById('img');
const img = document.querySelectorAll('#img img');

let contador = 0;

// função para o funcionamento do carrossel//
function carrossel(){
    contador++

    if(contador > img.length - 1){
        contador = 0;
    }

    imgs.style.transform = `translateX(${-contador * 900}px)`;
}

setInterval(carrossel, 3800);