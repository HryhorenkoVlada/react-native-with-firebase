import { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { storageRef } from '../../../firebase';
import { ref, getDownloadURL } from 'firebase/storage';

const Card = ({ card }) => {
  const [imgUrl, setImgUrl] = useState('articles_images/book.jpeg');

  // useEffect(() => {
  //   getDownloadURL(ref(storageRef, 'articles_images/book.jpeg'))
  //     .then((url) => {
  //       setImgUrl(url);
  //     })
  //     .catch((error) => {
  //       // Handle any errors
  //     });
  // }, []);

  return (
    <View style={{ ...cardStyles.cardWrapper, ...cardStyles.shadow }}>
      <Image
        source={{
          uri: card.img,
        }}
        style={{ width: '100%', height: 200, maxHeight: 200 }}
      />
      <View style={cardStyles.descrWrapper}>
        <Text style={cardStyles.cardTitle}>{card.title}</Text>
        <Text style={cardStyles.label}>{card.label}</Text>
      </View>
      <View
        style={{
          backgroundColor: card.saved ? '#94778B' : '#FFFFFF',
          ...cardStyles.saveBlock,
        }}
      >
        <MaterialIcons
          name="turned-in-not"
          size={20}
          style={{ color: card.saved ? '#FFF' : '#110725' }}
        />
      </View>
    </View>
  );
};

const cardStyles = StyleSheet.create({
  cardWrapper: {
    flex: 1,
    minWidth: 270,
    marginHorizontal: 16,
    backgroundColor: '#fff',
    borderRadius: 12,
    position: 'relative',
    marginBottom: 10,
    overflow: 'hidden',
  },
  saveBlock: {
    position: 'absolute',
    width: 50,
    height: 50,
    borderRadius: 100,
    top: 12,
    right: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  descrWrapper: {
    paddingHorizontal: 16,
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

export default Card;
