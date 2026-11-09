
// Função para entrar
function logar() {
    var usuario = document.getElementById('inputUsuario').value
    var senha = document.getElementById('inputSenha').value

    if(usuario == '' || senha == '') {
        document.getElementById('erro').innerHTML = "Preencha o usuário e a senha!"
        return
    }

    fetch('http://localhost:3000/pessoas')
    .then(resposta => resposta.json())
    .then(dados => {
      let pessoaEncontrada = dados.find(pessoa => pessoa.nome == usuario && pessoa.senha == senha)
        if(pessoaEncontrada) {
            alert("Login realizado com sucesso! Bem-vindo, " + usuario + "!")
            window.location.href = "get.html"
        } else {
            document.getElementById('erro').innerHTML = "Usuário ou senha incorretos!"
        }
    })
}


// Função para entrar como administrador
function entrarAdmin() {
    var usuario = document.getElementById('usuarioAdmin').value
    var senha = document.getElementById('senhaAdmin').value

    if(usuario == "Yasmin" && senha == "1234") {
        sessionStorage.setItem('administrador', 'sim')
        window.location.href = "put.html"
    } else {
        document.getElementById('erroAdmin').innerHTML = "Usuário/Senha incorretos!"
    }
}
