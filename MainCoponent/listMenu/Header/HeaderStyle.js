import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    headContainer : {
        flex:2.5,
        backgroundColor : '#322110',
        paddingHorizontal :10,
        borderBottomLeftRadius : 10,
        borderBottomRightRadius : 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: -2,
                    },
        shadowOpacity: 0.8,
        shadowRadius: 3.84,
        elevation: 10,
        },
            flex1Container : {
                flex:1,
            },
                    tableAndTimeContainer : {
                        flex:1.4,
                        flexDirection:'row',
                        justifyContent : 'space-between'
                    },
                            tableAndTime : {
                                fontSize : 15,
                                color : '#ad8925'
                            },
                    logoContainer : {
                        flex : 6,
                        alignItems:'center',
                        justifyContent:'center'
                    },
                    logoContainerLandscape:{
                        flex:6,
                        flexDirection:'row',
                        justifyContent:'center',
                        alignItems : 'center'
                    },
                            logoText:{
                                fontSize : 25,
                                color : '#ad8925',
                                fontWeight : 'bold',
                                textShadowColor: 'rgba(61, 48, 13, 0.2)',
                                textShadowOffset: {width: -1, height: 1},
                                textShadowRadius: 10
                            },
                            logoTextLandscape:{
                                fontSize : 25,
                                color : '#ad8925',
                                fontWeight : 'bold',
                                textShadowColor: 'rgba(61, 48, 13, 0.2)',
                                textShadowOffset: {width: -1, height: 1},
                                textShadowRadius: 10
                            },
                            logo : {
                                width:50,
                                height:50
                            },
                    menuContainer : {
                        flex:2.6,
                        flexDirection:'row',
                        justifyContent:'space-around',
                        alignItems:'flex-start',
                        marginTop : -10
                    },
                            childMenus : {
                                flex:1,
                                justifyContent:'center',
                                alignItems:'center',
                            },
                                    menuText:{
                                        fontSize : 17,
                                        color : '#ad8925',
                                    },
                                    menuTextActive:{
                                        fontSize : 17,
                                        color : '#ad8925',
                                        fontWeight : 'bold',
                                        textShadowColor: 'rgba(61, 48, 13, 0.2)',
                                        textShadowOffset: {width: -1, height: 1},
                                        textShadowRadius: 10
                                    },
            
})

export default styles;