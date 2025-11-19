import { app, BrowserWindow, nativeTheme, ipcMain, Menu, dialog, Notification } from 'electron';
import { fileURLToPath } from 'url';
import path from 'node:path';


let __filename = fileURLToPath(import.meta.url);
let __dirname = path.dirname(__filename);

let janela = null; // Variável para armazenar a janela

function criarJanela() {
  nativeTheme.themeSource = 'light'
  janela = new BrowserWindow({
    width: 1920,
    height: 1080,
    title: 'Tela.de.Login',
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false,
      devTools: true,
      preload: path.join(__dirname, 'preloadLogin.js'),
      sandbox: false
    }
  })

 janela.loadFile(path.join(__dirname, 'Paginas/indexLogin.html'))
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

let usuario = []

ipcMain.handle('cadastroLogin',(event, usuario1) => {
    usuario.push(usuario1)
    console.log (`dessa vez foi ${usuario1.nome}`)
    return usuario1
  })

ipcMain.handle('vericarlogin', (event, pessoa) =>{
  console.log(`Teste do main 1 ${pessoa.email}`)
  const encontrado = usuario.find(user => user.email === pessoa.email && user.senha === pessoa.senha)
  if (encontrado) {
    console.log(`Teste do main 2 ${pessoa.senha}`)
    return encontrado
  }
  return null
})