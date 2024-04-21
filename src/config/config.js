import { Dimensions } from "react-native"

const { width, height } = Dimensions.get("screen")
const config = {
    colors: {
        theme: "black",
        touchOpacity:"rgba(225,225,225,0.4)",
        primaryTextColor: "white",
        success:"#55D85A",
        primary1000:"#2A2C36"
    },
    fontSize: {
        huge:width*0.08,
        large:width*0.07,
        big:width*0.056,
        regular:width*0.036,
        small:width*0.025

    },
    image:{
        splashImage:require("../../assets/images/SplashImage.gif")
    }

}

export default config