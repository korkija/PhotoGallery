import React from 'react';
import {SmallCardPhoto} from '../';
import {FlatList} from 'react-native';
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
          name={item.user.name}
          onPress={() => showDetails(item)}
        />
      )}
      keyExtractor={(item) => item.id}
    />
  );
};
