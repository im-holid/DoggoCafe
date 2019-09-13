import {SCROLL_FOOTER,END_SCROLL} from './type'

//Action for footer checker
export const scrollFooter = ()=> {
    return{
        type : SCROLL_FOOTER
    }
}

export const endScrollFooter = ()=> {
    return{
        type : END_SCROLL
    }
}

