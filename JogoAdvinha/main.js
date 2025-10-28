import {app, BrowserWindow, nativeTheme} from 'electron'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

// Constantes para resolver o caminho do diretório atual
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
//      
const criarJanela = () => {
    nativeTheme.themeSource = 'Dark'  //define o tema claro
    const janela = new BrowserWindow({
        width: 800, 
        height: 600,
        title: "Minha Aplicação Electron",
        webPreferences: {
            nodeIntegration: false,
            devTools: true,
            contextIsolation: true,
            preload: path.join(__dirname, 'preload.js'),
            sandbox: false

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
