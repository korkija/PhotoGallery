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
          options={{title: 'Gallery'}}
          name="galleryScreen"
          component={GalleryScreen}
        />
        <Stack.Screen
          options={{title: 'Photo'}}
          name="detailsScreen"
          component={DetailsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default ScreensStack;
