function calculaamedia() {
    
    
    const nota1 = parseFloat(document.getElementById("nota1").value);
    const nota2 = parseFloat(document.getElementById("nota2").value);
    const nota3 = parseFloat(document.getElementById("nota3").value);
    const nota4 = parseFloat(document.getElementById("nota4").value);   
    const medias = (nota1 + nota2 + nota3 + nota4) / 4; 
    document.getElementById("resultadoMedia").innerHTML = (medias);   

    if (medias >= 7) {
        alert ("Aprovado com média: " + medias)
    } else {
        alert ("Reprovado com média: " + medias)
    }  
    
}