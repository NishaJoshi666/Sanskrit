import React, {Component} from 'react';
import { Text, View } from 'react-native';
import GeneralIntro1 from './sanskrit/GeneralIntro1';
import GeneralIntro2 from './sanskrit/GeneralIntro2';
import MainScreen from './sanskrit/MainScreen';
import GeneralIntro3 from './sanskrit/GeneralIntro3';
import GeneralIntro4 from './sanskrit/GeneralIntro4';
import GeneralIntro5 from './sanskrit/GeneralIntro5';
import GeneralIntro6 from './sanskrit/GeneralIntro6';
import {createSwitchNavigator,createAppContainer} from 'react-navigation';

export default class App extends React.Component {
  render(){
  return (
    <View style={{flex:1,backgroundColor: '#ffffff',padding: 8,}}>
    <AppContainer/>
    </View>
  );
  }
}

const AppNavigator = createSwitchNavigator({
  MainScreen:MainScreen,
  Intro1 : GeneralIntro1,
  Intro2 : GeneralIntro2,
  Intro3 : GeneralIntro3,
  Intro4 : GeneralIntro4,
  Intro5 : GeneralIntro5,
  Intro6 : GeneralIntro6
})

const AppContainer = createAppContainer(
  AppNavigator
)

