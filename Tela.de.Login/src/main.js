import { app, BrowserWindow, nativeTheme, ipcMain, Menu, dialog, Notification } from 'electron';
import { fileURLToPath } from 'url'
import path from 'path'
import fs from 'fs'



let __filename = fileURLToPath(import.meta.url);
let __dirname = path.dirname(__filename);

let janela = null; // Variável para armazenar a janela

function criarJanela() {
  nativeTheme.themeSource = 'dark'
  janela = new BrowserWindow({
    title: 'Tela.de.Login',
    height: 1080,
    width: 1920,
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
    escreverArq()
    criarJanela()

})

const arquivo = path.join(__dirname,'arquivo.json')

let usuario = []

function escreverArq (usuario){
    try{
    fs.appendFileSync(arquivo, JSON.stringify(usuario, null, 2), 'utf-8')
  //fs.writeFileSync(arquivo, 'escrevendo no arquivo,'utf-8')  criando e esquevendo os danos em arquivo txt
    }catch(err){
        console.error(err)
    }
}

ipcMain.handle('cadastroLogin',(event, usuario1) => {
    usuario.push(usuario1)
    escreverArq(usuario)
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

