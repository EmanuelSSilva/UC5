const realParaDolar = () => {
    const valorEmReais = Number(document.getElementById("recbvalor").value)
    const valorTaxaConversao = 5.424
    const valorEmDolar = valorEmReais / valorTaxaConversao
    // document.getElementById("resultado").innerText = `Valor em Dólar: $ ${valorEmDolar.toFixed(2)}`
    return valorEmDolar.toFixed(2)
    }

    const realParaEuro = () => {
    const valorEmReais = Number(document.getElementById("recbvalor").value)
    const valorTaxaConversao = 6.353
    const valorEmEuro = valorEmReais / valorTaxaConversao
    // document.getElementById("resultado").innerHTML = `Valor em Euro: $ ${valorEmEuro.toFixed(2)}`
    return valorEmEuro.toFixed(2)
    }

    const realParaPeso = () => {
    const valorEmReais = Number(document.getElementById("recbvalor").value)
    const valorTaxaConversao = 0.0042
    const valorEmPeso = valorEmReais / valorTaxaConversao
    // document.getElementById("resultado").innerHTML = `Valor em Euro: $ ${valorEmPeso.toFixed(2)}`
    return valorEmPeso.toFixed(2)
    }

    const realParaLibra = () => {
    const valorEmReais = Number(document.getElementById("recbvalor").value)
    const valorTaxaConversao = 7.326
    const valorEmLibra = valorEmReais / valorTaxaConversao
    // document.getElementById("resultado").innerHTML = `Valor em Euro: $ ${valorEmLibra.toFixed(2)}`
    return valorEmLibra.toFixed(2)
    }

    const realParaFranco = () => {
    const valorEmReais = Number(document.getElementById("recbvalor").value)
    const valorTaxaConversao = 6.753
    const valorEmFranco = valorEmReais / valorTaxaConversao
    // document.getElementById("resultado").innerHTML = `Valor em Euro: $ ${valorEmFranco.toFixed(2)}`
    return valorEmFranco.toFixed(2)
    }

        