import {SCROLL_FOOTER, END_SCROLL} from '../Actions/type'

export default (state=true , action)=>{
    switch (action.type) {
        case SCROLL_FOOTER :
            return state=false

        case END_SCROLL :
                return state=true
        default:
            return state
    }
}