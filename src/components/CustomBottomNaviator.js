import { View, Text, Dimensions, StyleSheet } from 'react-native'
import React from 'react'
import config from '../config/config'
import AntDesign from "react-native-vector-icons/AntDesign"

var { width, height } = Dimensions.get("screen")

const CustomBottomNaviator = ({navigation,state}) => {
    console.log(state)
    return (
        <View style={styles.screen}>
            {/* selected Box */}
            <View style={styles.selectedView} />
            {/* navigation  */}
            <View style={styles.itemBox}>
                <AntDesign name="home" size={width * 0.07} color={config.colors.secondary1000} />
                <Text style={styles.naviagationText}>Home</Text>
            </View>
            <View style={styles.itemBox}>
                <AntDesign name="shoppingcart" size={width * 0.07} color={config.colors.secondary1000} />
                <Text style={styles.naviagationText}>Cart</Text>
            </View>
            <View style={styles.itemBox}>
                <AntDesign name="hearto" size={width * 0.07} color={config.colors.secondary1000} />
                <Text style={styles.naviagationText}>Favorites</Text>
            </View>
            <View style={styles.itemBox}>
                <AntDesign name="user" size={width * 0.07} color={config.colors.secondary1000} />
                <Text style={styles.naviagationText}>Profile</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        height: "7.5%",
        backgroundColor: config.colors.theme,
        elevation: 10,
        justifyContent: "space-evenly",
        alignItems: "center",
        flexDirection: "row"
    },
    itemBox: {
        // borderWidth: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        gap: width * 0.02
    },
    naviagationText: {
        color: config.colors.secondary1000,
        fontSize: config.fontSize.regular
    },


    selectedView: {
        position: "absolute",
        width: width * 0.25,
        height: "70%",
        backgroundColor: config.colors.secondary1000,
        opacity: 0.35,
        borderRadius: width * 0.02,
    }
})


export default CustomBottomNaviator