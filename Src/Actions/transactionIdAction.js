import Axios from 'axios'

import {POSTIDTRANSACTION} from '../Actions/type'


export const postIdTransaction = (receivedData)=> {
        
    return{
        type : POSTIDTRANSACTION,
        payload : receivedData
    }
}
