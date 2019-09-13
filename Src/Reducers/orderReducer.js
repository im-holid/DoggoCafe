import {ADDORDER, REMOVEORDER, CLEARORDER, CLEAR_CURRENT_ORDER} from '../Actions/type'


export default (state=[] , action)=>{
    switch (action.type) {
        case ADDORDER :
            if (state.length==0) {
                return [...state,action.payload]
            }else {
                for(let a =0; a<state.length;a++){
                    if(state[a].id==action.payload.id){
                        state[a] = {...state[a],qty: state[a].qty+1}
                        return state
                    }
                }
                
                return [...state,action.payload]
            }
            
        case REMOVEORDER :
            for(let i = 0;i<state.length;i++){
                if(state[i].id==action.payload){
                    
                    if(state[i].qty>1){
                        state[i]= {...state[i],qty:state[i].qty-1}
                        return state
                    }else{
                        return state.filter(array=>array.id!=action.payload)
                    }
                }
            }
            return state
        case CLEARORDER : 
                state = []
            return state
        case CLEAR_CURRENT_ORDER    :
                return state.filter(arr=>arr.id!=action.payload)            
        default:
            return state
    }
} 