let preferenciasBaba = [];

// função para armazenar as preferências da babá;
function cadastraPreferencias(){

    preferenciasBaba = [];
    let preferenciaRecemNascido = document.getElementById('recemNascido');
    let preferenciaBebes = document.getElementById('bebes');
    let preferenciaCriancas = document.getElementById('criancas');
    let preferenciaCriancasEspeciais = document.getElementById('criancasEspeciais');
    

    if (preferenciaRecemNascido.checked){

        preferenciasBaba.push(preferenciaRecemNascido.value);
    }

    if (preferenciaBebes.checked){

        preferenciasBaba.push(preferenciaBebes.value);
    }

    if (preferenciaCriancas.checked){

        preferenciasBaba.push(preferenciaCriancas.value);
    }

    if (preferenciaCriancasEspeciais.checked){
        
        preferenciasBaba.push(preferenciaCriancasEspeciais.value);
    }

    if (preferenciasBaba.length == 0) {

        preferenciasBaba.push('Nenhuma preferência');
    }
}

// função para cadastrar a babá (CRUD);
function cadastraBaba(){

    let nome = document.getElementById('inputNome').value;
    let email = document.getElementById('emailInput').value;
    let senha = document.getElementById('senhaInput').value;
    let confirmacaoSenha = document.getElementById('confirmarSenhaInput').value;
    let idade = document.getElementById('idadeInput').value;
    let usuarioJaExiste = false;
    let mensagem = document.getElementById('mensagem');
    let termos = document.getElementById('termo');
    let babasCadastradas = JSON.parse(localStorage.getItem('Cuidadores Cadastrados'));
    let paisCadastrados = JSON.parse(localStorage.getItem('Responsáveis Cadastrados'));

    if (termos.checked){

        termos = true;
    } else {

        termos = false;
    }
            
    switch (true){

        case termos==true && senha==confirmacaoSenha && idade>=18:
            cadastraPreferencias();
            let babaCadastro = {
                nome: nome, 
                email: email, 
                idade: idade, 
                senha: senha, 
                preferencias: preferenciasBaba,
                descricao_de_perfil: "", 
                imagem_de_perfil: "../fotos/iconePerfil.png",
                instagram_url: "",
                facebook_url: "",
                whatsapp_url: ""
            };

            if (babasCadastradas==null){

                let babasCadastradas = [];
                babasCadastradas.push(babaCadastro);

                babasCadastradas = JSON.stringify(babasCadastradas);
                localStorage.setItem('Cuidadores Cadastrados', babasCadastradas);
                alert('Cadastro realizado com sucesso!');
                window.location.href='../html/telaLogin.html';
            } else {

                for (i=0; i<babasCadastradas.length; i++){

                    if (babasCadastradas[i].email==email){

                        usuarioJaExiste = true;
                    }
                }

                for (i=0; i<paisCadastrados.length; i++){

                    if (paisCadastrados[i].email==email){

                        usuarioJaExiste = true;
                    }
                }

                if (usuarioJaExiste==true){

                    mensagem.innerHTML = 'Usuário já existe';
                } else {

                    babasCadastradas.push(babaCadastro);

                    babasCadastradas = JSON.stringify(babasCadastradas);
                    localStorage.setItem('Cuidadores Cadastrados', babasCadastradas);
                    alert('Cadastro realizado com sucesso!');
                    window.location.href='../html/telaLogin.html';
                    break;
                        
                    }
                }
        break;

        case idade<18 && idade>0:
            mensagem.innerHTML = 'Você deve ter no mínimo 18 anos!';
            break;

        case idade<=0 || idade>=100:
            mensagem.innerHTML = 'Digite uma idade válida!';
            break;

        case termos==true && senha!=confirmacaoSenha:
            mensagem.innerHTML = 'As senhas devem ser iguais!';
            break;

        case termos==false && senha==confirmacaoSenha:
            mensagem.innerHTML = 'Aceite os termos para se cadastrar.';
            break;

        case termos==false && senha!=confirmacaoSenha || dataNascimento==null: 
            mensagem.innerHTML = 'Alguns campos não estão preenchidos ou estão incorretos!';
            break;
        }
}

// função para cadastrar os responsáveis (CRUD);
function cadastraPais(){

    let nome = document.getElementById('inputNome').value;
    let email = document.getElementById('emailInput').value;
    let senha = document.getElementById('senhaInput').value;
    let confirmacaoSenha = document.getElementById('confirmarSenhaInput').value;
    let idade = document.getElementById('idadeInput').value;
    let usuarioJaExiste = false;
    let mensagem = document.getElementById('mensagem');
    let termos = document.getElementById('termo');
    let paisCadastrados = JSON.parse(localStorage.getItem('Responsáveis Cadastrados'));
    let babasCadastradas = JSON.parse(localStorage.getItem('Cuidadores Cadastrados'));

    if (termos.checked){

        termos = true;
    } else {

        termos = false;
    }
            
    switch (true){

        case termos==true && senha==confirmacaoSenha && idade>=18:
            let responsavelCadastro = {
                nome: nome, 
                email: email, 
                idade: idade, 
                senha: senha, 
                descricao_de_perfil: "", 
                imagem_de_perfil: "../fotos/iconePerfil.png",
                instagram_url: "",
                facebook_url: "",
                whatsapp_url: ""
            };

            if (paisCadastrados==null){

                let paisCadastrados = [];

                for (i=0; i<paisCadastrados.length; i++){

                    if (paisCadastrados[i].email==email){

                        usuarioJaExiste = true;
                    }
                }

                if (usuarioJaExiste==true){

                    mensagem.innerHTML = 'Usuário já existe';
                } else {

                    paisCadastrados.push(responsavelCadastro);

                    paisCadastrados = JSON.stringify(paisCadastrados);
                    localStorage.setItem('Responsáveis Cadastrados', paisCadastrados);
                    alert('Cadastro realizado com sucesso!');
                    window.location.href='../html/telaLogin.html';
                }
            } else if (paisCadastrados!=null && babasCadastradas!=null) {

                for (i=0; i<paisCadastrados.length; i++){

                    if (paisCadastrados[i].email==email){

                        usuarioJaExiste = true;
                        break;
                    }
                }

                for (i=0; i<babasCadastradas.length; i++){

                    if (babasCadastradas[i].email==email){

                        usuarioJaExiste = true;
                    }
                }

                    if (usuarioJaExiste==true){

                        mensagem.innerHTML = 'Usuário já existe';
                    } else {

                        paisCadastrados.push(responsavelCadastro);
                        paisCadastrados = JSON.stringify(paisCadastrados);
                        localStorage.setItem('Responsáveis Cadastrados', paisCadastrados);
                        alert('Cadastro realizado com sucesso!');
                        window.location.href='../html/telaLogin.html';
                        
                    }
            } else if (paisCadastrados!=null && babasCadastradas==null) {

                for (i=0; i<paisCadastrados.length; i++){

                    if (paisCadastrados[i].email==email){

                        usuarioJaExiste = true;
                        break;
                    }
                }

                if (usuarioJaExiste==true){

                    mensagem.innerHTML = 'Usuário já existe';
                } else {

                    paisCadastrados.push(responsavelCadastro);
                    paisCadastrados = JSON.stringify(paisCadastrados);
                    localStorage.setItem('Responsáveis Cadastrados', paisCadastrados);
                    alert('Cadastro realizado com sucesso!');
                    window.location.href='../html/telaLogin.html';
                    
                }
            }
        break;

        case idade<18 && idade>0:
            mensagem.innerHTML = 'Você deve ter no mínimo 18 anos!';
            break;

        case idade<=0 || idade>=100:
            mensagem.innerHTML = 'Digite uma idade válida!';
            break;

        case termos==true && senha!=confirmacaoSenha:
            mensagem.innerHTML = 'As senhas devem ser iguais!';
            break;

        case termos==false && senha==confirmacaoSenha:
            mensagem.innerHTML = 'Aceite os termos para se cadastrar.';
            break;

        case termos==false && senha!=confirmacaoSenha || idade==null: 
            mensagem.innerHTML = 'Alguns campos não estão preenchidos ou estão incorretos!';
            break;
    }
}

// função para logar os usuários (CRUD);
function logaUsuario(){

    let senhaDigitada = document.getElementById('senhaInput').value;
    let emailDigitado = document.getElementById('emailInput').value;
    let babasCadastradas = JSON.parse(localStorage.getItem('Cuidadores Cadastrados'));
    let paisCadastrados = JSON.parse(localStorage.getItem('Responsáveis Cadastrados'));
    let usuarioBaba = false;
    let usuarioResponsavel = false;
    let mensagem = document.getElementById('mensagem');
    let posicaoUser;

    if (paisCadastrados==null && babasCadastradas==null){

        usuarioBaba = false;
        usuarioResponsavel = false;
    } else if (paisCadastrados==null && babasCadastradas!=null){

        for (i=0; i<babasCadastradas.length; i++){

            if (babasCadastradas[i].email==emailDigitado){

                usuarioBaba = true;
                posicaoUser = i;
                break;
            }
        }
    } else if (babasCadastradas==null && paisCadastrados!=null){

        for (i=0; i<paisCadastrados.length; i++){

            if (paisCadastrados[i].email==emailDigitado){

                usuarioResponsavel = true;
                posicaoUser = i;
                break;
            }
        }
    } else {

        for (i=0; i<babasCadastradas.length; i++){

            if (babasCadastradas[i].email==emailDigitado){

                usuarioBaba = true;
                posicaoUser = i;
                break;
            }
        }

        for (i=0; i<paisCadastrados.length; i++){

            if (paisCadastrados[i].email==emailDigitado){

                usuarioResponsavel = true;
                posicaoUser = i;
                break;
            }
        }
    }

    if (usuarioResponsavel==false && usuarioBaba==true){
    
        switch (true){

            case senhaDigitada==babasCadastradas[posicaoUser].senha && emailDigitado==babasCadastradas[posicaoUser].email:
                
                let babaCadastro = {
                    nome: babasCadastradas[posicaoUser].nome, 
                    email: babasCadastradas[posicaoUser].email, 
                    idade: babasCadastradas[posicaoUser].idade, 
                    senha: babasCadastradas[posicaoUser].senha, 
                    preferencias: babasCadastradas[posicaoUser].preferencias,
                    descricao_de_perfil: babasCadastradas[posicaoUser].descricao_de_perfil, 
                    imagem_de_perfil: babasCadastradas[posicaoUser].imagem_de_perfil,
                    instagram_url: babasCadastradas[posicaoUser].instagram_url,
                    whatsapp_url: babasCadastradas[posicaoUser].whatsapp_url,
                    facebook_url: babasCadastradas[posicaoUser].facebook_url
                };

                babaCadastro = JSON.stringify(babaCadastro);
                localStorage.setItem('User Logado', babaCadastro);
                alert ('Login Efetuado!');
                window.location.href='../html/perfil_baba.html';
                break;
            case emailDigitado!=babasCadastradas[posicaoUser].email: 

                mensagem.innerHTML = 'Email não encontrado';
                break;
            case emailDigitado==babasCadastradas[posicaoUser].email && senhaDigitada!=babasCadastradas[posicaoUser].senha:

                mensagem.innerHTML = 'Senha incorreta!';
                break;
        }

    } else if (usuarioResponsavel==true && usuarioBaba==false){

        switch (true){

            case senhaDigitada==paisCadastrados[posicaoUser].senha && emailDigitado==paisCadastrados[posicaoUser].email:
                
                let responsavelCadastro = {
                    nome: paisCadastrados[posicaoUser].nome, 
                    email: paisCadastrados[posicaoUser].email, 
                    idade: paisCadastrados[posicaoUser].idade, 
                    senha: paisCadastrados[posicaoUser].senha, 
                    descricao_de_perfil: paisCadastrados[posicaoUser].descricao_de_perfil, 
                    imagem_de_perfil: paisCadastrados[posicaoUser].imagem_de_perfil,
                    instagram_url: paisCadastrados[posicaoUser].instagram_url,
                    whatsapp_url: paisCadastrados[posicaoUser].whatsapp_url,
                    facebook_url: paisCadastrados[posicaoUser].facebook_url
                };

                responsavelCadastro = JSON.stringify(responsavelCadastro);
                localStorage.setItem('User Logado', responsavelCadastro);
                alert ('Login Efetuado!');
                window.location.href='../html/perfil_responsavel.html';
                break;
            case emailDigitado==paisCadastrados[posicaoUser].email && senhaDigitada!=paisCadastrados[posicaoUser].senha:

                mensagem.innerHTML = 'Senha incorreta!';
                break;
            case senhaDigitada==paisCadastrados[posicaoUser].senha && emailDigitado!=paisCadastrados[posicaoUser].email:

                mensagem.innerHTML = 'Email não encontrado';
                break;
            case senhaDigitada!=paisCadastrados[posicaoUser].senha && emailDigitado!=paisCadastrados[posicaoUser].email:

                mensagem.innerHTML = 'Email e senha incorretos!';
                break;
            }
    } else if (usuarioResponsavel==false && usuarioBaba==false){

        mensagem.innerHTML = 'Email não encontrado';
    }
}

// função para logar o administrador(CRUD);
function logaAdmin(){

    let admin = JSON.parse(localStorage.getItem('Login Administrador'));
    let emailDigitado = document.getElementById('emailInput').value;
    let senhaDigitada = document.getElementById('senhaInput').value;

    if (admin==null){

        let admin = {email: 'admin123@gmail.com', senha: 'SeNhA!*'};

        if (emailDigitado==admin.email && senhaDigitada==admin.senha){

            admin = JSON.stringify(admin);
            localStorage.setItem('Login Administrador', admin);

            alert('Login efetuado como administrador!');
            window.location.href='../html/telaAdm.html';
        }
    } else if (emailDigitado==admin.email && senhaDigitada==admin.senha){

            alert('Login efetuado como administrador!');
            window.location.href='../html/telaAdm.html';
    }
}

// função para que a pessoa possa excluir sua conta (CRUD);
function excluirConta(){

    let userLogado = JSON.parse(localStorage.getItem('User Logado'));
    let babasCadastradas = JSON.parse(localStorage.getItem('Cuidadores Cadastrados'));
    let paisCadastrados = JSON.parse(localStorage.getItem('Responsáveis Cadastrados'));
    let usuarioBaba = false;
    let usuarioResponsavel = false;
    let posicaoUser;


    if (paisCadastrados==null){

        for (i=0; i<babasCadastradas.length; i++){
    
            if (babasCadastradas[i].email==userLogado.email){
    
                usuarioBaba = true;
                posicaoUser = i;
                break;
            }
        }
    } else if (babasCadastradas==null){
    
        for (i=0; i<paisCadastrados.length; i++){
    
            if (paisCadastrados[i].email==userLogado.email){
    
                usuarioResponsavel = true;
                posicaoUser = i;
                break;
            }
        }
    } else {
    
        for (i=0; i<babasCadastradas.length; i++){
    
            if (babasCadastradas[i].email==userLogado.email){
    
                usuarioBaba = true;
                posicaoUser = i;
                break;
            }
        }
    
        for (i=0; i<paisCadastrados.length; i++){

            if (paisCadastrados[i].email==userLogado.email){

                usuarioResponsavel = true;
                posicaoUser = i;
                break;
            }
        }
    }
        
        if (usuarioBaba==true && usuarioResponsavel==false){
    
            babasCadastradas.splice(posicaoUser, 1);
    
            babasCadastradas = JSON.stringify(babasCadastradas);
            localStorage.setItem('Cuidadores Cadastrados', babasCadastradas);
    
            alert('Conta excluída com sucesso!');
        } else if (usuarioBaba==false && usuarioResponsavel==true){
    
            paisCadastrados.splice(posicaoUser, 1);
    
            paisCadastrados = JSON.stringify(paisCadastrados);
            localStorage.setItem('Responsáveis Cadastrados', paisCadastrados);
    
            alert('Conta excluída com sucesso!');
        }
}

// Função para mostrar os perfis das babás;
function mostraServicos() {
    let perfisBabas = JSON.parse(localStorage.getItem('Cuidadores Cadastrados'));
    const containerPerfil = document.getElementById('perfis');
    containerPerfil.innerHTML = '';

    perfisBabas.forEach(perfil => {
        const divPerfil = document.createElement('div');
        divPerfil.className = 'divPerfil';
        divPerfil.innerHTML = `
            <img src="perfil.imagem_usuario">
            <h2>${perfil.nome}</h2>
            <h3>${perfil.idade}</h3>
            <h3>Preferência(s):</h3>
            <h4>${perfil.preferencias}</h4>
        `;
        divPerfil.addEventListener('click', () => mostrarDetalhesPerfil(perfil));
        containerPerfil.appendChild(divPerfil);
    });
}

// Função para mostrar os detalhes do perfil clicado;
function mostrarDetalhesPerfil(perfil) {
    const detalhesPerfil = document.getElementById('detalhesPerfil');
    detalhesPerfil.className = 'detalhesPerfil';
    detalhesPerfil.innerHTML = `
        <h2>${perfil.nome}</h2>
        <h3>${perfil.idade}</h3>
        <h3>Preferência(s):</h3>
        <h4>${perfil.preferencias}</h4>
        <h3>Email para contato:</h3>
        <p>${perfil.email}</p><br>
        <a href="../html/telaAgendamento.html">
            <button>Agendar</button>
        </a>
    `;
}

function modificar_imagem_de_perfil_baba(){

    let element_opcao_de_imagens = document.getElementById(`opcao_de_imagens`);
    
    element_opcao_de_imagens.innerHTML = `
    
    
    <div class="opcao_de_imagens">
    
    <button onclick="mudar_imagem_um_baba()"><img src="🦆 icon _user account profile_.png" alt="imagem.png"></button>
    <button onclick="mudar_imagem_dois_baba()"><img src="https://s2-techtudo.glbimg.com/SSAPhiaAy_zLTOu3Tr3ZKu2H5vg=/0x0:1024x609/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2022/c/u/15eppqSmeTdHkoAKM0Uw/dall-e-2.jpg" alt="imagem.png"></button>
    <button onclick="mudar_imagem_tres_baba()"><img src="https://img.elo7.com.br/product/zoom/39D2E6F/tela-para-quadro-80x80-leao-selvagem-preto-e-branco-fineart.jpg" alt="imagem.png"></button>
    <button onclick="mudar_imagem_quatro_baba()"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbscwqaPEk3_5Y90HOvwNvHtaaKceea9t2_A&s" alt="imagem.png"></button>
    
    </div>
    `;
    
};

function mudar_imagem_um_baba(){
    
    let element_imagem_de_usuario = document.getElementById(`imagem_de_usuario`);
    let element_nav_img_usuario = document.getElementById(`nav_img_usuario`);
    element_nav_img_usuario.src = `🦆 icon _user account profile_.png`;
    let pegar_object;
    let user_logado;
    let validacion = false;
    user_logado = JSON.parse(localStorage.getItem(`User Logado`));
    pegar_object = JSON.parse(localStorage.getItem(`Cuidadores Cadastrados`));

    for(i = 0; validacion == false; i++){

        if(pegar_object[i].email == user_logado.email){

            pegar_object[i].imagem_de_perfil = `🦆 icon _user account profile_.png`;

            localStorage.setItem(`Cuidadores Cadastrados`, JSON.stringify(pegar_object));
            validacion = true;

            element_imagem_de_usuario.src = `🦆 icon _user account profile_.png`;
            element_nav_img_usuario.src = `🦆 icon _user account profile_.png`;
        };
    };
    window.onload();
};

function mudar_imagem_dois_baba(){
    
    let element_imagem_de_usuario = document.getElementById(`imagem_de_usuario`);
    let element_nav_img_usuario = document.getElementById(`nav_img_usuario`);
    element_nav_img_usuario.src = `https://s2-techtudo.glbimg.com/SSAPhiaAy_zLTOu3Tr3ZKu2H5vg=/0x0:1024x609/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2022/c/u/15eppqSmeTdHkoAKM0Uw/dall-e-2.jpg`;
    let pegar_object;
    let user_logado;
    let validacion = false;
    user_logado = JSON.parse(localStorage.getItem(`User Logado`));
    pegar_object = JSON.parse(localStorage.getItem(`Cuidadores Cadastrados`));

    for(i = 0; validacion == false; i++){

        if(pegar_object[i].email == user_logado.email){

            pegar_object[i].imagem_de_perfil = `https://s2-techtudo.glbimg.com/SSAPhiaAy_zLTOu3Tr3ZKu2H5vg=/0x0:1024x609/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2022/c/u/15eppqSmeTdHkoAKM0Uw/dall-e-2.jpg`;

            localStorage.setItem(`Cuidadores Cadastrados`, JSON.stringify(pegar_object));
            validacion = true;

            element_imagem_de_usuario.src = `https://s2-techtudo.glbimg.com/SSAPhiaAy_zLTOu3Tr3ZKu2H5vg=/0x0:1024x609/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2022/c/u/15eppqSmeTdHkoAKM0Uw/dall-e-2.jpg`;
            element_nav_img_usuario.src = `https://s2-techtudo.glbimg.com/SSAPhiaAy_zLTOu3Tr3ZKu2H5vg=/0x0:1024x609/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2022/c/u/15eppqSmeTdHkoAKM0Uw/dall-e-2.jpg`;
        };
    };
    window.onload();
};

function mudar_imagem_tres_baba(){
    
    let element_imagem_de_usuario = document.getElementById(`imagem_de_usuario`);
    let element_nav_img_usuario = document.getElementById(`nav_img_usuario`);
    element_nav_img_usuario.src = `https://img.elo7.com.br/product/zoom/39D2E6F/tela-para-quadro-80x80-leao-selvagem-preto-e-branco-fineart.jpg`;
    let pegar_object;
    let user_logado;
    let validacion = false;
    user_logado = JSON.parse(localStorage.getItem(`User Logado`));
    pegar_object = JSON.parse(localStorage.getItem(`Cuidadores Cadastrados`));

    for(i = 0; validacion == false; i++){

        if(pegar_object[i].email == user_logado.email){

            pegar_object[i].imagem_de_perfil = `https://img.elo7.com.br/product/zoom/39D2E6F/tela-para-quadro-80x80-leao-selvagem-preto-e-branco-fineart.jpg`;

            localStorage.setItem(`Cuidadores Cadastrados`, JSON.stringify(pegar_object));
            validacion = true;

            element_imagem_de_usuario.src = `https://img.elo7.com.br/product/zoom/39D2E6F/tela-para-quadro-80x80-leao-selvagem-preto-e-branco-fineart.jpg`;
            element_nav_img_usuario.src = `https://img.elo7.com.br/product/zoom/39D2E6F/tela-para-quadro-80x80-leao-selvagem-preto-e-branco-fineart.jpg`;
        };
    };
    window.onload();
};

function mudar_imagem_quatro_baba(){
    
    let element_imagem_de_usuario = document.getElementById(`imagem_de_usuario`);
    let element_nav_img_usuario = document.getElementById(`nav_img_usuario`);
    element_nav_img_usuario.src = `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbscwqaPEk3_5Y90HOvwNvHtaaKceea9t2_A&s`;
    let pegar_object;
    let user_logado;
    let validacion = false;
    user_logado = JSON.parse(localStorage.getItem(`User Logado`));
    pegar_object = JSON.parse(localStorage.getItem(`Cuidadores Cadastrados`));

    for(i = 0; validacion == false; i++){

        if(pegar_object[i].email == user_logado.email){

            pegar_object[i].imagem_de_perfil = `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbscwqaPEk3_5Y90HOvwNvHtaaKceea9t2_A&s`;

            localStorage.setItem(`Cuidadores Cadastrados`, JSON.stringify(pegar_object));
            validacion = true;

            element_imagem_de_usuario.src = `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbscwqaPEk3_5Y90HOvwNvHtaaKceea9t2_A&s`;
            element_nav_img_usuario.src = `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbscwqaPEk3_5Y90HOvwNvHtaaKceea9t2_A&s`;
        };
    };
    window.onload();
};

function on_load_imagem_de_perfil_edicao_baba(){
    let pegar_localStorage_baba = JSON.parse(localStorage.getItem(`Cuidadores Cadastrados`));
    let pegar_localStorage_user_logado = JSON.parse(localStorage.getItem(`User Logado`));
    let element_inpt_nome_de_usuario_editar_perfil = document.getElementById(`inpt_nome_de_usuario_editar_perfil`);
    let element_inpt_email_de_usuario_editar_perfil = document.getElementById(`inpt_email_de_usuario_editar_perfil`);
    let element_inpt_senha_de_usuario_editar_perfil = document.getElementById(`inpt_senha_de_usuario_editar_perfil`);
    let element_nova_descricao_de_perfil = document.getElementById(`nova_descricao_de_perfil`);
    let element_imagem_de_usuario = document.getElementById(`imagem_de_usuario`);
    let element_nav_img_usuario = document.getElementById(`nav_img_usuario`);
    let element_hdois_nome_de_usuario = document.getElementById(`hdois_nome_de_usuario`);
    let element_inpt_preferencias_a = document.getElementById(`inpt_preferencias_a`);
    let element_inpt_preferencias_b = document.getElementById(`inpt_preferencias_b`);
    let element_inpt_preferencias_c = document.getElementById(`inpt_preferencias_c`);
    let element_inpt_preferencias_d = document.getElementById(`inpt_preferencias_d`);

    let validacao = false;

    for(i = 0; validacao == false; i++){

        // console.log(pegar_localStorage_baba[i]);
        // console.log(pegar_localStorage_user_logado.email);
        if(pegar_localStorage_baba[i].email == pegar_localStorage_user_logado.email){

            
            if(pegar_localStorage_baba[i].preferenciasBaba.includes(`Recém-Nascido`)){
                element_inpt_preferencias_a.checked = pegar_localStorage_baba[i].preferenciasBaba.includes(`Recém-Nascido`);
        
            };

            if(pegar_localStorage_baba[i].preferenciasBaba.includes(`Bebes de 1-3 anos`)){

                element_inpt_preferencias_b.checked = pegar_localStorage_baba[i].preferenciasBaba.includes(`Bebes de 1-3 anos`);
            };
            
            if(pegar_localStorage_baba[i].preferenciasBaba.includes(`Crianças de 4-7 anos`)){

                element_inpt_preferencias_c.checked = pegar_localStorage_baba[i].preferenciasBaba.includes(`Crianças de 4-7 anos`);
            };

            if(pegar_localStorage_baba[i].preferenciasBaba.includes(`Criança com Necessidades Especiais`)){

                element_inpt_preferencias_d.checked = pegar_localStorage_baba[i].preferenciasBaba.includes(`Criança com Necessidades Especiais`);
            };
            
            element_hdois_nome_de_usuario.innerHTML = pegar_localStorage_baba[i].nome;
            element_nav_img_usuario.src = pegar_localStorage_baba[i].imagem_de_perfil;
            element_nova_descricao_de_perfil.value = pegar_localStorage_baba[i].descricao_de_perfil;
            element_imagem_de_usuario.src = pegar_localStorage_baba[i].imagem_de_perfil;
            element_inpt_nome_de_usuario_editar_perfil.value = pegar_localStorage_baba[i].nome;
            element_inpt_email_de_usuario_editar_perfil.value = pegar_localStorage_baba[i].email;
            element_inpt_senha_de_usuario_editar_perfil.value = pegar_localStorage_baba[i].senha;
            validacao = true;
        };
    };
};

function on_load_imagem_de_perfil_baba(){

    let element_inpt_nome_de_usuario_exibir_perfil = document.getElementById(`inpt_nome_de_usuario_exibir_perfil`);
    let element_inpt_email_de_usuario_exibir_perfil = document.getElementById(`inpt_email_de_usuario_exibir_perfil`);
    let element_hdois_nome_de_usuario = document.getElementById(`hdois_nome_de_usuario`);
    let element_imagem_de_usuario = document.getElementById(`imagem_de_usuario`);
    let element_nova_descricao_de_perfil = document.getElementById(`nova_descricao_de_perfil`);
    let pegar_localStorage_baba = JSON.parse(localStorage.getItem(`Cuidadores Cadastrados`));
    let pegar_localStorage_user_logado = JSON.parse(localStorage.getItem(`User Logado`));
    let element_dv_preferencias_das_babas = document.getElementById(`dv_preferencias_das_babas`);
    let element_preferencias_babas_a;
    let element_preferencias_babas_b;
    let element_preferencias_babas_c;
    let element_preferencias_babas_d;
    let validacao = false;
    let validacao_b = false;
    for(i = 0; validacao == false;i++){

        if(pegar_localStorage_baba[i].email == pegar_localStorage_user_logado.email){

            element_nova_descricao_de_perfil.value = pegar_localStorage_baba[i].descricao_de_perfil;
            element_imagem_de_usuario.src = pegar_localStorage_baba[i].imagem_de_perfil;
            element_hdois_nome_de_usuario.innerHTML = pegar_localStorage_baba[i].nome;
            element_inpt_nome_de_usuario_exibir_perfil.value = pegar_localStorage_baba[i].nome;
            element_inpt_email_de_usuario_exibir_perfil.value = pegar_localStorage_baba[i].email;
            validacao = true;
            localStorage.setItem(``)
        };
    };

    element_dv_preferencias_das_babas.innerHTML = `
        <label>        
        <input type="checkbox" readonly id="preferencias_babas_a" onclick="return false;"> 
        Recém-Nascido
        </label>
        <label>        
        <input type="checkbox" readonly id="preferencias_babas_b" onclick="return false;">
        Bebes de 1-3 anos
        </label>
        <label>        
        <input type="checkbox" readonly id="preferencias_babas_c" onclick="return false;">
        Crianças de 4-7 anos
        </label>
        <label>        
        <input type="checkbox" readonly id="preferencias_babas_d" onclick="return false;">
        Crianças com Necessidades Especiais
        </label>
    `;

    element_preferencias_babas_a = document.getElementById(`preferencias_babas_a`);
    element_preferencias_babas_b = document.getElementById(`preferencias_babas_b`);
    element_preferencias_babas_c = document.getElementById(`preferencias_babas_c`);
    element_preferencias_babas_d = document.getElementById(`preferencias_babas_d`);

    for(i = 0; validacao_b == false; i++){

        if(pegar_localStorage_baba[i].email == pegar_localStorage_user_logado.email){
            if(pegar_localStorage_baba[i].preferenciasBaba.includes(`Recém-Nascido`)){
                element_preferencias_babas_a.checked = true;
            };

            if(pegar_localStorage_baba[i].preferenciasBaba.includes(`Bebes de 1-3 anos`)){
                element_preferencias_babas_b.checked = true;
            };

            if(pegar_localStorage_baba[i].preferenciasBaba.includes(`Crianças de 4-7 anos`)){
                element_preferencias_babas_c.checked = true;
            };

            if(pegar_localStorage_baba[i].preferenciasBaba.includes(`Crianças com Necessidades Especiais`)){
                element_preferencias_babas_d.checked = true;
            };

            validacao_b = true;
        };
    };
};

function editar_perfil_baba(){

    let element_inpt_nome_de_usuario_editar_perfil = document.getElementById(`inpt_nome_de_usuario_editar_perfil`);
    let element_inpt_email_de_usuario_editar_perfil = document.getElementById(`inpt_email_de_usuario_editar_perfil`);
    let element_inpt_senha_de_usuario_editar_perfil = document.getElementById(`inpt_senha_de_usuario_editar_perfil`);
    let element_inpt_preferencias_a = document.getElementById(`inpt_preferencias_a`);
    let element_inpt_preferencias_b = document.getElementById(`inpt_preferencias_b`);
    let element_inpt_preferencias_c = document.getElementById(`inpt_preferencias_c`);
    let element_inpt_preferencias_d = document.getElementById(`inpt_preferencias_d`);
    let obter_localStorage_baba = JSON.parse(localStorage.getItem(`Cuidadores Cadastrados`));
    let obter_localStorage_user_logado = JSON.parse(localStorage.getItem(`User Logado`));
    let validacao = false;
    let pegar_posicao;

    for(i = 0; validacao == false; i++){

        if(obter_localStorage_baba[i].email == obter_localStorage_user_logado.email){

            pegar_posicao = i;
            
            
            validacao = true;
        };
    };

    if(element_inpt_preferencias_a.checked == true){
        obter_localStorage_baba[pegar_posicao].preferenciasBaba.splice(0, 1, `Recém-Nascido`);
    } else {
        obter_localStorage_baba[pegar_posicao].preferenciasBaba.splice(0, 1, "");
    };

    if(element_inpt_preferencias_b.checked == true){
        obter_localStorage_baba[pegar_posicao].preferenciasBaba.splice(1, 1, `Bebes de 1-3 anos`);
    } else {
        obter_localStorage_baba[pegar_posicao].preferenciasBaba.splice(1, 1, "");
    };

    if(element_inpt_preferencias_c.checked == true){
        obter_localStorage_baba[pegar_posicao].preferenciasBaba.splice(2, 1, `Crianças de 4-7 anos`);
    } else {
        obter_localStorage_baba[pegar_posicao].preferenciasBaba.splice(2, 1, "");
    };

    if(element_inpt_preferencias_d.checked == true){
        obter_localStorage_baba[pegar_posicao].preferenciasBaba.splice(3, 1, `Crianças com Necessidades Especiais`);
    } else {
        obter_localStorage_baba[pegar_posicao].preferenciasBaba.splice(3, 1, "");
    };
    alert()
    
    obter_localStorage_baba[pegar_posicao].nome = element_inpt_nome_de_usuario_editar_perfil.value;
    obter_localStorage_baba[pegar_posicao].email = element_inpt_email_de_usuario_editar_perfil.value;
    obter_localStorage_baba[pegar_posicao].senha = element_inpt_senha_de_usuario_editar_perfil.value;

    localStorage.setItem(`Cuidadores Cadastrados`, JSON.stringify(obter_localStorage_baba));
    window.onload();
};


function mudar_link_whatsapp_baba(){
   let obter_numero;
   let enchaminhamento_de_pagina;
   let obter_localStorage = JSON.parse(localStorage.getItem(`Cuidadores Cadastrados`));
   let obter_localStorage_user_logado = JSON.parse(localStorage.getItem(`User Logado`));
   let validacion = false;
   
   for(i = 0; validacion == false; i++){
       
       if(obter_localStorage[i].email == obter_localStorage_user_logado.email){
        obter_numero = prompt(`Digite o seu número de whatsapp, exemplo:\n\n Número de whatsapp: +55 048 - 12345-6789\n\nManeira a se escrever: 48123456789`);
        enchaminhamento_de_pagina = `https://wa.me/${obter_numero}`;

        obter_localStorage[i].whatsapp_url = enchaminhamento_de_pagina;
        localStorage.setItem(`Cuidadores Cadastrados`, JSON.stringify(obter_localStorage));

        validacion = true;
    };
   };
};

function ir_ao_whatsapp_baba(){
    let pegar_localStorage_baba = JSON.parse(localStorage.getItem(`Cuidadores Cadastrados`));
    let pegar_localStorage_user_logado = JSON.parse(localStorage.getItem(`User Logado`));
    let validacao = false;
    for(i = 0; validacao == false; i++){

        if(pegar_localStorage_baba[i].email == pegar_localStorage_user_logado.email){

            window.location.href= pegar_localStorage_baba[i].whatsapp_url;
            validacao = true;
        };
    };
};

function mudar_link_facebook_baba(){
    let obter_numero;
    let obter_localStorage = JSON.parse(localStorage.getItem(`Cuidadores Cadastrados`));
    let obter_localStorage_user_logado = JSON.parse(localStorage.getItem(`User Logado`));
    let validacion = false;
    
    for(i = 0; validacion == false; i++){
        
        if(obter_localStorage[i].email == obter_localStorage_user_logado.email){
         obter_numero = prompt(`Digite o seu link de perfil do facebook`);
 
         obter_localStorage[i].facebook_url = enchaminhamento_de_pagina;
         localStorage.setItem(`Cuidadores Cadastrados`, JSON.stringify(obter_localStorage));
 
         validacion = true;
     };
    };
 };

 function ir_ao_facebook_baba(){
    let pegar_localStorage_baba = JSON.parse(localStorage.getItem(`Cuidadores Cadastrados`));
    let pegar_localStorage_user_logado = JSON.parse(localStorage.getItem(`User Logado`));
    let validacao = false;
    for(i = 0; validacao == false; i++){

        if(pegar_localStorage_baba[i].email == pegar_localStorage_user_logado.email){

            window.location.href= pegar_localStorage_baba[i].facebook_url;
            validacao = true;
        };
    };
};

function mudar_link_instagram_baba(){
   let obter_numero;
   let obter_localStorage = JSON.parse(localStorage.getItem(`Cuidadores Cadastrados`));
   let obter_localStorage_user_logado = JSON.parse(localStorage.getItem(`User Logado`));
   let validacion = false;
   
   for(i = 0; validacion == false; i++){
       
       if(obter_localStorage[i].email == obter_localStorage_user_logado.email){
        obter_numero = prompt(`Digite o seu link de perfil do instagram`);

        obter_localStorage[i].facebook_url = enchaminhamento_de_pagina;
        localStorage.setItem(`Cuidadores Cadastrados`, JSON.stringify(obter_localStorage));

        validacion = true;
    };
   };
};



function ir_ao_instagram_baba(){
    let pegar_localStorage_baba = JSON.parse(localStorage.getItem(`Cuidadores Cadastrados`));
    let pegar_localStorage_user_logado = JSON.parse(localStorage.getItem(`User Logado`));
    let validacao = false;
    for(i = 0; validacao == false; i++){

        if(pegar_localStorage_baba[i].email == pegar_localStorage_user_logado.email){

            window.location.href= pegar_localStorage_baba[i].instagram_url;
            validacao = true;
        };
    };
};

function descricao_de_perfil_baba(){

   let element_nova_descricao_de_perfil = document.getElementById(`nova_descricao_de_perfil`);
   let pegar_localStorage_baba = JSON.parse(localStorage.getItem(`Cuidadores Cadastrados`));
   let pegar_localStorage_user_logado = JSON.parse(localStorage.getItem(`User Logado`));
   let validacao = false;
   for(i = 0; validacao == false; i++){

       if(pegar_localStorage_baba[i].email == pegar_localStorage_user_logado.email){

           pegar_localStorage_baba[i].descricao_de_perfil = element_nova_descricao_de_perfil.value;
           localStorage.setItem(`Cuidadores Cadastrados`, JSON.stringify(pegar_localStorage_baba));
           validacao = true;

       };
   };
};

function excluir_conta_atraves_de_perfil_responsavel(){

   let pergunta_ao_usuario;
   let resposta_confirmada = false;

   for(i = 0; resposta_confirmada != true; i++){

       pergunta_ao_usuario = prompt(`Tem certeza que deseja deletar sua conta?\n\nDigite (Sim) ou (Não).`);
     
       if(pergunta_ao_usuario.toUpperCase() == `SIM`){
           
           resposta_confirmada = true;
           excluirConta();
           window.location.href=`cadastroPais.html`;
       } else if(pergunta_ao_usuario.toUpperCase() == `NÃO` || pergunta_ao_usuario.toUpperCase() == `NAO`){
           
           resposta_confirmada = true;
       } else {
           alert(`Favor digitar entre (Sim) ou (Não)`);
       };
   };
};

function excluir_conta_atraves_de_perfil_baba(){

   let pergunta_ao_usuario;
   let resposta_confirmada = false;

   for(i = 0; resposta_confirmada != true; i++){

       pergunta_ao_usuario = prompt(`Tem certeza que deseja deletar sua conta?\n\nDigite (Sim) ou (Não).`);
     
       if(pergunta_ao_usuario.toUpperCase() == `SIM`){
           
           resposta_confirmada = true;
           excluirConta();
           window.location.href=`cadastroBabá.html`;
       } else if(pergunta_ao_usuario.toUpperCase() == `NÃO` || pergunta_ao_usuario.toUpperCase() == `NAO`){
           
           resposta_confirmada = true;
       } else {
           alert(`Favor digitar entre (Sim) ou (Não)`);
       };
   };
};

function modificar_imagem_de_perfil_responsavel(){

   let element_nova_descricao_de_perfil = document.getElementById(`nova_descricao_de_perfil`);
   let element_opcao_de_imagens = document.getElementById(`opcao_de_imagens`);
   
   element_opcao_de_imagens.innerHTML = `
   
   
   <div class="opcao_de_imagens">
   
   <button onclick="mudar_imagem_um_baba()"><img src="🦆 icon _user account profile_.png" alt="imagem.png"></button>
   <button onclick="mudar_imagem_dois_baba()"><img src="https://s2-techtudo.glbimg.com/SSAPhiaAy_zLTOu3Tr3ZKu2H5vg=/0x0:1024x609/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2022/c/u/15eppqSmeTdHkoAKM0Uw/dall-e-2.jpg" alt="imagem.png"></button>
   <button onclick="mudar_imagem_tres_baba()"><img src="https://img.elo7.com.br/product/zoom/39D2E6F/tela-para-quadro-80x80-leao-selvagem-preto-e-branco-fineart.jpg" alt="imagem.png"></button>
   <button onclick="mudar_imagem_quatro_baba()"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbscwqaPEk3_5Y90HOvwNvHtaaKceea9t2_A&s" alt="imagem.png"></button>
   
   </div>
   `;
   
};

function mudar_imagem_um_responsavel(){
   
   let element_imagem_de_usuario = document.getElementById(`imagem_de_usuario`);
   let element_nav_img_usuario = document.getElementById(`nav_img_usuario`);
   element_nav_img_usuario.src = `🦆 icon _user account profile_.png`;
   let pegar_object;
   let user_logado;
   let validacion = false;
   user_logado = JSON.parse(localStorage.getItem(`User Logado`));
   pegar_object = JSON.parse(localStorage.getItem(`Responsáveis Cadastrados`));

   for(i = 0; validacion == false; i++){

       if(pegar_object[i].email == user_logado.email){

           pegar_object[i].imagem_de_perfil = `🦆 icon _user account profile_.png`;

           localStorage.setItem(`Responsáveis Cadastrados`, JSON.stringify(pegar_object));
           validacion = true;

           element_imagem_de_usuario.src = `🦆 icon _user account profile_.png`;
           element_nav_img_usuario.src = `🦆 icon _user account profile_.png`;
       };
   };
   window.onload();
};

function mudar_imagem_dois_responsavel(){
   
   let element_imagem_de_usuario = document.getElementById(`imagem_de_usuario`);
   let element_nav_img_usuario = document.getElementById(`nav_img_usuario`);
   element_nav_img_usuario.src = `https://s2-techtudo.glbimg.com/SSAPhiaAy_zLTOu3Tr3ZKu2H5vg=/0x0:1024x609/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2022/c/u/15eppqSmeTdHkoAKM0Uw/dall-e-2.jpg`;
   let pegar_object;
   let user_logado;
   let validacion = false;
   user_logado = JSON.parse(localStorage.getItem(`User Logado`));
   pegar_object = JSON.parse(localStorage.getItem(`Responsáveis Cadastrados`));

   for(i = 0; validacion == false; i++){

       if(pegar_object[i].email == user_logado.email){

           pegar_object[i].imagem_de_perfil = `https://s2-techtudo.glbimg.com/SSAPhiaAy_zLTOu3Tr3ZKu2H5vg=/0x0:1024x609/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2022/c/u/15eppqSmeTdHkoAKM0Uw/dall-e-2.jpg`;

           localStorage.setItem(`Responsáveis Cadastrados`, JSON.stringify(pegar_object));
           validacion = true;

           element_imagem_de_usuario.src = `https://s2-techtudo.glbimg.com/SSAPhiaAy_zLTOu3Tr3ZKu2H5vg=/0x0:1024x609/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2022/c/u/15eppqSmeTdHkoAKM0Uw/dall-e-2.jpg`;
           element_nav_img_usuario.src = `https://s2-techtudo.glbimg.com/SSAPhiaAy_zLTOu3Tr3ZKu2H5vg=/0x0:1024x609/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2022/c/u/15eppqSmeTdHkoAKM0Uw/dall-e-2.jpg`;
       };
   };
   window.onload();
};

function mudar_imagem_tres_responsavel(){
   
   let element_imagem_de_usuario = document.getElementById(`imagem_de_usuario`);
   let element_nav_img_usuario = document.getElementById(`nav_img_usuario`);
   element_nav_img_usuario.src = `https://img.elo7.com.br/product/zoom/39D2E6F/tela-para-quadro-80x80-leao-selvagem-preto-e-branco-fineart.jpg`;
   let pegar_object;
   let user_logado;
   let validacion = false;
   user_logado = JSON.parse(localStorage.getItem(`User Logado`));
   pegar_object = JSON.parse(localStorage.getItem(`Responsáveis Cadastrados`));

   for(i = 0; validacion == false; i++){

       if(pegar_object[i].email == user_logado.email){

           pegar_object[i].imagem_de_perfil = `https://img.elo7.com.br/product/zoom/39D2E6F/tela-para-quadro-80x80-leao-selvagem-preto-e-branco-fineart.jpg`;

           localStorage.setItem(`Responsáveis Cadastrados`, JSON.stringify(pegar_object));
           validacion = true;

           element_imagem_de_usuario.src = `https://img.elo7.com.br/product/zoom/39D2E6F/tela-para-quadro-80x80-leao-selvagem-preto-e-branco-fineart.jpg`;
           element_nav_img_usuario.src = `https://img.elo7.com.br/product/zoom/39D2E6F/tela-para-quadro-80x80-leao-selvagem-preto-e-branco-fineart.jpg`;
       };
   };
   window.onload();
};

function mudar_imagem_quatro_responsavel(){
   
   let element_imagem_de_usuario = document.getElementById(`imagem_de_usuario`);
   let element_nav_img_usuario = document.getElementById(`nav_img_usuario`);
   element_nav_img_usuario.src = `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbscwqaPEk3_5Y90HOvwNvHtaaKceea9t2_A&s`;
   let pegar_object;
   let user_logado;
   let validacion = false;
   user_logado = JSON.parse(localStorage.getItem(`User Logado`));
   pegar_object = JSON.parse(localStorage.getItem(`Responsáveis Cadastrados`));

   for(i = 0; validacion == false; i++){

       if(pegar_object[i].email == user_logado.email){

           pegar_object[i].imagem_de_perfil = `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbscwqaPEk3_5Y90HOvwNvHtaaKceea9t2_A&s`;

           localStorage.setItem(`Responsáveis Cadastrados`, JSON.stringify(pegar_object));
           validacion = true;

           element_imagem_de_usuario.src = `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbscwqaPEk3_5Y90HOvwNvHtaaKceea9t2_A&s`;
           element_nav_img_usuario.src = `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbscwqaPEk3_5Y90HOvwNvHtaaKceea9t2_A&s`;
       };
   };
   window.onload();
};



// On load editar perfil de responsável

function on_load_imagem_de_perfil_edicao_responsavel(){

   let element_hdois_nome_de_usuario = document.getElementById(`hdois_nome_de_usuario`);
   let element_imagem_de_usuario = document.getElementById(`imagem_de_usuario`);
   let element_inpt_nome_de_usuario_editar_perfil = document.getElementById(`inpt_nome_de_usuario_editar_perfil`);
   let element_inpt_email_de_usuario_editar_perfil = document.getElementById(`inpt_email_de_usuario_editar_perfil`);
   let element_inpt_senha_de_usuario_editar_perfil = document.getElementById(`inpt_senha_de_usuario_editar_perfil`);
   let pegar_localStorage_responsavel = JSON.parse(localStorage.getItem(`Responsáveis Cadastrados`));
   let element_nova_descricao_de_perfil = document.getElementById(`nova_descricao_de_perfil`);
   let pegar_localStorage_user_logado = JSON.parse(localStorage.getItem(`User Logado`));
   let validacao = false;

   for(i = 0; validacao == false; i++){

       if(pegar_localStorage_responsavel[i].email == pegar_localStorage_user_logado.email){
           element_nova_descricao_de_perfil.value = pegar_localStorage_responsavel[i].descricao_de_perfil;
           element_hdois_nome_de_usuario.innerHTML = pegar_localStorage_responsavel[i].nome;
           element_imagem_de_usuario.src = pegar_localStorage_responsavel[i].imagem_de_perfil;
           element_inpt_email_de_usuario_editar_perfil.value = pegar_localStorage_responsavel[i].email;
           element_inpt_nome_de_usuario_editar_perfil.value = pegar_localStorage_responsavel[i].nome;
           element_inpt_senha_de_usuario_editar_perfil.value = pegar_localStorage_responsavel[i].senha;
           validacao = true;
       };
   };
};

//On load de página de perfil

function on_load_imagem_de_perfil_responsavel(){

   let element_inpt_nome_de_usuario_exibir_perfil = document.getElementById(`inpt_nome_de_usuario_exibir_perfil`);
   let element_inpt_email_de_usuario_exibir_perfil = document.getElementById(`inpt_email_de_usuario_exibir_perfil`);
   let element_hdois_nome_de_usuario = document.getElementById(`hdois_nome_de_usuario`);
   let element_imagem_de_usuario = document.getElementById(`imagem_de_usuario`);
   let element_nova_descricao_de_perfil = document.getElementById(`nova_descricao_de_perfil`);
   let pegar_localStorage_responsavel = JSON.parse(localStorage.getItem(`Responsáveis Cadastrados`));
   let pegar_localStorage_user_logado = JSON.parse(localStorage.getItem(`User Logado`));
   let validacao = false;
   for(i = 0; validacao == false;i++){

       if(pegar_localStorage_responsavel[i].email == pegar_localStorage_user_logado.email){

           element_nova_descricao_de_perfil.value = pegar_localStorage_responsavel[i].descricao_de_perfil;
           element_imagem_de_usuario.src = pegar_localStorage_responsavel[i].imagem_de_perfil;
           element_hdois_nome_de_usuario.innerHTML = pegar_localStorage_responsavel[i].nome;
           element_inpt_nome_de_usuario_exibir_perfil.value = pegar_localStorage_responsavel[i].nome;
           element_inpt_email_de_usuario_exibir_perfil.value = pegar_localStorage_responsavel[i].email;
           validacao = true;
       };
   };
};

function modificar_imagem_de_perfil_responsavel(){

   let element_nova_descricao_de_perfil = document.getElementById(`nova_descricao_de_perfil`);
   let element_opcao_de_imagens = document.getElementById(`opcao_de_imagens`);
   
   element_opcao_de_imagens.innerHTML = `
   
   
   <div class="opcao_de_imagens">
   
   <button onclick="mudar_imagem_um_responsavel()"><img src="🦆 icon _user account profile_.png" alt="imagem.png"></button>
   <button onclick="mudar_imagem_dois_responsavel()"><img src="https://s2-techtudo.glbimg.com/SSAPhiaAy_zLTOu3Tr3ZKu2H5vg=/0x0:1024x609/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2022/c/u/15eppqSmeTdHkoAKM0Uw/dall-e-2.jpg" alt="imagem.png"></button>
   <button onclick="mudar_imagem_tres_responsavel()"><img src="https://img.elo7.com.br/product/zoom/39D2E6F/tela-para-quadro-80x80-leao-selvagem-preto-e-branco-fineart.jpg" alt="imagem.png"></button>
   <button onclick="mudar_imagem_quatro_responsavel()"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbscwqaPEk3_5Y90HOvwNvHtaaKceea9t2_A&s" alt="imagem.png"></button>
   
   </div>
   `;
   
};

function editar_perfil_responsavel(){

   let element_inpt_nome_de_usuario_editar_perfil = document.getElementById(`inpt_nome_de_usuario_editar_perfil`);
   let element_inpt_email_de_usuario_editar_perfil = document.getElementById(`inpt_email_de_usuario_editar_perfil`);
   let element_inpt_senha_de_usuario_editar_perfil = document.getElementById(`inpt_senha_de_usuario_editar_perfil`);
   let element_hdois_nome_de_usuario = document.getElementById(`hdois_nome_de_usuario`);
   let obter_localStorage_responsaveis = JSON.parse(localStorage.getItem(`Responsáveis Cadastrados`));
   let obter_localStorage_user_logado = JSON.parse(localStorage.getItem(`User Logado`));
   let validacao = false;
   let pegar_posicao;

   for(i = 0; validacao == false; i++){

       if(obter_localStorage_responsaveis[i].email == obter_localStorage_user_logado.email){

           pegar_posicao = i;
           
           validacao = true;
       };
   };
   
   obter_localStorage_responsaveis[pegar_posicao].nome = element_inpt_nome_de_usuario_editar_perfil.value;
   element_hdois_nome_de_usuario.innerHTML = obter_localStorage_responsaveis[pegar_posicao].nome;
   obter_localStorage_responsaveis[pegar_posicao].email = element_inpt_email_de_usuario_editar_perfil.value;
   obter_localStorage_responsaveis[pegar_posicao].senha = element_inpt_senha_de_usuario_editar_perfil.value;
   localStorage.setItem(`User Logado`, JSON.stringify(obter_localStorage_responsaveis[pegar_posicao]));
   localStorage.setItem(`Responsáveis Cadastrados`, JSON.stringify(obter_localStorage_responsaveis));
   window.onload();
};

function mudar_link_whatsapp_responsavel(){
  let obter_numero;
  let enchaminhamento_de_pagina;
  let obter_localStorage = JSON.parse(localStorage.getItem(`Responsáveis Cadastrados`));
  let obter_localStorage_user_logado = JSON.parse(localStorage.getItem(`User Logado`));
  let validacion = false;
  
  for(i = 0; validacion == false; i++){
      
      if(obter_localStorage[i].email == obter_localStorage_user_logado.email){
       obter_numero = prompt(`Digite o seu número de whatsapp, exemplo:\n\n Número de whatsapp: +55 048 - 12345-6789\n\nManeira a se escrever: 48123456789`);
       enchaminhamento_de_pagina = `https://wa.me/${obter_numero}`;

       obter_localStorage[i].whatsapp_url = enchaminhamento_de_pagina;
       localStorage.setItem(`Responsáveis Cadastrados`, JSON.stringify(obter_localStorage));

       validacion = true;
   };
  };
};



function ir_ao_whatsapp_responsavel(){
   let pegar_localStorage_baba = JSON.parse(localStorage.getItem(`Responsáveis Cadastrados`));
   let pegar_localStorage_user_logado = JSON.parse(localStorage.getItem(`User Logado`));
   let validacao = false;
   for(i = 0; validacao == false; i++){

       if(pegar_localStorage_baba[i].email == pegar_localStorage_user_logado.email){

           window.location.href= pegar_localStorage_baba[i].whatsapp_url;
           validacao = true;
       };
   };
};

function mudar_link_facebook_responsavel(){
   let obter_numero;
   let obter_localStorage = JSON.parse(localStorage.getItem(`Responsáveis Cadastrados`));
   let obter_localStorage_user_logado = JSON.parse(localStorage.getItem(`User Logado`));
   let validacion = false;
   
   for(i = 0; validacion == false; i++){
       
       if(obter_localStorage[i].email == obter_localStorage_user_logado.email){
        obter_numero = prompt(`Digite o seu link de perfil do facebook`);

        obter_localStorage[i].facebook_url = enchaminhamento_de_pagina;
        localStorage.setItem(`Responsáveis Cadastrados`, JSON.stringify(obter_localStorage));

        validacion = true;
    };
   };
};


function ir_ao_facebook_responsavel(){
    let pegar_localStorage_baba = JSON.parse(localStorage.getItem(`Responsáveis Cadastrados`));
    let pegar_localStorage_user_logado = JSON.parse(localStorage.getItem(`User Logado`));
    let validacao = false;
    for(i = 0; validacao == false; i++){

        if(pegar_localStorage_baba[i].email == pegar_localStorage_user_logado.email){

            window.location.href= pegar_localStorage_baba[i].facebook_url;
            validacao = true;
        };
    };
};

function mudar_link_instagram_responsavel(){
   let obter_numero;
   let obter_localStorage = JSON.parse(localStorage.getItem(`Responsáveis Cadastrados`));
   let obter_localStorage_user_logado = JSON.parse(localStorage.getItem(`User Logado`));
   let validacion = false;
   
   for(i = 0; validacion == false; i++){
       
       if(obter_localStorage[i].email == obter_localStorage_user_logado.email){
        obter_numero = prompt(`Digite o seu link de perfil do instagram`);

        obter_localStorage[i].facebook_url = enchaminhamento_de_pagina;
        localStorage.setItem(`Responsáveis Cadastrados`, JSON.stringify(obter_localStorage));

        validacion = true;
    };
   };
};



function ir_ao_instagram_responsavel(){
    let pegar_localStorage_baba = JSON.parse(localStorage.getItem(`Responsáveis Cadastrados`));
    let pegar_localStorage_user_logado = JSON.parse(localStorage.getItem(`User Logado`));
    let validacao = false;
    for(i = 0; validacao == false; i++){

        if(pegar_localStorage_baba[i].email == pegar_localStorage_user_logado.email){

            window.location.href= pegar_localStorage_baba[i].instagram_url;
            validacao = true;
        };
    };
};