import {GET_TRANS_ID,GET_SUB_TOTAL_QTY,POST_TRANSACTION_TO_DB} from './type'


export const getTransactionId = (receivedData,tax)=> {
    return{
        type    :   GET_TRANS_ID,
        id      :   receivedData,
        tax     :   tax
    }
}
export const getSubTotalAndQty = (subTotal,qty)=> {
    return{
        type        : GET_SUB_TOTAL_QTY,
        subTotal    : subTotal,
        qty         : qty
    }
}

export const postItemsTransaction = (subTotal,tax,id)=>{
    return{
        type        :   POST_TRANSACTION_TO_DB,
        id          :   id,
        subTotal    :   subTotal,
        tax         :   tax
    }
}


