import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import React, { useState, useEffect } from 'react';
import { View, Text, ImageBackground, Image } from 'react-native';
import { getDownloadURL, ref } from 'firebase/storage';
import { storage } from '../../../firebase';

const CustomDrawer = (props) => {
  const [imgUrl, setImgUrl] = useState(null);

  const getImage = async () => {
    await getDownloadURL(ref(storage, 'images/drawer-bg-book.jpeg')).then(
      (url) => {
        setImgUrl(url);
      }
    );
  };

  useEffect(() => {
    getImage();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={{ height: 200, backgroundColor: '#94778B' }}>
          {imgUrl ? (
            <Image
              source={{ uri: imgUrl }}
              style={{ width: '100%', height: 200, maxHeight: 200 }}
            />
          ) : null}
        </View>
        <View style={{ paddingTop: 10 }}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
    </View>
  );
};

export default CustomDrawer;
