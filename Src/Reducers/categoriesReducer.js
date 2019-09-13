//Get Categories from db
import {CATEGORIES} from '../Actions/type'
export default (state=[] , action)=>{
    switch (action.type) {
        case CATEGORIES :
            return state=action.payload
        default:
            return state
    }
}