document.getElementById('Login').addEventListener('click', () => {
    const email = document.getElementById('Email').value
    const senha = document.getElementById('Senha').value
    console.log(`Email: ${email}, Senha: ${senha}`)
})     
ipcRenderer.send('cadastro', { email, senha })   