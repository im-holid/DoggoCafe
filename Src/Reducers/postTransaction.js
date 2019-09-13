import {POST_TRANSACTION_TO_DB} from '../Actions/type'

const holder={
    id          :   0,
    subTotal    :   0,
    tax         :   0,
    total       :   0,
}

export default (state=holder , action)=>{
    switch (action.type) {
        
        case POST_TRANSACTION_TO_DB:
            return {...state, 
                id          :   action.id,
                subTotal    :   state.subTotal+action.subTotal,
                tax         :   state.tax+(action.subTotal*action.tax),
                total       :   state.total+((action.subTotal*action.tax)+action.subTotal)
            }

        default:
            return state

    }
}