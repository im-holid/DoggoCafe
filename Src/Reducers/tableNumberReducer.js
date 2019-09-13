//Table Number Storage

import {TABLE_ORDER} from '../Actions/type'

const tableNumber = {
     number :   0
    
}

export default (state=tableNumber , action)=>{
    switch (action.type) {
        case TABLE_ORDER:
            return {
                ...state,
                number : action.payload
            }
        
        default:
            return state

    }
}