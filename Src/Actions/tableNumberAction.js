import {TABLE_ORDER} from './type'


export const tableOrder = (receivedData)=> {
    return{
        type : TABLE_ORDER,
        payload : receivedData

    }
}

