import { app, BrowserWindow, nativeTheme, ipcMain, Menu, dialog, Notification } from 'electron';
import { fileURLToPath } from 'url';
import path from 'node:path';


let __filename = fileURLToPath(import.meta.url);
let __dirname = path.dirname(__filename);

let janela = null; // Variável para armazenar a janela

function criarJanela() {
  nativeTheme.themeSource = 'light'
  janela = new BrowserWindow({
    width: 800,
    height: 800,
    title: 'Tela.de.Login',
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false,
      devTools: true,
      preload: path.join(__dirname, 'preload.js'),
      sandbox: false
    }
  })

 janela.loadFile(path.join(__dirname, '../indexLogin.html'))
 janela.removeMenu()


}

app.whenReady().then(() => {
    new Notification({
        title: 'Electron',
        body: 'Electron incializando...',
        silent: false

    }).show()

    dialog.showMessageBox
    criarJanela()

})