import {ADDORDER, REMOVEORDER, CLEARORDER, CLEAR_CURRENT_ORDER} from './type'


export const addOrder = (receivedData)=> {



    return{
        type : ADDORDER,
        payload : {...receivedData,qty:1}
    }
}
export const removeOrder = (receivedData)=> {
    return{
        type : REMOVEORDER,
        payload : receivedData
    }
}

export const clearOrder =()=>{
    return {
        type:CLEARORDER
    }
}
export const clearCurrentOrder =(id)=>{
    return {
        type    :   CLEAR_CURRENT_ORDER,
        payload :   id
    }
}
