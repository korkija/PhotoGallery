import React from 'react';
import {
  Text,
  Button,
  StyleSheet,
  Image,
  View,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {debounce} from 'lodash';
import RNProgressHud from 'progress-hud';

const windowWidth = Dimensions.get('window').width;

export const DetailCardPhoto = ({photoDetails}) => {
  const navigation = useNavigation();
  const {urls, index, width, height, alt_description} = photoDetails;
  // const goBackDebounce = () => debounce(navigation.goBack(), 2000);
  const goBackDebounce = () => navigation.goBack();
  return (
    // <View >
    <TouchableOpacity
      style={styles.containerCard}
      key={index}
      onPress={() => navigation.navigate('galleryScreen')}>
      {/*onPress={() => debounce(navigation.goBack(), 1000)}>*/}
      {/*onPress={goBackDebounce}>*/}
      <Image
        //onLoadStart={() => RNProgressHud.show()}
        //onLoadEnd={() => RNProgressHud.dismiss()}
        style={styles.images}
        // source={require('../../assets/img/giphy.gif')}
        source={{uri: urls.full}}
        loadingIndicatorSource={require('../../assets/img/cat.gif')}
        // defaultSource={{
        //   uri: require('../../assets/img/cat.gif'),
        //   width: 200,
        //   height: 200,
        //   scale: 1,
        // }}
      />
    </TouchableOpacity>
    // </View>
  );
};
const styles = StyleSheet.create({
  containerCard: {
    backgroundColor: '#fbf',
    borderRadius: 10,
    flex: 1,
  },
  images: {
    paddingTop: 30,
    borderRadius: 10,
    marginBottom: 10,
    flex: 1,
    resizeMode: 'contain',
    width: null,
    height: null,
  },
});
