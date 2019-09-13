import {MENUS,CATEGORIES} from './type'

//Action for Menus
export const getMenus = (receivedData)=> {
    return{
        type : MENUS,
        payload : receivedData
    }
}
//Action for Categories
export const getCategories = (receivedData)=> {
    return{
        type : CATEGORIES,
        payload : receivedData
    }
}
