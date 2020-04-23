import React from 'react';
import {SmallCardPhoto} from '../SmallCardPhoto';
import {Text, View, FlatList, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export const ListPhotoContainer = ({photosList}) => {
  const navigation = useNavigation();
  const showDetails = (photo) => {
    navigation.navigate('detailsScreen', {photo: photo});
  };

  return (
    <FlatList
      data={photosList}
      renderItem={({item}) => (
        <SmallCardPhoto
          urlSmall={item.urls.small}
          index={item.id}
          width={item.width}
          height={item.height}
          altDescription={item.alt_description}
          onPress={() => showDetails(item)}
        />
      )}
      keyExtractor={(item, index) => item.id}
    />
  );
};
//
// const styles = StyleSheet.create({
//   listCard: {
//     backgroundColor: '#aca',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });