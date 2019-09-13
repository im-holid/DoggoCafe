import {combineReducers} from 'redux';

import ipAdress from './LOCALIP'

import setTimerReducer from './setTimerReducer';
import tableNumberReducer from './tableNumberReducer';

import categoriesReducer from './categoriesReducer';
import menusReducer from './menusReducer'
import activeMenuReducer from './activeMenuReducer';
import footerCheckReducer from './footerCheckReducer';

import orderReducer from './orderReducer'

import forPostTransactionReducer from './subTotal&Est';
import postTransaction from './postTransaction';
import orderFromDBReducer from './orderFromDBReducer';
import orderToDismiss from './orderToDismiss';



import transactionIdReducer from './transactionIdReducer';
import updateOrderReducer from './updateOrderReducer';
import updateOrderStatusReducer from './updateOrderStatusReducer';





export default combineReducers({
    ipAdress            :ipAdress,
    //Times spent and Table's Number
    times               :setTimerReducer,
    tableNumber         :tableNumberReducer,

    //get Database menus & Categories
    categories          :categoriesReducer,
    menus               :menusReducer,
    activeMenu          :activeMenuReducer,
    footerCheck         :footerCheckReducer,
    
    // order Redux
    order : orderReducer,
    
    //getting Transaction data from Database,
    transactionToPost   :forPostTransactionReducer,

    //Post to Database
    postTransaction     :postTransaction,
    
    // Order By Trans Id from DB
    orderByTransaction : orderFromDBReducer,

    // Order Dismiss, (Basically adding filter)
    orderToDismiss  :   orderToDismiss,






    

    // transaction Database
    transactionId : transactionIdReducer,
    

    //holder for update status incase you forget
    updateOrderHolder : updateOrderReducer,
    storeOrderHolder :  updateOrderStatusReducer
})