import { View, Text, SafeAreaView, StyleSheet, StatusBar } from 'react-native'
import React from 'react'
import config from './src/config/config'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SignUp from './src/screens/Auth/SignUp';
import SignIn from './src/screens/Auth/SignIn';
import SplashScreen from './src/screens/SplashScreen/SplashScreen';

const statusBarHeight = StatusBar.currentHeight;
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar
        translucent={true}
        barStyle={'light-content'}
        backgroundColor={config.colors.theme}
      />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName='SplashScreenPage'
          screenOptions={({ navigation, route }) => {
            return {
              headerShown: false
            }
          }}>
          <Stack.Screen name='SplashScreenPage' component={SplashScreen} />
          <Stack.Screen name='SignUpPage' component={SignUp} />
          <Stack.Screen name='SignInPage' component={SignIn} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: config.colors.theme,
    marginTop: statusBarHeight
  }
})

export default App