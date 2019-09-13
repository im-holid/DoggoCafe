//Dismiss Order

import {DISMISS_ORDER} from '../Actions/type'



export default (state=[] , action)=>{
    switch (action.type) {
        case DISMISS_ORDER:     //actually adding filter, value type plain array
            let x =0
            if(action.status == 0){
                return state
            }else{
            state.map((index)=>{
                index != action.id? x+=1 : null
            })
            
            if(x == state.length) {
                x=0;  return state=[...state,action.id]
            }else{x=0; return state}
            
        }
        default:
            return state

    }
}