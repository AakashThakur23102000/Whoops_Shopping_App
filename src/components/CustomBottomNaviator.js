import { View, Text, Dimensions, StyleSheet, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import config from '../config/config'
import AntDesign from "react-native-vector-icons/AntDesign"
import Animated, { Easing, ReduceMotion, useAnimatedStyle, useSharedValue, withTiming, } from 'react-native-reanimated'
import CustomBottomNaviatorText from './CustomBottomNaviatorText'


var { width, height } = Dimensions.get("screen")

const CustomBottomNaviator = ({ navigation, state }) => {

    console.log(state.index)

    var navActivePositionArray = [width * 0.065, width * 0.26, width * 0.455, width * 0.655]
    var navActiveInitialPosition = useSharedValue(navActivePositionArray[state.index])
    var navActiveAnimatedStyles = useAnimatedStyle(() => {
        return {
            transform: [
                { translateX: navActiveInitialPosition.value },
            ]
        }
    })

    useEffect(() => {
        navActiveInitialPosition.value = withTiming(navActivePositionArray[state.index], {
            duration: 300,
            easing: Easing.linear,
            reduceMotion: ReduceMotion.System,
        })
    }, [state.index])

    return (
        <View style={styles.screen}>

            {/* selected Box */}
            <Animated.View style={[styles.selectedView, navActiveAnimatedStyles]} />


            {/* navigation  */}
            <Pressable
                style={styles.itemBox}
                onPress={() => navigation.navigate("HomeScreenPage")}
            >
                <AntDesign name="home" size={width * 0.07} color={config.colors.secondary1000} />
                <CustomBottomNaviatorText text={"Home"} activeStatus={state.index === 0}/>
            </Pressable>
            <Pressable
                style={styles.itemBox}
                onPress={() => navigation.navigate("CartScreenPage")}
            >
                <AntDesign name="shoppingcart" size={width * 0.07} color={config.colors.secondary1000} />
                <CustomBottomNaviatorText text={"Cart"} activeStatus={state.index === 1}/>
            </Pressable>
            <Pressable
                style={styles.itemBox}
                onPress={() => navigation.navigate("FavoritesScreenPage")}
            >
                <AntDesign name="hearto" size={width * 0.07} color={config.colors.secondary1000} />
                <CustomBottomNaviatorText text={"Favorites"} activeStatus={state.index === 2}/>
            </Pressable>
            <Pressable
                style={styles.itemBox}
                onPress={() => navigation.navigate("ProfileScreenPage")}
            >
                <AntDesign name="user" size={width * 0.07} color={config.colors.secondary1000} />
                <CustomBottomNaviatorText text={"Profile"} activeStatus={state.index === 3}/>
            </Pressable>
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
        height:"80%",
        paddingHorizontal:width*0.02,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        gap: width * 0.02
    },


    selectedView: {
        position: "absolute",
        width: width * 0.28,
        height: "70%",
        backgroundColor: config.colors.secondary1000,
        opacity: 0.35,
        borderRadius: width * 0.02,
        left: 0,
        transform: [
            { translateX: width * 0.65 }
        ]
    }
})


export default CustomBottomNaviator