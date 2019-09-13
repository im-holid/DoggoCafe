import {StyleSheet, Dimensions} from 'react-native';
const screenWidth = Dimensions.get('window').width
const styles = StyleSheet.create({
    parentContainer :{
        flex            :   7
    },
            backButton  :{
                flex                    :   0.1,
                flexDirection           :   'row',
                alignItems              :   'center',
                paddingVertical         :   5,
                backgroundColor         :   '#322110',
                borderBottomLeftRadius  :   10,
                borderBottomRightRadius :   10,

            },
                    backTouchable   :{
                        marginLeft  :   5,
                        marginRight :   15,
                        alignItems  :   'center'
                    },
                            back        :{
                                fontSize        :   30,
                                color           :   '#ad8925',
                                fontWeight      :   'bold',
                                textShadowColor :   'rgba(61, 48, 13, 0.2)',
                                textShadowOffset:   {width: -1, height: 1},
                                textShadowRadius:   10
                            },
                    backText    :{
                        fontSize        :   17,
                        color           :   '#ad8925',
                        fontWeight      :   'bold',
                        textShadowColor :   'rgba(61, 48, 13, 0.2)',
                        textShadowOffset:   {width: -1, height: 1},
                        textShadowRadius:   10
                    },
                    dismissAll  :{
                        alignItems      :   'center',
                        marginLeft      :   'auto',
                        marginRight     :   15

                    },
                            dismissAllText  :{
                                fontSize        :   17,
                                color           :   '#ad8925',
                                fontWeight      :   'bold',
                                textShadowColor :   'rgba(61, 48, 13, 0.2)',
                                textShadowOffset:   {width: -1, height: 1},
                                textShadowRadius:   10
                            },
            scrollView  :{
                flex            :   9.8,
                
            },
                    scrollContainer :{
                        flex                :   1,
                    },
                            mapOrderContainer   :{
                                flexDirection       :   'row',
                                marginBottom        :   10,
                                paddingVertical     :   5,
                                backgroundColor     :   '#322110'
                            },
                                            orderImage  :{
                                                width           :   60,
                                                height          :   60,
                                                borderRadius    :   10,
                                                marginHorizontal:   10
                                            },
                                    orderNamePriceContainer :{
                                    },
                                            orderName   :{
                                                fontSize    :   16,
                                                color       :   '#ad8925',
                                            },
                                            orderPrice  :{
                                                fontSize    :   14,
                                                color       :   '#ad8925',
                                            },
                                    orderButtonContainer    :{
                                        marginRight     :   10,
                                        alignSelf       :   'flex-end',
                                        marginLeft      :   'auto'
                                    },
                                            orderMinusPlusContainer :{
                                                flexDirection   :   'row',
                                            },
                                                    orderMinusPlus  :{
                                                        fontSize        :   25,
                                                        backgroundColor :   '#140d06',
                                                        borderRadius    :   10,
                                                        color           :   '#ad8925'
                                                    },
                                                    qty :{
                                                        marginHorizontal    :   5,
                                                        fontSize            :   15,
                                                        color               :   '#ad8925'
                                                    },
                                            orderButton :{
                                                backgroundColor     :   '#140d06',
                                                paddingHorizontal   :   10,
                                                marginTop           :   5,
                                                marginBottom        :   5,
                                                borderRadius        :   10,
                                                shadowColor         :   "#000",
                                                shadowOffset        : {
                                                        width   :   -1,
                                                        height  :   -1,
                                                },
                                                shadowOpacity       :   0.2,
                                                elevation           :   3,
                                            },
                                                    orderText:{
                                                        color:'#ad8925'
                                                    },
                        orderAll    :{
                            position            :   'absolute',
                            backgroundColor     :   '#322110',
                            justifyContent      :   'center',
                            alignItems          :   'center',
                            borderRadius        :   10,
                            borderTopLeftRadius :   30,
                            borderTopRightRadius:   30,
                            bottom              :   0,
                            right               :   80,
                            left                :   80,
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: -2,
                                        },
                            shadowOpacity: 0.8,
                            shadowRadius: 3.84,
                            elevation: 10,
                        },
                                orderAllText    :{
                                    fontSize        :   17,
                                    color           :   '#ad8925',
                                    fontWeight      :   'bold',
                                    textShadowColor :   'rgba(61, 48, 13, 0.2)',
                                    textShadowOffset:   {width: -1, height: 1},
                                    textShadowRadius:   10
                                }
})

export default styles;