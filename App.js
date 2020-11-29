import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import * as Font from 'expo-font'
import { AppLoading } from 'expo'
import {enableScreens} from 'react-native-screens'

enableScreens()

const getFonts = () => Font.loadAsync({
  'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
  'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf'),
  'nunito-light': require('./assets/fonts/Nunito-Light.ttf')
})

// NAVIGATION
import AppNavigation from './navigator/AppNavigation'

export default function App() {
  const [fontsloaded, setFontsLoaded] = useState(false);

if(fontsloaded){
    return (     
        <AppNavigation />
    );
  }else{
    return (
    <AppLoading 
      startAsync = {getFonts}
      onFinish = {() => setFontsLoaded(true)}
    />
    )
  }
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20,
    fontFamily: 'nunito-regular'
  },
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
})