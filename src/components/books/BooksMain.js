import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
  StatusBar,
  TextInput,
  Dimensions,
} from 'react-native';
import { doc, setDoc, collection, getDocs } from 'firebase/firestore';

import CardWithNav from '../shared/CardWithNav';
import { useState, useEffect } from 'react';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { db } from '../../../firebase';

const BooksMain = ({}) => {
  const [searchedValue, setSearchedValue] = useState('');
  const [articles, setArticles] = useState([]);
  const [shownArticles, setShownArticles] = useState(articles);

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
    <SafeAreaView style={styles.AndroidSafeArea}>
      <ScrollView style={{ padding: 20, marginBottom: 90 }}>
        <View style={{ marginBottom: 20 }}>
          <Text style={styles.title}>Books</Text>
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
            {shownArticles.map((article, index) => (
              <CardWithNav
                pageToNavigate="ArticleDetails"
                params={{ article: article }}
                itemToShow={article}
                key={index.toString()}
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    justifyContent: 'flex-start',
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
    marginBottom: 40,
    color: '#1D263B',
  },
});

export default BooksMain;
