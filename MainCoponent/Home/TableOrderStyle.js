import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    logo : {
        flex : 1,
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
                                fontSize : 35,
                                color : '#979797',
                                fontWeight : 'bold'
                            },
                    bodyContainer : {
                        flex:1,
                        justifyContent : 'center',
                        alignItems : 'center',
                        paddingTop : 50
                    },
                            textTableNumber:{
                              fontSize : 15,
                              color :'#979797',
                              opacity : 0.8
                            },
                            inputOrder:{
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