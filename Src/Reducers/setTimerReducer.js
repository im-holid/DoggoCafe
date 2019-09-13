//Timer Storage

import {TIMERRUN,TIMEON,TIMEOFF, CLEAR_ALL} from '../Actions/type'

const times = {
    isRun : false,
    time :0
}

export default (state=times , action)=>{
    switch (action.type) {
        case TIMERRUN :
            return {
                ...state,
                time : state.time+1
            }
        case TIMEON : 
            return{
                ...state,
                isRun : true
            }
        
        case TIMEOFF : 
            return{
                ...state,
                isRun : false
            }
        

        case CLEAR_ALL : 
            return times
        



        default:
            return state
    }
}