// import {AppLoading, Screen} from 'expo';
// import {Asset} from 'expo-asset';
// import * as Font from 'expo-font';
// import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {GalleryScreen} from '../screens/Gallery';
import {DetailsScreen} from '../screens/Details';

const Stack = createStackNavigator();

const ScreensStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{title: 'FIRST'}}
          name="galleryScreen"
          component={GalleryScreen}
        />
        <Stack.Screen name="detailsScreen" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default ScreensStack;
