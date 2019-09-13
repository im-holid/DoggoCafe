//Active Menu Sort and Styling
import {ACTIVE_MENU} from '../Actions/type'
export default (state=0 , action)=>{
    switch (action.type) {
        case ACTIVE_MENU :
            return state=action.payload
        default:
            return state
    }
}