import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import WriteStoryScreen from './screens/WriteStoryScreen'
import ReadStoryScreen from './screens/ReadStoryScreen';

const TabNavigator = createBottomTabNavigator(
  {WriteStory: WriteStoryScreen},
  {ReadStory: ReadStoryScreen}
);

const AppContainer = createAppContainer(
  TabNavigator
);

export default class App extends React.Component{
  render(){
  return (
    <AppContainer />
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
