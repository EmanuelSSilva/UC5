const btn = document.getElementById('botaocadast')
if (btn) {
    btn.addEventListener('click', (e) => {
        e.preventDefault()
        const pessoa = {
            nome: document.getElementById('nomee').value,
            email: document.getElementById('emaill').value,
            senha: document.getElementById('senhaa').value,
            confirmasenha: document.getElementById('confirmarSenha').value
        }

        // Chamada ao main via preload; redireciona ao login quando concluído
        window.api.cadastro(pessoa)
            .then(() => {
                alert('Cadastro realizado! Você será redirecionado para o login.')
                console.log('Dados do usuário:', pessoa)
                window.location.href = 'indexLogin.html'
            })
            .catch((err) => {
                console.error('Erro no cadastro:', err)
                alert('Erro ao cadastrar. Veja console para detalhes.')
            })
    })
} else {
    console.warn("Botão de cadastro ('botaocadast') não encontrado no DOM")
}


