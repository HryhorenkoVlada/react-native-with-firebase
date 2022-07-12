import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
} from 'react-native';
import ArticleNavigator from '../navigation/nestedNavigators/ArticleNavigator';

const FindScreen = () => {
  return <ArticleNavigator />;
};

export default FindScreen;
