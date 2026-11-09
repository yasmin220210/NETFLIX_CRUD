
// Função para buscar os dados - GET
function buscarDados() {
    var cpf = document.getElementById('identificadorCPF').value

    fetch('http://localhost:3000/pessoas', {
        method: 'GET'
    })
    .then(resposta => resposta.json())
    .then(dados => {
        let pessoaEncontrada = dados.find(pessoa => pessoa.cpf == cpf)

        if(pessoaEncontrada) {
            document.getElementById('nomeAtualizar').value = pessoaEncontrada.nome
            document.getElementById('idadeAtualizar').value = pessoaEncontrada.idade
            document.getElementById('identificadorCPF').value = pessoaEncontrada.cpf
            document.getElementById('identificador').value = pessoaEncontrada.id
        } else {
            alert("Pessoa não encontrada")
        }
    })
}


// Função para atualizar os dados - PUT
function atualizarDados() {
    var id = document.getElementById('identificador').value
    var cpf = document.getElementById('identificadorCPF').value
    var nome = document.getElementById('nomeAtualizar').value
    var idade = document.getElementById('idadeAtualizar').value

    fetch('http://localhost:3000/pessoas/' + id, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({nome: nome, idade: idade, cpf: cpf})
    })
    .then(resposta => resposta.json())
    .then(dados => {
        alert("Dados atualizados com sucesso!")
    })
}


// Função para deletar os dados - DELETE
function deletarDados() {
    var cpf = document.getElementById('identificadorCPFExcluir').value

    fetch('http://localhost:3000/pessoas', {
        method: 'GET'
    })
    .then(resposta => resposta.json())
    .then(dados => {
        let pessoaEncontrada = dados.find(pessoa => pessoa.cpf == cpf)

        if(pessoaEncontrada) {
            fetch('http://localhost:3000/pessoas/' + pessoaEncontrada.id, {
                method: 'DELETE'
            })
            .then(resposta => {
                alert("Pessoa deletada com sucesso!")
            })
        } else {
            alert("Pessoa não encontrada")
        }
    })
}


// Função para listar os usuários cadastrados - GET
function listarUsuarios() {
    fetch('http://localhost:3000/pessoas', {
        method: 'GET'
    })
    .then(resposta => resposta.json())
    .then(dados => {
        document.getElementById('listaUsuarios').innerHTML = ''

        dados.forEach(pessoa => {
            document.getElementById('listaUsuarios').innerHTML +=
                '<tr>' +
                '<td>' + pessoa.id + '</td>' +
                '<td>' + pessoa.cpf + '</td>' +
                '<td>' + pessoa.nome + '</td>' +
                '<td>' + pessoa.sobrenome + '</td>' +
                '<td>' + pessoa.idade + '</td>' +
                '<td>' + pessoa.email + '</td>' +
                '<td>' + pessoa.telefone + '</td>' +
                '</tr>'
        })
    })
}


// Função para sair do administrador
function sairAdmin() {
    sessionStorage.removeItem('administrador')
    window.location.href = 'login.html'
}
