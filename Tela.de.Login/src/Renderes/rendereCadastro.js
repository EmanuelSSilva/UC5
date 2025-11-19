document.getElementById("botaocadast").addEventListener('click', () => {
    const pessoa = {
        nome : document.getElementById('nomee').value,
        email: document.getElementById('emaill').value,
        senha: document.getElementById('senhaa').value,
        confirmasenha: document.getElementById('confirmarSenha').value
    }

    window.api.cadastro(pessoa)
    alert('Cadastro realizado!') 
    console.log('Dados do usuário:', pessoa) 
})     


