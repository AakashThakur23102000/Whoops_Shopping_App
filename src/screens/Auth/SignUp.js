import { View, Text, StyleSheet, Dimensions, TextInput, Pressable, ScrollView } from 'react-native'
import React from 'react'
import config from '../../config/config'
import HeaderBar from '../../components/HeaderBar'
import Entypo from "react-native-vector-icons/Entypo"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import LottieView from 'lottie-react-native'
const { width, height } = Dimensions.get("screen")
const SignUp = ({ navigation }) => {

    return (
        <>
            <HeaderBar />
            <ScrollView style={styles.screen} contentContainerStyle={{flexGrow:1}}>
                <View style={styles.innerView}>
                    {/* top */}
                    <View style={styles.topView}>
                        {/* Page Heading */}
                        <Text style={styles.loginHeading}>Sign Up</Text>

                        <LottieView
                            source={config.animationJSON.signUpAnimtion}
                            style={{
                                width: "100%",
                                height: height * 0.2,
                            }}
                            resizeMode='contain'
                            autoPlay
                            loop
                        />

                        {/* input box  */}
                        <View style={styles.midView}>
                            <View style={styles.inputContainerView}>
                                <Text style={styles.felidHeadings}>Name</Text>
                                <TextInput secureTextEntry={true} textContentType='name' style={styles.textInput} placeholder='Name' />
                            </View>
                            <View style={styles.inputContainerView}>
                                <Text style={styles.felidHeadings}>Email</Text>
                                <TextInput textContentType='emailAddress' style={styles.textInput} placeholder='Email' />
                            </View>
                            <View style={styles.inputContainerView}>
                                <Text style={styles.felidHeadings}>Password</Text>
                                <TextInput secureTextEntry={true} textContentType='password' style={styles.textInput} placeholder='Password' />
                            </View>
                        </View>

                    </View>

                    {/* bottom */}
                    <View style={styles.bottomView}>
                        <Pressable
                            style={styles.authButton}
                            android_ripple={{
                                color: config.colors.touchOpacity,
                                foreground: true
                            }}
                        >
                            <View style={{
                                backgroundColor: config.colors.secondary100
                            }}>
                                <Text style={styles.authButtonText}>SIGN UP</Text>
                            </View>

                        </Pressable>
                        <View style={{
                            alignItems: "center",
                            flexDirection: "row"
                        }}>
                            <Text style={styles.bottomViewText}>Already have Account,{" "}</Text>
                            <Pressable android_ripple={{
                                color: config.colors.touchOpacity,
                                foreground: true
                            }}
                                onPress={() => navigation.navigate("SignInPage")}
                            >
                                <Text style={styles.bottomViewTextHighlighted}>Login</Text>
                            </Pressable>

                        </View>
                    </View>


                </View>
            </ScrollView>
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
        justifyContent: "space-between",
        height: "100%",
        paddingVertical: height * 0.01,
        paddingBottom: height * 0.05
    },


    topView: {
        // borderWidth: 1,
        gap: height * 0.04,

    },
    loginHeading: {
        color: config.colors.primaryTextColor,
        fontSize: config.fontSize.huge,
        fontFamily: config.fontWeight.aleo700
    },


    midView: {
        // borderWidth: 1,
        width: "95%",
        alignSelf: "center",
        gap: height * 0.02
    },
    inputContainerView: {
        gap: height * 0.01
    },
    felidHeadings: {
        // borderWidth: 1,
        color: config.colors.primaryTextColor,
        fontFamily: config.fontWeight.aleo700,
        fontSize: config.fontSize.regular
    },
    textInput: {
        // borderWidth: 1,
        width: "100%",
        alignSelf: "center",
        height: height * 0.05,
        padding: 0,
        borderRadius: width * 0.05,
        backgroundColor: config.colors.primary100,
        paddingHorizontal: width * 0.04,
        fontSize: config.fontSize.regular
    },


    forgotPassView: {
        flexDirection: "row",
        width: "45%",
        borderRadius: width * 0.01,

        alignSelf: "flex-end",
        alignItems: "center",
        overflow: "hidden",
        // borderWidth: 1,
    },
    forgotPassText: {
        flex: 1,
        padding: 0,
        height: "100%",
        textAlignVertical: "center",
        paddingRight: width * 0.03,
        // borderWidth: 1,
        fontSize: config.fontSize.small,
        // borderColor: config.colors.primaryTextColor,
        textAlign: 'right',
        color: config.colors.primaryTextColor,
        fontFamily: config.fontWeight.aleo500
    },


    // bottom 
    bottomView: {
        // borderWidth: 1,
        alignItems: "center",
        justifyContent: "center",
        gap: height * .01
    },
    authButton: {
        // borderWidth: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: config.colors.secondary100,
        paddingVertical: height * 0.01,
        borderRadius: width * 0.03,
        overflow: "hidden",
        elevation: 4,
        alignSelf: "center",
        width: "100%"
    },
    authButtonText: {
        fontSize: config.fontSize.big,
        color: "white",
        fontFamily: config.fontWeight.aleo800
    },
    bottomViewText: {
        color: config.colors.primaryTextColor,
        fontSize: config.fontSize.regular,
        textAlign: "center",
    },
    bottomViewTextHighlighted: {

        fontFamily: config.fontWeight.aleo800,
        color: config.colors.secondary1000,
        fontSize: config.fontSize.medium,
        textAlign: "center",
        alignSelf: "center",
    }

})

export default SignUp