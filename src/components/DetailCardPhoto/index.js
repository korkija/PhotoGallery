import React, {useState} from 'react';
import {
  StyleSheet,
  Image,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {debounce} from 'lodash';

export const DetailCardPhoto = ({photoDetails}) => {
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false);
  const [flexImage, setFlexImage] = useState(0);
  const [widthHeight, setWidthHeight] = useState(1);
  const {urls, index} = photoDetails;
  const goBackDebounce = debounce(() => {
    navigation.goBack();
  }, 10);

  return (
    <TouchableOpacity
      style={styles.containerCard}
      key={index}
      onPress={goBackDebounce}>
      {isLoading && (
        <ActivityIndicator
          style={styles.imageWaiting}
          size="large"
          color="#000"
        />
      )}
      <Image
        style={[
          styles.images,
          {flex: flexImage, height: widthHeight, width: widthHeight},
        ]}
        onLoadStart={() => {
          setWidthHeight(1);
          setIsLoading(true);
        }}
        onLoadEnd={() => {
          setWidthHeight(null);
          setIsLoading(false);
          setFlexImage(1);
        }}
        source={{uri: urls.full}}
      />
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  containerCard: {
    borderRadius: 10,
    padding: 10,
    flex: 1,
  },
  images: {
    borderRadius: 10,
    flex: 0,
    resizeMode: 'contain',
    width: null,
    height: null,
  },
  imageWaiting: {
    flex: 1,
    resizeMode: 'contain',
    width: null,
    height: null,
  },
});
