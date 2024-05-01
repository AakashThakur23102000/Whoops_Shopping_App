import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import config from '../config/config'

const CustomBottomNaviatorText = ({ text, activeStatus }) => {

    const showStatus = useState(true);

    return (
        activeStatus && showStatus ? <Text style={styles.naviagationText}>{text}</Text> : null
    )
}

const styles = StyleSheet.create({
    naviagationText: {
        color: config.colors.secondary1000,
        fontSize: config.fontSize.regular
    },
})

export default CustomBottomNaviatorText