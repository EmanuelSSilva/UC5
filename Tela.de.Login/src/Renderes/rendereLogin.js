document.getElementById("Login").addEventListener('click', () =>{
    alert("1")
    const userLogin = {
        email: document.getElementById('Email').value, 
        senha: document.getElementById('Senha').value, 
    }
    window.api.login(userLogin)
    alert("2")
    window.api.login(userLogin).then((result) => {
        if(result){
            alert ("--",result)
            localStorage.setItem('usuario',result)
            window.location.href = '../Paginas/indexHome.html'
        } 
    }) 
})