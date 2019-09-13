import {DISMISS_ORDER} from './type'

//Action for Active Menu
export const dismissOrderFilter = (id,status)=> {
    return{
        type    : DISMISS_ORDER,
        id      : id,
        status  : status
    }
}

