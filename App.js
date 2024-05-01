import { View, Text, SafeAreaView, StyleSheet, StatusBar, Appearance } from 'react-native'
import React from 'react'
import config from './src/config/config'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SignUp from './src/screens/Auth/SignUp';
import SignIn from './src/screens/Auth/SignIn';
import SplashScreen from './src/screens/SplashScreen/SplashScreen';
import HomeScreen from './src/screens/HomeScreen/HomeScreen';
import ProfileScreen from './src/screens/ProfileScreen/ProfileScreen';
import FavoritesScreen from './src/screens/FavoritesScreen/FavoritesScreen';
import CartScreen from './src/screens/CartScreen/CartScreen';
import CustomBottomNaviator from './src/components/CustomBottomNaviator';

var userTheme = Appearance.getColorScheme();
const statusBarHeight = StatusBar.currentHeight;
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {

  function HomePageStack() {
    return (
      <Tab.Navigator
        initialRouteName='HomeScreenPage'
        screenOptions={({ navigation, route }) => {
          return {
            headerShown: false
          }
        }}
        tabBar={({ navigation, state }) => <CustomBottomNaviator navigation={navigation} state={state} />}
      >
        <Tab.Screen name='HomeScreenPage' component={HomeScreen} />
        <Tab.Screen name='CartScreenPage' component={CartScreen} />
        <Tab.Screen name='FavoritesScreenPage' component={FavoritesScreen} />
        <Tab.Screen name='ProfileScreenPage' component={ProfileScreen} />
      </Tab.Navigator>
    )
  }



  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar
        translucent={true}
        barStyle={userTheme === "light"?"dark-content":'light-content'}
        backgroundColor={config.colors.theme}
      />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName='HomePageStack'
          screenOptions={({ navigation, route }) => {
            return {
              headerShown: false
            }
          }}>
          <Stack.Screen name='SplashScreenPage' component={SplashScreen} />
          <Stack.Screen name='SignUpPage' component={SignUp} />
          <Stack.Screen name='SignInPage' component={SignIn} />
          <Stack.Screen name='HomePageStack' component={HomePageStack} />
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