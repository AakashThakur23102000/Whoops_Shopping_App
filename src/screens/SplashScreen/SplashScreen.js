import { View, Text, Dimensions, StyleSheet, Image } from 'react-native'
import React, { useEffect } from 'react'
import config from '../../config/config'

const { width, height } = Dimensions.get("screen")

const SplashScreen = ({ navigation }) => {

    useEffect(() => {
        setTimeout(() => {
            navigation.replace("SignInPage")
        }, 1500)
    }, [])

    return (
        <View style={styles.screen}>
            <View style={styles.imageView}>
                <Image
                    source={config.image.splashImage}
                    style={styles.imageStyle}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: config.colors.theme,
        justifyContent: "center",
        alignItems: "center"
    },
    imageView: {
        alignItems: "center",
        justifyContent: "center",
        width: "80%",
        height: "26%",
        overflow: "hidden",
        // borderWidth:1,
        // borderColor:"white"
    },
    imageStyle: {
        resizeMode: "contain",
        width:"140%",
        height:"100%"
    }
})

export default SplashScreen