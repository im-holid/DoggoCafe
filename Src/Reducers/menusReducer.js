
import {MENUS} from '../Actions/type'
export default (state=[] , action)=>{
    switch (action.type) {
        case MENUS :
            return state=action.payload
        default:
            return state

    }
}