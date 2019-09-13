import {StyleSheet, Dimensions} from 'react-native';
const screenWidth = Dimensions.get('window').width
const styles = StyleSheet.create({
    mainContainer   :{
        flex                    :   3,
    },
            textContainer   :{
                flex                    :   8,
                justifyContent          :   'space-around',
                backgroundColor         :   '#322110',
                shadowColor             :   "#000",
                borderRadius            :   10,
                shadowOffset            :   {
                    width   :   0,
                    height  :   2,
                },
                shadowOpacity           :   0.8,
                shadowRadius            :   3.84,
                elevation               :   10,
            },
                    textChildContainer  :{
                        flexDirection       :   'row',
                        marginHorizontal    :   10
                    },
                            totalText   :{
                                fontSize        :   16,
                                color           :   '#ad8925',
                                textShadowColor :   'rgba(61, 48, 13, 0.2)',
                                textShadowOffset:   {width: -1, height: 1},
                                textShadowRadius:   10,
                                width           :   120
                            },
                            equalText   :{
                                fontSize        :   16,
                                color           :   '#ad8925',
                                textShadowColor :   'rgba(61, 48, 13, 0.2)',
                                textShadowOffset:   {width: -1, height: 1},
                                textShadowRadius:   10
                            },
                            amountText   :{
                                fontSize        :   16,
                                color           :   '#ad8925',
                                textShadowColor :   'rgba(61, 48, 13, 0.2)',
                                textShadowOffset:   {width: -1, height: 1},
                                textShadowRadius:   10,
                                marginLeft      :   'auto'
                            },
            callBillContainer   :{
                flex                    :   2,
                justifyContent          :   'center',
                alignItems              :   'center',
                marginHorizontal        :   50,
                marginVertical          :   5,
                borderRadius            :   10,
                backgroundColor         :   '#322110',
                shadowColor             :   "#000",
                shadowOffset            :   {
                    width   :   0,
                    height  :   2,
                },
                shadowOpacity           :   0.8,
                shadowRadius            :   3.84,
                elevation               :   10,
            },
                    callBillText    :{
                        fontSize        :   17,
                        color           :   '#ad8925',
                        fontWeight      :   'bold',
                        textShadowColor :   'rgba(61, 48, 13, 0.2)',
                        textShadowOffset:   {width: -1, height: 1},
                        textShadowRadius:   10
                    }
})

export default styles;