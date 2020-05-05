import React from 'react';
import {
  Text,
  StyleSheet,
  Dimensions,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';

const windowWidth = Dimensions.get('window').width;

export const SmallCardPhoto = ({
  urlSmall,
  width,
  height,
  altDescription,
  name,
  onPress,
}) => {
  const heightImage = (height * (windowWidth - 70)) / width;
  return (
    <View style={styles.containerCard}>
      <TouchableOpacity onPress={onPress}>
        <View style={[styles.containerImage, {height: heightImage}]}>
          <Image style={styles.images} source={{uri: urlSmall}} />
        </View>
      </TouchableOpacity>
      <View>
        <Text style={styles.text}>{altDescription}</Text>
        <Text style={styles.textAuthor}>
          Author:
          <Text style={styles.textName}> {name}</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerImage: {
    height: windowWidth * 0.6,
  },
  images: {
    borderRadius: 10,
    resizeMode: 'contain',
    width: null,
    height: null,
    flex: 1,
  },
  containerCard: {
    borderRadius: 10,
    padding: 10,
    margin: 10,
    flexDirection: 'column',
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
  },
  textAuthor: {
    textAlign: 'right',
    fontSize: 12,
  },
  textName: {
    textAlign: 'center',
    fontSize: 18,
  },
});
