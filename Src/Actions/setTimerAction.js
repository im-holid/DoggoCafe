import {TIMERRUN,TIMEON,TIMEOFF} from './type'


export const timeRun = ()=> {
    return{
        type : TIMERRUN
    }
}

export const timeTrue =()=>{
    return {
        type : TIMEON
    }
}

export const timeFalse =()=>{
    return {
        type : TIMEOFF
    }
}