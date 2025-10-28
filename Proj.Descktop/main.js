import {app, BrowserWindow} from 'electron';

const criarJanela = () => {
    const janela = new BrowserWindow({
        width: 800, 
        height: 600,
        title: "Minha Aplicação Electron",
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true,
            devTools: true,
            preload: '/preload.js'
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

