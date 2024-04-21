import { View, Text, StyleSheet, Dimensions, TextInput, Pressable } from 'react-native'
import React from 'react'
import config from '../../config/config'
import HeaderBar from '../../components/HeaderBar'
import Entypo from "react-native-vector-icons/Entypo"

const { width, height } = Dimensions.get("screen")
const SignIn = () => {

    return (
        <>
            <HeaderBar />
            <View style={styles.screen}>
                <View style={styles.innerView}>
                    {/* top */}
                    <View style={styles.topView}>
                        <Text style={styles.loginHeading}>Login</Text>

                        <View style={styles.topViewInnerCointainer}>
                            <View style={styles.topViewInnerCointainerTop}>

                                <View style={styles.textBoxView}>
                                    <View style={styles.textBoxViewLeft}>
                                        <Text style={styles.textBoxViewText}>Email</Text>
                                        <TextInput style={styles.textBox} />
                                    </View>
                                </View>
                                <View style={styles.textBoxView}>
                                    <View style={styles.textBoxViewLeft}>
                                        <Text style={styles.textBoxViewText}>Password</Text>
                                        <TextInput style={styles.textBox} />
                                    </View>
                                </View>

                                {/* forgot pass */}
                                <Pressable
                                    android_ripple={{
                                        color: config.colors.touchOpacity,
                                        foreground:true
                                    }}
                                    style={styles.forgotPassView}
                                >
                                    <Text style={styles.forgotPassText}>Forgot your Password</Text>
                                    <Entypo
                                        name="arrow-long-right"
                                        size={width * 0.08}
                                        color={"#e267b3"} 
                                        style={{margin:0,padding:0}}/>
                                </Pressable>

                            </View>
                        </View>
                    </View>

                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: config.colors.theme,
        paddingHorizontal: height * 0.03
    },
    innerView: {
        // borderWidth: 1,
        // borderColor: config.colors.primaryTextColor,
        height: "100%",
        paddingVertical: height * 0.02
    },


    topView: {
        // borderWidth: 1,
        // borderColor: config.colors.primaryTextColor,
        gap: height * 0.08,
        paddingVertical: height * 0.04
    },
    loginHeading: {
        // borderWidth: 1,
        // borderColor: config.colors.primaryTextColor,
        color: config.colors.primaryTextColor,
        fontSize: config.fontSize.huge,
    },
    topViewInnerCointainer: {
        // borderWidth: 1,
        // borderColor: config.colors.primaryTextColor,
    },
    topViewInnerCointainerTop: {
        // borderWidth: 1,
        // borderColor: config.colors.primaryTextColor,
        gap: height * 0.01
    },
    textBoxView: {
        // borderWidth: 1,
        // borderColor: config.colors.primaryTextColor,
        borderRadius: width * 0.015,
        backgroundColor: config.colors.primary1000,
        paddingHorizontal: width * 0.05,
        flexDirection: "row",
        paddingVertical: height * 0.008
    },
    textBoxViewLeft: {
        width: "90%",
        gap: height * 0.01
    },
    textBoxViewText: {
        color: config.colors.primaryTextColor,
        fontSize: config.fontSize.regular
    },
    textBox: {
        backgroundColor: config.colors.primary1000,
        // elevation: 4,
        width: "100%",
        height: height * 0.03,
        padding: 0
    },


    forgotPassView: {
        flexDirection: "row",
        width: width*0.37,
        borderRadius:width*0.01,
        // height: "17.4%",
        // justifyContent: "flex-end",
        alignSelf: "flex-end",
        alignItems: "center",
        overflow:"hidden"
        // borderWidth: 1,
        // borderColor: config.colors.primaryTextColor,    
    },
    forgotPassText: {
        flex: 1,
        padding: 0,
        height:"100%",
        textAlignVertical:"center",
        paddingRight: width * 0.03,
        // borderWidth: 1,
        fontSize:config.fontSize.small,
        // borderColor: config.colors.primaryTextColor,
        textAlign: 'right',
        color: config.colors.primaryTextColor
    }
})

export default SignIn