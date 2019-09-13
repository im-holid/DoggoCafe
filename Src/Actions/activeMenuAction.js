import {ACTIVE_MENU} from './type'

//Action for Active Menu
export const getActiveMenu = (receivedData)=> {
    return{
        type : ACTIVE_MENU,
        payload : receivedData
    }
}

