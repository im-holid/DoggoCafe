//Active Menu Sort and Styling
import {MENU_LIST_LOAD} from '../Actions/type'
initial = {
menu : false,
viewBill : false
}
export default (state=initial , action)=>{
    switch (action.type) {
        case MENU_LIST_LOAD :
            return {
                ...state,
                menu : true
            }
        default:
            return state
    }
}