import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    logo : {
        flex : 1,
        backgroundColor:'#140d06',
    },
            container : {
                flex:1,
                paddingTop : 30
            },
                    headerContainer : {
                        flex:1,
                        justifyContent : 'center',
                        alignItems : 'center'
                    },
                            logoHeader : {
                                width : 100,
                                height :100
                            },
                            textHeader : {
                                fontSize : 25,
                                color : '#ad8925',
                                fontWeight : 'bold',
                                textShadowColor: 'rgba(61, 48, 13, 0.2)',
                                textShadowOffset: {width: -1, height: 1},
                                textShadowRadius: 10
                            },
                    bodyContainer : {
                        flex:1,
                        justifyContent : 'center',
                        alignItems : 'center',
                        paddingTop : 50
                    },
                            textTableNumber:{
                                fontSize:17,
                                color : '#ad8925',
                                fontWeight : 'bold',
                                textShadowColor: 'rgba(61, 48, 13, 0.2)',
                                textShadowOffset: {width: -1, height: 1},
                                textShadowRadius: 10
                            },
                            inputOrder:{
                                color : '#ad8925',
                                fontWeight : 'bold',
                                textShadowColor: 'rgba(61, 48, 13, 0.2)',
                                textShadowOffset: {width: -1, height: 1},
                                textShadowRadius: 10,
                                borderBottomWidth : 1,
                                borderBottomColor : '#322110',
                                marginBottom : 10,
                                paddingBottom : -30,
                                textAlign : 'center',
                                paddingHorizontal : 50
                            
                            },
                            inputSubmit :{
                                backgroundColor : '#322110',
                                borderRadius : 8,
                                paddingVertical : 6,
                                paddingHorizontal : 40
                            }
})

export default styles;