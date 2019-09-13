import React , {Component} from 'React';
import {View,SafeAreaView, BackHandler} from 'react-native';
import { connect } from 'react-redux';
import {orderByTrans, timeRun} from '../../Src/Actions'
import Axios from 'axios';
import Content from './Content/Content';
import Footer from './Footer/Footer'
import styles from './ViewBillStyle';
import { NavigationEvents } from 'react-navigation';





class ViewBill extends Component{
    constructor(props){
        super(props)
    }

    getOrderItemsByTransId(){
        this.getOrderbyTransId=setInterval(() => {
            Axios.get(`${this.props.ipAdress}orderByTransaction/${this.props.transaction.id}`).then((res)=>{
                this.props.orderByTrans(res.data)
                
            })
        }, 1000);
    }

    timer=()=>{
        this.runTimer=setInterval(() => {
            this.props.timeRun()
        }, 1000);
    }
    stopTimer=()=>{
        clearInterval(this.runTimer)
        clearInterval(this.getOrderbyTransId)
    }
    componentWillUnmount() {
        clearInterval(this.runTimer)
        clearInterval(this.getOrderbyTransId)
    }
    
    render(){
        
        return(

            
            
                <SafeAreaView style={styles.parentContainer}>
                    <NavigationEvents
                    onDidFocus={() =>{
                        this.timer()
                        this.getOrderItemsByTransId()
                    }}
                    />
                    <View style={styles.mainComponent}>
                        <Content  stopTimer={this.stopTimer}  navigation={this.props.navigation} />
                        <Footer   stopTimer={this.stopTimer}  navigation={this.props.navigation} />
                    </View>
                </SafeAreaView>
            

        )
    }
}

store = (state) => {
    return {
        ipAdress            :   state.ipAdress,
        transaction         :   state.transactionToPost,
        times               :   state.times,
        
    }
}


export default connect(store, {
    timeRun, orderByTrans
})(ViewBill);
