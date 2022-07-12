import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { onAuthStateChanged } from 'firebase/auth';

import AuthStack from './src/navigation/AuthStack';
import AppStack from './src/navigation/AppStack';

import { auth } from './firebase';

export default function App() {
  const [signedIn, setSignedIn] = useState(false);
  //const [user, setUser] = useState(auth.currentUser);

  const onAuthChanged = (user) => {
    if (user) setSignedIn(true);
    else setSignedIn(false);
  };

  useEffect(() => {
    const subscriber = onAuthStateChanged(auth, onAuthChanged);
    return subscriber; // unsubscribe on unmount
  }, [auth.currentUser]);

  return (
    <NavigationContainer>
      {signedIn ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
}
