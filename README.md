# UC5

criando o proijeto do zero 
npm init -y

altera o package
no scrip adciona start: electron main.js
troca o nome para main e o endereço
adiciona o type: module


crie os aquivos 
preload.js
render.js
index.js

agora intala o electron
npm i electron@latest

no main

faz as importaçoes
import {app, BrowserWindow} from 'electron'

cria a funçaõ 

const criarJanela = () => {
    const janela = new BrowserWindow({
        width: 800, 
        height: 600,
        title: "Minha Aplicação Electron",
        webPreferences: {
            nodeIntegration: false,
            devTools: true,
            preload:'/preload.js'
        }
    })
    
    janela.loadFile('index.html')
    janela.removeMenu()
    janela.webContents.openDevTools()
}

app.whenReady().then(() => {
    criarJanela()
    console.log("Aplicação iniciada com sucesso!")
})
.catch((erro) => {
    console.error("Erro ao iniciar a aplicação:", erro)
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});



chamar o render dentro do index
<script src="renderer.js"></script>


dentro do renderer

fazer um console
console.log(`${process.plataform}`) mostra o sistema operacional
console.log(`${window.api.versaoElectron}`)  mostra a versao do electron
console.log(`${process.version.node}`)  mostra a versao do node


o preload 
importar o objeto

import {contextBridge} from 'electron'

contextBridge.exposeInMainWord('api, {
    nome: 'Aplicação Desktop',
    versaonode: () => {console.log(`NODE ${process.version.node}`)},
    versaoElectron: () => console.log(`${process.version.electron}`)  mostra a versao do electron "Sem chaves posi quando so tem uma linha nao é obg

})