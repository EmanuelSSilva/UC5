function pegarNome() {
            const nomeInput = document.getElementById('nome')
            const nome = nomeInput.value
            alert('Olá, ' + nome + '! Bem-vindo à minha primeira aplicação Electron.')
            document.getElementById('nome').value = ''
            document.getElementById('texto').innerHTML = 'Olá, ' + nome + '! Bem-vindo à minha primeira aplicação Electron.'

        } 
        function VerificarNumero() {
             const numero = Number(document.getElementById('numero').value)
            if (isNaN(numero)) {
                alert('Por favor, digite um número válido.')
            } else if (numero >=0) {
                alert('O número ' + numero + ' é positivo.')
            } else {
                alert('O número ' + numero + ' é negativo.')
            }
        }

        function seEimparouPar() {
            const numero = parseInt(document.getElementById('numeroParImpar').value)  
            if (numero % 2 === 0) {
                alert('O número ' + numero + ' é par.')
            } else {
                alert('O número ' + numero + ' é ímpar.')
            }

        }
        function calcularmedia() {
            const num1 = parseFloat(document.getElementById('num1').value) * 0.40
            const num2 = parseFloat(document.getElementById('num2').value) * 0.60
            if (isNaN(num1) || isNaN(num2)) {
            }
            const media = (num1 + num2) / 2
            alert('A média entre ' + num1 + ' e ' + num2 + ' é ' + media + '.')
        }
        function celsiusToFahrenheit(celsius) {
            return (celsius * 9/5) + 32
        }
        function celsiusToKelvin(celsius) {
            return celsius + 273.15
        }