import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';

import ArticleNavigator from './nestedNavigators/ArticleNavigator';
import BooksMain from '../components/books/BooksMain';
import TabNavigator from './TabNaviagator';
import CustomDrawer from './components/CustomDrawer';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Drawer = createDrawerNavigator();

const AppStack = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Dashboard"
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        drawerActiveBackgroundColor: 'rgba(148, 119, 139, 0.5)',
        drawerActiveTintColor: '#fff',
        drawerLabelStyle: {
          marginLeft: -20,
        },
        drawerStyle: {
          width: 300,
        },
        headerStyle: {
          backgroundColor: '#fafafa',
        },
        headerShadowVisible: true,
        headerTitleStyle: {
          fontSize: 0,
        },
        sceneContainerStyle: { backgroundColor: '#fafafa' },
      }}
    >
      <Drawer.Screen
        name="Dashboard"
        component={TabNavigator}
        options={{
          drawerIcon: ({ color }) => (
            <MaterialIcons name="home" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Articles"
        component={ArticleNavigator}
        options={{
          headerStyle: { backgroundColor: '#fafafa' },
          drawerIcon: ({ color }) => (
            <MaterialIcons name="article" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Books"
        component={BooksMain}
        options={{
          headerStyle: { backgroundColor: '#fafafa' },
          drawerIcon: ({ color }) => (
            <MaterialIcons name="auto-stories" size={22} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default AppStack;
