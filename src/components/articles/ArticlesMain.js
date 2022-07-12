import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import { collection, getDocs } from 'firebase/firestore';

import CardWithNav from '../shared/CardWithNav';
import { useState, useEffect } from 'react';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

import { db } from '../../../firebase';

const ArticlesMain = ({}) => {
  const [searchedValue, setSearchedValue] = useState('');
  const [articles, setArticles] = useState([]);
  const [shownArticles, setShownArticles] = useState(articles);

  const navigation = useNavigation();

  const handleSearchChange = (text) => {
    setSearchedValue(text);
    const filteredArticles = articles.filter((article) =>
      article.title.toLowerCase().includes(text.toLowerCase())
    );
    setShownArticles(filteredArticles);
  };

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const querySnapshot = await getDocs(collection(db, 'articles'));
    let tmpArticles = [];
    querySnapshot.forEach((doc) => {
      tmpArticles.push(doc.data());
    });
    setArticles(tmpArticles);
    setShownArticles(tmpArticles);
  };

  return (
    <View style={styles.container}>
      <ScrollView style={{ padding: 20 }}>
        <View style={{ marginBottom: 20 }}>
          <Text style={styles.title}>Articles</Text>
          <View style={styles.buttonWrapper}>
            <TouchableOpacity
              style={styles.button}
              onPress={() =>
                navigation.navigate('ArticleForm', { mode: 'create' })
              }
            >
              <MaterialIcons name="add" size={18} color="#fff" />
              <Text style={styles.buttonText}>Add new</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              onChangeText={handleSearchChange}
              value={searchedValue}
              placeholder="Search"
            />
            <TouchableOpacity
              //onPress={filterArticles}
              style={styles.searchIcon}
            >
              <MaterialIcons name="search" size={30} color="#6D7179" />
            </TouchableOpacity>
          </View>
          <View
            contentContainerStyle={{
              alignItems: 'center',
              marginBottom: 10,
              marginHorizontal: 20,
              width: Dimensions.get('window').width - 40,
            }}
          >
            {shownArticles ? (
              shownArticles.map((article, index) => (
                <CardWithNav
                  pageToNavigate="ArticleDetails"
                  params={{ article: article }}
                  itemToShow={article}
                  key={index.toString()}
                />
              ))
            ) : (
              <View style={{ marginTop: 15 }}>
                <ActivityIndicator size={60} color="#6D7179" />
              </View>
            )}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fafafa',
  },
  inputWrapper: {
    marginBottom: 18,
    marginHorizontal: 16,
    position: 'relative',
  },
  input: {
    borderWidth: 1,
    paddingVertical: 16,
    paddingRight: 50,
    paddingLeft: 16,
    borderColor: '#6D7179',
    color: '#6D7179',
    borderRadius: 12,
  },
  searchIcon: {
    position: 'absolute',
    top: 18,
    right: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#1D263B',
  },
  buttonWrapper: {
    alignItems: 'flex-end',
    marginBottom: 12,
    marginTop: 0,
  },
  button: {
    backgroundColor: '#94778B',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    width: '100%',
    maxWidth: 120,
    alignItems: 'center',
    borderColor: 'transparent',
    borderWidth: 2,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonText: {
    marginLeft: 5,
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
});

export default ArticlesMain;
