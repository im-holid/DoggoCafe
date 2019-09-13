import {GETORDERBYTRANS} from '../Actions/type'


export default (state=[] , action)=>{
    switch (action.type) {
        case GETORDERBYTRANS:
            return action.payload
        
        default:
            return state

    }
}