import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  SafeAreaView,
  Platform,
  StatusBar,
} from 'react-native';

const BookDetails = ({ route }) => {
  const { book } = route.params;
  return (
    <SafeAreaView style={bookStyles.AndroidSafeArea}>
      <ScrollView>
        <Image
          source={{ uri: book.img }}
          style={{ width: '100%', height: 200, maxHeight: 200 }}
        />
        <View style={{ padding: 20 }}>
          <View style={bookStyles.descrWrapper}>
            <Text style={bookStyles.cardTitle}>{book.title}</Text>
            <Text style={bookStyles.label}>{book.label}</Text>
          </View>
          <View>
            <Text style={bookStyles.descr}>{book.description}</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const bookStyles = StyleSheet.create({
  AndroidSafeArea: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: '#fafafa',
  },
  descr: {
    color: '#110725',
    letterSpacing: -0.03,
    fontSize: 14,
    lineHeight: 18,
    marginBottom: 18,
  },
  descrWrapper: {
    paddingVertical: 24,
  },
  cardTitle: {
    color: '#110725',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  label: {
    textTransform: 'uppercase',
    paddingVertical: 6,
    paddingHorizontal: 16,
    backgroundColor: '#E7E9F4',
    borderRadius: 20,
    fontSize: 14,
    fontWeight: 'bold',
    lineHeight: 24,
    alignSelf: 'flex-start',
  },
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
});

export default BookDetails;
