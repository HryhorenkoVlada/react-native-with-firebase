import { TouchableOpacity, Text, StyleSheet } from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const BackButton = ({ nav }) => {
  return (
    <TouchableOpacity
      onPress={(_) => nav.goBack()}
      title="Back"
      style={styles.backButton}
    >
      <MaterialIcons
        name="keyboard-backspace"
        size={25}
        style={styles.backImg}
      />
      <Text style={styles.backText}>Back</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 16,
  },
  backImg: {
    color: '#94778B',
  },
  backText: {
    color: '#94778B',
    fontSize: 12,
    marginLeft: 8,
  },
});

export default BackButton;
