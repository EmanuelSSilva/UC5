import {contextBridge, ipcRenderer} from 'electron'

contextBridge.exposeInMainWorld('api', {
    cadastro: (usuario) => ipcRenderer.invoke('cadastroLogin', usuario), //envia os dados no mesmo canal 'cadastro', ou seja envia e recebe o retorno.
    login : (pessoa) => ipcRenderer.invoke('vericarlogin', pessoa)
})