import {GETORDERBYTRANS} from './type'


export const orderByTrans = (receivedData)=> {



    return{
        type : GETORDERBYTRANS,
        payload : receivedData
        
    }
}

