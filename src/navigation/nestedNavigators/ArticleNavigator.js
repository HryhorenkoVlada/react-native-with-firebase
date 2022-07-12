import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import ArticleDetails from '../../components/articles/ArticleDetails';
import ArticlesMain from '../../components/articles/ArticlesMain';
import ArticleForm from '../../components/articles/ArticleForm';
import BackButton from './../../components/shared/BackButton';

const Stack = createStackNavigator();

const ArticleNavigator = () => {
  return (
    <Stack.Navigator
    //   screenOptions={{
    //     headerStyle: {
    //       backgroundColor: 'yellow',
    //       height: 300,
    //     },
    //     headerTitle: false,
    //     headerBackTitle: false,
    //   }}
    >
      <Stack.Screen
        name="ArticlesMain"
        component={ArticlesMain}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ArticleDetails"
        component={ArticleDetails}
        options={({ navigation }) => ({
          headerTitleStyle: {
            fontSize: 0,
          },
          headerShadowVisible: false,
          headerStyle: { backgroundColor: '#fafafa' },
          headerLeft: () => <BackButton nav={navigation} />,
        })}
      />
      <Stack.Screen
        name="ArticleForm"
        component={ArticleForm}
        options={({ navigation }) => ({
          headerTitleStyle: {
            fontSize: 0,
          },
          //headerTitle: false,
          //headerBackTitle: false,
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: '#fafafa',
            height: 50,
          },
          headerLeft: () => <BackButton nav={navigation} />,
        })}
      />
    </Stack.Navigator>
  );
};

export default ArticleNavigator;
