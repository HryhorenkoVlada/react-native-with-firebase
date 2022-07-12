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

const ArticleDetails = ({ route }) => {
  const { article } = route.params;
  return (
    <SafeAreaView>
      <ScrollView>
        <Image
          source={{ uri: article.img }}
          style={{
            width: '100%',
            height: 250,
            maxHeight: 250,
          }}
        />
        <View style={{ paddingHorizontal: 20 }}>
          <View style={articleStyles.descrWrapper}>
            <Text style={articleStyles.cardTitle}>{article.title}</Text>
            <Text style={articleStyles.label}>{article.label}</Text>
          </View>
          <View>
            <Text style={articleStyles.descr}>{article.description}</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const articleStyles = StyleSheet.create({
  // AndroidSafeArea: {
  //   paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  //   backgroundColor: '#fafafa',
  // },
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

export default ArticleDetails;
