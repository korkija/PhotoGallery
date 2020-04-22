import React from 'react';
import {
  Text,
  StyleSheet,
  Dimensions,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
// import RNProgressHud from 'progress-hud';

const windowWidth = Dimensions.get('window').width;

export const SmallCardPhoto = ({
  urlSmall,
  index,
  width,
  height,
  altDescription,
  onPress,
}) => {
  // const navigation = useNavigation();
  // const modalMessage = (idPerson) => {
  //   navigation.navigate('ModalAsk', {
  //     idPerson: idPerson,
  //     findForDeletePerson: findForDeletePerson,
  //   });
  // };

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
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerImage: {
    height: windowWidth * 0.6,
    backgroundColor: '#15c',
  },
  images: {
    resizeMode: 'contain',
    width: null,
    height: null,
    flex: 1,
  },
  containerCard: {
    backgroundColor: '#f5c',
    borderRadius: 10,
    padding: 10,
    margin: 10,
    flexDirection: 'column',
  },

  text: {
    textAlign: 'center',
    fontSize: 20,
  },
});
