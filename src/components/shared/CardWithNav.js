import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';

import Card from './Card';

const CardWithNav = ({ pageToNavigate, params, itemToShow }) => {
  //params has to be an object
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      delayPressIn={150}
      style={{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'stretch',
        justifyContent: 'center',
      }}
      onPress={() => {
        console.log('params', params);
        navigation.navigate(pageToNavigate, params);
      }}
    >
      <Card card={itemToShow} />
    </TouchableOpacity>
  );
};

export default CardWithNav;
