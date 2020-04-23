import React from 'react';
import {StyleSheet, View} from 'react-native';
import {DetailCardPhoto} from '../../components/DetailCardPhoto';

export const DetailsScreen = ({route}) => {
  const {photo} = route.params;
  return (
    <View style={styles.container}>
      <DetailCardPhoto photoDetails={photo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
