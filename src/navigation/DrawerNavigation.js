import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';

import { FindScreen, HomeScreen } from '../screens';
import TabNavigator from './TabNaviagator';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="Tab">
      <Drawer.Screen
        name="Dashboard"
        component={TabNavigator}
        options={{
          headerStyle: { backgroundColor: 'transparent' },
          headerShadowVisible: false,
          headerTitleStyle: {
            fontSize: 0,
          },
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
