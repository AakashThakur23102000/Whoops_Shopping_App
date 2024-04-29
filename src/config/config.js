import { Dimensions } from "react-native"
import { Appearance } from 'react-native';



const { width, height } = Dimensions.get("screen");
var userTheme = Appearance.getColorScheme();

const config = {
    colors: {
        theme: userTheme === "light" ? "white" : "black",
        touchOpacity: userTheme === "light" ? "rgba(0,0,0,0.08)" : "rgba(225,225,225,0.4)",
        primaryTextColor: userTheme === "light" ? "black" : "white",
        success: "#55D85A",
        primary100: userTheme === "light" ? "#F5F5DC" : "#2A2C36",
        secondary100: "#f96cad",

        secondary800: "#a968de",
        secondary1000: "#7e66f8"



    },
    fontSize: {
        huge: width * 0.08,
        large: width * 0.07,
        big: width * 0.056,
        medium: width * 0.046,
        regular: width * 0.038,
        small: width * 0.028

    },
    fontWeight: {
        aleo100: "Aleo-Thin",
        aleo200: "Aleo-ExtraLight",
        aleo300: "Aleo-Light",
        aleo400: "Aleo-Regular",
        aleo500: "Aleo-Medium",
        aleo600: "Aleo-SemiBold",
        aleo700: "Aleo-Bold",
        aleo800: "Aleo-ExtraBold",
        aleo900: "Aleo-Black"
    },
    image: {
        splashImage: require("../../assets/images/SplashImage.gif")
    },
    animationJSON: {
        loginAnimation: require("../../assets/animationJSON/SignIn.json"),
        signUpAnimtion:require("../../assets/animationJSON/SignUp.json")
    }

}

export default config