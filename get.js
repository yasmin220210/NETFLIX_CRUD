fetch('http://localhost:3000/pessoas')
    .then(resposta => resposta.json())
    .then(dados => {
        //Selecionar a tabela tbody
        var tabelaCorpo = document.getElementById('tabela-corpo')

        //Para cada objeto do JSON, cria uma linha da tabela
        dados.forEach(objeto => {
            var tr = document.createElement('tr')
            var tdId = document.createElement('td')
            var tdNome = document.createElement('td')
            var tdIdade = document.createElement('td')
            var tdCPF = document.createElement('td')

            //Preenche as celula da linha com as informações
            tdId.innerText = objeto.id
            tdNome.innerText = objeto.nome
            tdIdade.innerText = objeto.idade
            tdCPF.innerText = objeto.cpf

            tr.appendChild(tdId)
            tr.appendChild(tdNome)
            tr.appendChild(tdIdade)
            tr.appendChild(tdCPF)
            tabelaCorpo.appendChild(tr)
        })
    })