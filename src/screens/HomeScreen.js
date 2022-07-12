import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';

const HomeScreen = () => {
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => alert(error.message));
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ marginBottom: 8 }}>Home Screen</Text>
      <Text>Hello, {auth.currentUser?.email}</Text>
      <View style={styles.buttonsWrapper}>
        <TouchableOpacity
          onPress={handleSignOut}
          style={[styles.button, styles.buttonOutline]}
        >
          <Text style={[styles.buttonText, styles.buttonOutlineText]}>
            Sign Out
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fafafa',
  },
  buttonsWrapper: {
    width: '80%',
  },
  button: {
    backgroundColor: '#94778B',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    width: '100%',
    alignItems: 'center',
    borderColor: 'transparent',
    borderWidth: 2,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
});

export default HomeScreen;
