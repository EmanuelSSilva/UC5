document.getElementById('Login').addEventListener('click', () => {
    const email = document.getElementById('Email').value
    const senha = document.getElementById('Senha').value
    alert ("testetestetstet ", email, senha)
    window.api.cadastro({ email, senha })
    window.api.cadastro({ email, senha }).then((result) => {
        if(result){
            localStorage.setItem('usuario',result)
            window.location.href = 'Paginas/indexLogin.html'
        } 
    }) 

})     


