import React , {Component} from 'React';
import { withNavigationFocus, NavigationEvents } from 'react-navigation';
import {View,SafeAreaView, BackHandler, Alert} from 'react-native';

import {clearAllShit, timeRun} from '../../Src/Actions'
import { connect } from 'react-redux';
import Content from './Content/Content';
import Header from './Header/Header';
import Footer from './Footer/Footer'
import styles from './ListMenusStyle';







class ListMenus extends Component{

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
      }
    
    componentWillUnmount() {
        clearInterval(this.finishedTime)
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton)
    }
    
    handleBackButton = () => {
    if (this.props.isFocused) {
        Alert.alert(
        'Exit App',
        'Exiting the application?',
        [
            {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel'
            },
            {
            text: 'OK',
            onPress: () => this.exitApk()
            }
        ],
        {
            cancelable: false
        }
        );
        return true;
    }
    }

    exitApk(){
        BackHandler.exitApp()
    }

    timer(){
        this.finishedTime=setInterval(() => {
            this.props.timeRun()
        }, 1000);
    }
    stopTimer=()=>{
        clearInterval(this.finishedTime)
    }

    render(){
        return(

            
            
                <SafeAreaView style={styles.parentContainer}>
                    <NavigationEvents 
                    onDidFocus={() =>{
                        this.timer()
                    }}
                    />
                    <View style={styles.mainComponent}>
                        <Header     navigation={this.props.navigation} />
                        <Content    navigation={this.props.navigation} />
                        <Footer   stopTimer={this.stopTimer}  navigation={this.props.navigation} />
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
})(withNavigationFocus(ListMenus))
