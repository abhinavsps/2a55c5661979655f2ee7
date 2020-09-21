import * as React from 'react';
import { NavigationContainer, } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from "./screens/Home"
import Asteroid from "./screens/Asteroid"

const RootStack = createStackNavigator();


//Root Navigator
function AppNavigator() {


  return (
    <NavigationContainer >
      <RootStack.Navigator >
          <RootStack.Screen name="Home" component={Home} />
          <RootStack.Screen name="Asteroid" component={Asteroid} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;