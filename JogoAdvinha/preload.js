import { contextBridge } from 'electron'

contextBridge.exposeInMainWord ('api', {
    nome: 'Aplicação Desktop',
    versaonode: () => { return `NODE ${process.version.node}`}, //mostra a versao do node
    versaoElectron: () => { return `${process.version.electron}`}  //mostra a versao do electron "Sem chaves posi quando so tem uma linha nao é obg
})