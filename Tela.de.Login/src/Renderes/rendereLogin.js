const btn = document.getElementById('Login')
if (btn) {
    btn.addEventListener('click', (e) => {
        e.preventDefault()
        const userLogin = {
            email: document.getElementById('Email').value,
            senha: document.getElementById('Senha').value,
        }

        // Chama o IPC apenas uma vez e trata a Promise
        window.api.login(userLogin)
            .then((result) => {
                if (result) {
                    console.log('-- recebendo dados', result)
                    localStorage.setItem('usuario', JSON.stringify(result))
                    window.location.href = '../Paginas/indexHome.html'
                } else {
                    alert('Usuário ou senha incorretos')
                }
            })
            .catch((err) => {
                console.error('Erro ao verificar login:', err)
                alert('Erro ao processar login. Veja console para detalhes.')
            })
    })
} else {
    console.warn("Elemento com id 'Login' não encontrado no DOM")
}