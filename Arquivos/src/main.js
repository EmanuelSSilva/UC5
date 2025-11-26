import {app, BrowserWindow, dialog, ipcMain, nativeTheme} from 'electron'
import path from 'path'
import { fileURLToPath  } from 'url'
import fs from 'fs'
import { title } from 'process'


const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

let janela = null
const criarJanela = () =>{
    nativeTheme.themeSource = 'dark'
    janela = new BrowserWindow({
    title: 'Aplicação Desk',
        height: 400,
        width: 400,
        webPreferences: {
          contextIsolation: true,
          nodeIntegration: false,
          devTools: true,
          preload: path.join(__dirname, 'preload.js'),
          sandbox: false

        }

 })
    janela.removeMenu()
    janela.loadFile(path.join(__dirname, 'index.html')
)}

app.whenReady().then(() => {
    criarJanela()
})

let arquivo = path.join(__dirname,'arquivo.txt')

function escreverArq (conteudo){
    try{
    fs.writeFileSync(arquivo, conteudo, 'utf-8')
    }catch(err){
        console.error(err)
    }
}

async function lerArq(){
    let resultado = await dialog.showOpenDialog({
        title: 'Abrir',
        defaultPath: 'Arquivo.txt',
        filters: [{name: 'texto', extensions: ['txt','doc']}],
        properties: ['openFile']
    })
    if(resultado.canceled){
        return
    }
    arquivo = resultado.filePaths[0]
    try{
        let conteudo = fs.readFileSync(arquivo, 'utf-8')
        return conteudo
    }catch (err) {
        console.error(err)
    }     
}

ipcMain.handle('salvar-arq', (event, texto) =>{
    escreverArq(texto)
    console.log('texto: ', texto)
    return arquivo

})

ipcMain.handle('abrir-arq', (event) =>{
    let conteudo = lerArq()
    return conteudo
})



   //const arquivo = path.join(__dirname,'arquivo.txt')
//    const arquivo = path.join(__dirname,'arquivo.json')

// let dados = []

// function escreverArq (){
//     try{
//         let pessoa = {nome:'Alex Saba', sexo: 'Masculino',}
//         dados.push(pessoa)
//     fs.appendFileSync(arquivo, JSON.stringify(dados, null, 2), 'utf-8')
//   //fs.writeFileSync(arquivo, 'escrevendo no arquivo,'utf-8')  criando e esquevendo os danos em arquivo txt
//     }catch(err){
//         console.error(err)
//     }
// }

// let dados2 = null
// function lerArq(){
//     try{
//         let conteudo = fs.readFileSync(arquivo, 'utf-8')
//         dados2 = JSON.parse(conteudo) // convertendo o json em arquivo e recebendo os dados do 1º array
//         console.log('Caminho :', JSON.parse(conteudo), '\n')
//         console.log('Conteudo', dados2)
//         //console.log('Caminho :', arquivo, '\n')
//         //console.log('Conteudo', conteudo)
//     }catch (err) {
//         console.error(err)
//     }     
    
// }
