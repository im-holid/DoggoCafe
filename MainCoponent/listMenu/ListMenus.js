import React , {Component} from 'React';
import { withNavigationFocus, NavigationEvents } from 'react-navigation';
import {View, SafeAreaView, BackHandler, Alert, Text} from 'react-native';

import {clearAllShit, timeRun} from '../../Src/Actions'
import { connect } from 'react-redux';
import Content from './Content/Content';
import Header from './Header/Header';
import Footer from './Footer/Footer'
import styles from './ListMenusStyle';







class ListMenus extends Component{
    constructor(props){
        super(props)
        this.state={
            loadTrigger:0
        }
    }
    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
        this.loader=setInterval(() => {
            this.setState({loadTrigger:this.state.loadTrigger+1})
            this.state.loadTrigger==4?this.setState({loadTrigger:0}):null
            this.props.loadingState.menu?clearInterval(this.loader):null
        }, 500)
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
                    <View style={{position:'absolute', bottom:'50%',left:0,right:0,
                    opacity:this.props.loadingState.menu? 0.0 : 1,
                    flexDirection : 'row' ,justifyContent:'center'
                    }}>
                        <View style={{marginHorizontal:10,
                            width:this.state.loadTrigger==0?12:8,
                            height:this.state.loadTrigger==0?12:8,
                            borderRadius:50,backgroundColor:'#322110'}} />
                        <View style={{marginHorizontal:10,
                            width:this.state.loadTrigger==1?12:8,
                            height:this.state.loadTrigger==1?12:8,
                            borderRadius:50,backgroundColor:'#322110'}} />
                        <View style={{marginHorizontal:10,
                            width:this.state.loadTrigger==2?12:8,
                            height:this.state.loadTrigger==2?12:8,
                            borderRadius:50,backgroundColor:'#322110'}} />
                        <View style={{marginHorizontal:10,
                            width:this.state.loadTrigger==3?12:8,
                            height:this.state.loadTrigger==3?12:8,
                            borderRadius:50,backgroundColor:'#322110'}} />
                    </View>
                    <View style={[styles.mainComponent,
                        {opacity:this.props.loadingState.menu? 1.0: 0.3}
                        ]}>
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
        times           :   state.times,
        loadingState    :   state.loadingState
    }
}


export default connect(store, {
    clearAllShit, timeRun
})(withNavigationFocus(ListMenus))
