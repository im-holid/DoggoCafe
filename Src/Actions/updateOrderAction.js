import Axios from 'axios'

import {UPDATEORDERSTATUS} from '../Actions/type'


export const updateOrderStatus = (receivedData)=> {
    
    
    return{
        type : UPDATEORDERSTATUS,
        payload : {id:receivedData,status:0}
    }
    
    
    
}
