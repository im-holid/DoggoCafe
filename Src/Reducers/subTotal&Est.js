import {GET_TRANS_ID, GET_SUB_TOTAL_QTY} from '../Actions/type'

const holder={
    id          :   0,
    subTotal    :   0,
    totalQty    :   0,
    tax         :   0
}

export default (state=holder , action)=>{
    switch (action.type) {
        case GET_TRANS_ID:
            return {
                ...state,
                id          :   action.id,
                tax         :   action.tax
            }
        
        case GET_SUB_TOTAL_QTY:
            return {...state, 
                subTotal    : state.subTotal+action.subTotal,
                totalQty    : state.totalQty+action.qty
            }

        default:
            return state

    }
}