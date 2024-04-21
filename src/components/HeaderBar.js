import { View, Text, StyleSheet, Dimensions, Pressable } from 'react-native'
import React from 'react'
import Entypo from "react-native-vector-icons/Entypo"
import config from '../config/config'

const { width, height } = Dimensions.get("screen")
const HeaderBar = () => {
    return (
        <View style={styles.screen}>
            <Pressable
                style={styles.headerIcon}
                android_ripple={{
                    color:config.colors.touchOpacity,
                    foreground: true,
                }}
            >
                <Entypo name="chevron-small-left" size={width * 0.08} color={config.colors.primaryTextColor} />
            </Pressable>
            <Text style={styles.headerText}>swdw</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    screen: {
        backgroundColor: config.colors.theme,
        height: "5.5%",
        alignItems: "center",
        justifyContent: "center",
    },
    headerIcon: {
        position: "absolute",
        alignSelf: "flex-start",
        justifyContent: "center",
        alignItems: "center",
        borderColor: config.colors.primaryTextColor,
        borderRadius: width * 0.5,
        overflow: "hidden",
        left:"3%",
    },
    headerText: {
        fontSize: config.fontSize.big,
        borderWidth: 1,
        color: config.colors.primaryTextColor
    }
})
export default HeaderBar