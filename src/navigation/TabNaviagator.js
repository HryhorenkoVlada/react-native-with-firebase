import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { StyleSheet, View, Text, Dimensions } from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { FindScreen, HomeScreen, Favourites, ChatScreen } from '../screens';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          // position: 'absolute',
          // bottom: 20,
          // left: 20,
          // right: 20,
          position: 'relative',
          zIndex: 100,
          left: 16,
          right: 16,
          width: Dimensions.get('window').width - 32,
          // alignItems: 'center',
          // justifyContent: 'center',
          marginBottom: 20,
          marginTop: 10,
          elevation: 0,
          borderRadius: 20,
          height: 70,
          ...styles.shadow,
        },
        //sceneContainerStyle: { backgroundColor: 'yellow' },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          //tabBarStyle: { backgroundColor: '#fafafa' },

          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabWrapper}>
              <MaterialIcons
                name="home"
                size={25}
                style={{ color: focused ? '#94778B' : '#9DB4C0' }}
              />
              <Text style={{ color: focused ? '#94778B' : '#9DB4C0' }}>
                HOME
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="FindScreen"
        component={FindScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabWrapper}>
              <MaterialIcons
                name="search"
                size={25}
                style={{
                  color: focused ? '#94778B' : '#9DB4C0',
                }}
              />
              <Text style={{ color: focused ? '#94778B' : '#9DB4C0' }}>
                Find
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Favourites"
        component={Favourites}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabWrapper}>
              <MaterialIcons
                name="favorite-border"
                size={25}
                style={{
                  color: focused ? '#94778B' : '#9DB4C0',
                }}
              />
              <Text style={{ color: focused ? '#94778B' : '#9DB4C0' }}>
                Favourites
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="ChatScreen"
        component={ChatScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabWrapper}>
              <MaterialIcons
                name="chat"
                size={25}
                style={{
                  color: focused ? '#94778B' : '#9DB4C0',
                }}
              />
              <Text style={{ color: focused ? '#94778B' : '#9DB4C0' }}>
                Chat
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#A6A6A6',
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    elevation: 5,
  },
  tabWrapper: {
    alignItems: 'center',
  },
});

export default TabNavigator;
