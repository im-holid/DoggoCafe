import Axios from 'axios'

import {STOREUPDATEORDERSTATUS} from '../Actions/type'


export const storeOrderStatus = (receivedData)=> {
    
    
    return{
        type : STOREUPDATEORDERSTATUS,
        payload : receivedData
    }
    
    
    
}
