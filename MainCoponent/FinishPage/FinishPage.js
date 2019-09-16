import React , {Component} from 'React';
import {View, SafeAreaView, Text, Image, BackHandler, Alert} from 'react-native';
import { withNavigationFocus, NavigationEvents } from 'react-navigation';
import Barcode from 'react-native-barcode-builder'
import {clearAllShit, timeRun} from '../../Src/Actions'
import { connect } from 'react-redux';
import Content from './Content/Content';
import styles from './FinishPageStyle';
import Axios from 'axios';







class FinishPage extends Component{
    constructor(props){
        super(props)
        this.state=({
            trigger:0,
            a:0
        })
    }

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButton)
        Axios.patch(`${this.props.ipAdress}transaction/${this.props.postTransaction.id}`,{
            'finishedTime'  :   this.timeConverter(),
            'subTotal'      :   this.props.postTransaction.subTotal,
            'total'         :   this.props.postTransaction.total,
            'isPaid'        :   this.props.postTransaction.isPaid
        }).then((res)=>{
            // this.props.getTransactionId(res.data.id)

        }).catch((err)=>{

            
        })
        this.intervalAgain()
        this.getIsPaid=setInterval(() => {
            Axios.get(`${this.props.ipAdress}transaction/${this.props.postTransaction.id}`).then((res)=>{
                console.log(res.data.isPaid)
                
                res.data.isPaid? 
                (   this.lastInterval=setInterval(() => {
                    this.setState({trigger:this.state.trigger+0.005})
                    this.state.trigger==35? (clearInterval(this.lastInterval),BackHandler.exitApp()):null
                }, 10),
                    
                    clearInterval(this.timerAgain),
                    clearInterval(this.getIsPaid)
                ):null
            })    
        }, 1000);
        
      }
    
    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton)
        clearInterval(this.timerAgain)
    }
    
    // handleBackButton = () => {
    // if (this.props.isFocused) {
    //     this.props.navigation.navigate('Home')
    // }
    // }
    intervalAgain=()=>{
        this.timerAgain=setInterval(() => {
            this.props.timeRun()
            this.setState({a:1})
        }, 1000);
    }

    timeConverter=()=>{
        let b = '' 
        b = b+(Math.floor(this.props.times.time/60)<10?
        '0'+Math.floor(this.props.times.time/60):
        Math.floor(this.props.times.time/60) )
        b = b +':'
        b = b +
        ((this.props.times.time-(Math.floor(this.props.times.time/60)*60))<10?
        '0'+(this.props.times.time-(Math.floor(this.props.times.time/60)*60)):
        this.props.times.time-(Math.floor(this.props.times.time/60)*60))
        return b
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


    render(){

        return(

            
            
                <SafeAreaView style={styles.parentContainer}>
                    <NavigationEvents 
                    onDidFocus={() =>{
                        BackHandler.addEventListener('hardwareBackPress', this.handleBackButton)
                    }}
                    />
                    <View style={{flex:1}}>
                    <View
                    style={[{
                        position:'absolute',
                        top:0,
                        bottom:0,
                        left:0,
                        right:0,
                        backgroundColor:'#140d06',
                        justifyContent:'center',
                        alignItems:'center'
                    },{ opacity:this.state.trigger
                    }]}>
                        <View
                        style={{justifyContent:'center',
                            alignItems:'center'
                        }}
                        >
                            <Image 
                                source={require('../../assets/inu.png')} 
                                style={{width:200, height:200}}
                            />
                            <Text
                            style={{
                                fontSize : 25,
                                color : '#ad8925',
                                fontWeight : 'bold',
                                textShadowColor: 'rgba(61, 48, 13, 0.2)',
                                textShadowOffset: {width: -1, height: 1},
                                textShadowRadius: 10
                            }}
                            >
                                Doggo Cafe
                            </Text>
                        </View>
                        <View>
                            <Text style={[styles.textBottom,{fontSize:15}]} >
                                Thankyou for choosing us
                            </Text>
                        </View>
                        <View>
                            <Text style={[styles.textBottom,{fontSize:15}]} >
                                Time Spent
                            </Text>
                        </View>
                        <View>
                            <Text style={[styles.textBottom,{fontSize:20}]} >
                                {
                                    Math.floor(this.props.times.time/60)<10?
                                    '0'+Math.floor(this.props.times.time/60):
                                    Math.floor(this.props.times.time/60)
                                } 
                            :
                                {
                                    (this.props.times.time-(Math.floor(this.props.times.time/60)*60))<10?
                                    '0'+(this.props.times.time-(Math.floor(this.props.times.time/60)*60)):
                                    this.props.times.time-(Math.floor(this.props.times.time/60)*60) 
                                }
                            </Text>
                        </View>

                    </View>


                    <View style={[styles.mainComponent,{opacity:1-(this.state.trigger)}]}>
                        <View>
                            <Image 
                            source={require('../../assets/inu.png')} 
                            style={{width:100, height:100}}
                            />
                            <Text
                            style={{
                                fontSize : 25,
                                color : '#ad8925',
                                fontWeight : 'bold',
                                textShadowColor: 'rgba(61, 48, 13, 0.2)',
                                textShadowOffset: {width: -1, height: 1},
                                textShadowRadius: 10
                            }}
                            >
                                Doggo Cafe
                            </Text>
                        </View>
                        <Barcode 
                        value={`${this.props.postTransaction.id}${this.props.postTransaction.total}`} 
                        text={`${this.props.postTransaction.id}${this.props.postTransaction.total}`}
                        textColor='#ad8925'
                        lineColor={'#ad8925'}
                        background={'#322110'}
                        format="CODE128" />
                        <View>
                            <Text style={[styles.textBottom,{fontSize:15}]} >
                                Please go to the cashier and scan barcode above
                            </Text>
                        </View>
                        <View>
                            <Text style={[styles.textBottom,{fontSize:15}]} >
                                Enjoy your time here
                            </Text>
                        </View>
                        <View>
                            <Text style={[styles.textBottom,{fontSize:20}]} >
                                {
                                    Math.floor(this.props.times.time/60)<10?
                                    '0'+Math.floor(this.props.times.time/60):
                                    Math.floor(this.props.times.time/60)
                                } 
                            :
                                {
                                    (this.props.times.time-(Math.floor(this.props.times.time/60)*60))<10?
                                    '0'+(this.props.times.time-(Math.floor(this.props.times.time/60)*60)):
                                    this.props.times.time-(Math.floor(this.props.times.time/60)*60) 
                                }
                            </Text>
                        </View>
                    </View>
                    </View>
                </SafeAreaView>
        )
    }
}

store = (state) => {
    return {
        times               :   state.times,
        postTransaction     :   state.postTransaction,
        ipAdress            :   state.ipAdress
    }
}


export default connect(store, {
    timeRun
})(withNavigationFocus(FinishPage))
