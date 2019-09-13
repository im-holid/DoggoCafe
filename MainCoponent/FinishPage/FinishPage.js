import React , {Component} from 'React';
import {View,SafeAreaView, BackHandler} from 'react-native';

import {clearAllShit, timeRun} from '../../Src/Actions'
import { connect } from 'react-redux';
import Content from './Content/Content';
import styles from './FinishPageStyle';
import Axios from 'axios';







class FinishPage extends Component{

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButton)
        Axios.patch(`${this.props.ipAdress}transaction`,{
            "tableNumber": this.props.tableNumber.number
        }).then((res)=>{
            this.props.getTransactionId(res.data.id)
        })
      }
    
    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton)
    }
    
    handleBackButton = () => {
    if (this.props.isFocused) {
        this.props.navigation.navigate('Home')
    }
    }


    render(){
        return(

            
            
                <SafeAreaView style={styles.parentContainer}>
                    <View style={styles.mainComponent}>
                        <Content    navigation={this.props.navigation} />
                    </View>
                </SafeAreaView>
            

        )
    }
}

store = (state) => {
    return {
        times : state.times
    }
}


export default connect(store, {
    clearAllShit, timeRun
})(FinishPage)
