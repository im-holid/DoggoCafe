import {STOREUPDATEORDERSTATUS} from '../Actions/type'

const transaction=[]

export default (state=transaction , action)=>{
    switch (action.type) {
        case STOREUPDATEORDERSTATUS:
            state=[...state,action.payload]
            return state
            
            
        default:
            return state

    }
}