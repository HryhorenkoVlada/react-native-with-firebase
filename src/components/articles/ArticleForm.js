import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  Button,
  Image,
  ScrollView,
} from 'react-native';

import * as ImagePicker from 'expo-image-picker';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { collection, addDoc } from 'firebase/firestore';
import uuid from 'react-native-uuid';
import { storage, db } from '../../../firebase';

import { useNavigation } from '@react-navigation/native';

const ArticleForm = ({ article }) => {
  const [title, setTitle] = useState(article ? article.title : '');
  const [saved, setSaved] = useState(article ? article.saved : false);
  const [description, setDescription] = useState(
    article ? article.description : ''
  );
  const inputEl = useRef(null);
  const [sphere, setSphere] = useState(article ? article.label : '');

  const [image, setImage] = useState(null);
  const [imagePath, setImagePath] = useState('');
  const [uploading, setUploading] = useState(false);

  const navigation = useNavigation();

  const pickImage = async () => {
    const permissions = await ImagePicker.requestCameraPermissionsAsync();

    if (permissions.status !== 'granted') {
      alert("You've refused to allow this app to access your photos!");
    } else {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.cancelled) {
        setImage(result);
        setImagePath(result.uri);
      }

      return result;
    }
  };

  const _handleImagePicked = async (pickerResult) => {
    try {
      setUploading(true);
      if (!pickerResult.cancelled) {
        const uploadUrl = await uploadImageAsync(pickerResult);
        setImagePath(uploadUrl);
        await addDoc(collection(db, 'articles'), {
          title,
          description,
          label: sphere,
          saved: saved,
          img: uploadUrl,
        });
        navigation.navigate('ArticlesMain');
      }
    } catch (e) {
      console.log(e);
      alert('Upload failed, sorry :(');
    } finally {
      setUploading(false);
    }
  };

  const uploadImageAsync = async (file) => {
    const blob = await new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = function () {
        resolve(xhr.response);
      };
      xhr.onerror = function (e) {
        console.log(e);
        reject(new TypeError('Network request failed'));
      };
      xhr.responseType = 'blob';
      xhr.open('GET', file.uri, true);
      xhr.send(null);
    });

    const fileRef = ref(storage, `articles_images/${uuid.v4()}`);
    const result = await uploadBytes(fileRef, blob);

    blob.close();

    return await getDownloadURL(fileRef);
  };

  const removeImage = (e) => {
    e.stopPropagation();
    setImagePath('');
    setImage('');
  };

  const validation = () => {
    if (title && description && sphere && image) return true;
    return false;
  };

  const handleArticleCreation = async () => {
    if (validation) {
      _handleImagePicked(image);
    }
  };

  return (
    <ScrollView style={formStyles.container}>
      <Text style={formStyles.title}>Add the article</Text>
      <View>
        <View style={formStyles.fieldSet}>
          <Text style={formStyles.fieldSet.title}>Title</Text>
          <TextInput
            style={[formStyles.fieldSet.input, formStyles.shadow]}
            onChangeText={(text) => setTitle(text)}
            value={title}
            ref={inputEl}
          />
        </View>
        <View style={formStyles.fieldSet}>
          <Text style={formStyles.fieldSet.title}>Sphere</Text>
          <TextInput
            style={[formStyles.fieldSet.input, formStyles.shadow]}
            onChangeText={(text) => setSphere(text)}
            value={sphere}
          />
        </View>
        <View style={formStyles.fieldSet}>
          <Text style={formStyles.fieldSet.title}>Description</Text>
          <TextInput
            style={[
              formStyles.fieldSet.input,
              formStyles.shadow,
              formStyles.textArea,
            ]}
            onChangeText={(text) => setDescription(text)}
            value={description}
            multiline={true}
            numberOfLines={4}
          />
        </View>
        <View
          style={{
            marginTop: 20,
            ...formStyles.fieldSet,
          }}
        >
          <TouchableOpacity
            style={[formStyles.imgUploader]}
            onPress={pickImage}
            onLongPress={removeImage}
          >
            {image ? (
              <Image
                source={{ uri: image.uri }}
                style={{ width: '100%', height: 200, opacity: 0.7 }}
              />
            ) : (
              <View style={formStyles.imgUploader.textWrapper}>
                <Text style={formStyles.imgUploader.text}>
                  Tap here to upload the image
                </Text>
                <Text
                  style={[
                    formStyles.imgUploader.text,
                    formStyles.imgUploader.textFade,
                  ]}
                >
                  Use long press to remove if needed
                </Text>
              </View>
            )}
          </TouchableOpacity>
        </View>
      </View>
      <View style={formStyles.buttonWrapper}>
        <TouchableOpacity
          style={formStyles.button}
          onPress={handleArticleCreation}
        >
          <Text style={formStyles.buttonText}>Create</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const formStyles = StyleSheet.create({
  container: {
    paddingVertical: 16,
    paddingHorizontal: 20,
    backgroundColor: '#fafafa',
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 16,
    //color: '#110725',
    color: '#94778B',
    textAlign: 'center',
  },
  fieldSet: {
    marginBottom: 10,
    marginHorizontal: 6,
    title: {
      fontWeight: '600',
      fontSize: 18,
      marginBottom: 4,
      color: '#94778B',
      marginLeft: 6,
    },
    input: {
      paddingVertical: 12,
      paddingHorizontal: 16,
      color: '#6D7179',
      borderRadius: 16,
      backgroundColor: '#fff',
    },
  },
  textArea: {
    textAlignVertical: 'top',
  },
  imgUploader: {
    borderWidth: 2,
    backgroundColor: '#fff',
    borderColor: '#94778B',
    color: '#6D7179',
    borderRadius: 16,
    borderStyle: 'solid',
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    text: {
      textAlign: 'center',
      color: '#94778B',
      marginBottom: 4,
      fontWeight: '600',
      fontSize: 18,
    },
    textFade: {
      opacity: 0.6,
      fontSize: 12,
    },
    textWrapper: {
      paddingVertical: 50,
    },
  },
  shadow: {
    shadowColor: '#6D7179',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  buttonWrapper: {
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 32,
  },
  button: {
    backgroundColor: '#94778B',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    width: '100%',
    maxWidth: 200,
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

export default ArticleForm;
