import {POSTIDTRANSACTION} from '../Actions/type'

const transaction={}

export default (state=transaction , action)=>{
    switch (action.type) {
        case POSTIDTRANSACTION : 
        // console.log(state)
            return state = {...action.payload}
            

            

        default:
            return state

    }
}