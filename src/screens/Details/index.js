import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {DetailCardPhoto} from '../../components/DetailCardPhoto';

import {ListPhotoContainer} from '../../components/ListPhoto';
// import {getFilterList} from "../components/helpersForShow/getFilterList";
// import {findForDeletePerson, getChangeSizePage, getPage, getPeople} from "../store/actions/people";
import {connect} from 'react-redux';
// import {MyFilters} from "../components/Filters";

export const DetailsScreen = ({navigation, route}) => {
  // if (isLoading) return null;
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
    backgroundColor: '#f1f',
    marginTop: 10,
  },
  welcomeContainer: {
    // alignItems: 'center',
    // marginTop: 10,
    marginBottom: 20,
    flex: 1,
  },
});

// const mapStateToProps = (state) => {
//   return {
//     // isLoading: state.people.isLoading,
//     // peopleFilter: getFilterList(state.people),
//   };
// };
//
// const mapDispatchToProps = {
//   // getPeople,
//   // getChangeSizePage,
//   // getPage,
//   // findForDeletePerson,
// };
// export const DetailsScreen = connect(
//   mapStateToProps,
//   mapDispatchToProps,
// )(detailsScreen);
