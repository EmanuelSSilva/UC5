import {contextBridge, ipcRenderer} from 'electron'

contextBridge.exposeInMainWorld('api', {
    cadastro: (login) => ipcRenderer.invoke('cadastroLogin', login) //envia os dados no mesmo canal 'cadastro', ou seja envia e recebe o retorno.

})