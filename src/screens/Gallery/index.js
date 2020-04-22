import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

import {ListPhotoContainer} from '../../components/ListPhoto';
// import {getFilterList} from "../components/helpersForShow/getFilterList";
import {getListPhotos} from '../../redux/actions/photo';
import {connect} from 'react-redux';
// import {MyFilters} from "../components/Filters";

class galleryScreen extends Component {
  componentDidMount() {
    this.props.getListPhotos();
  }

  render() {
    const {isLoading, photosList} = this.props;
    if (isLoading) return null;
    return (
      <View style={styles.container}>
        <View style={styles.welcomeContainer}>
          <ListPhotoContainer photosList={photosList} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffa',
    // marginTop: 10,
    // height: 100,
    // width: 600,
  },
  welcomeContainer: {
    backgroundColor: '#faa',
    justifyContent: 'center',
    // marginTop: 10,
    // marginBottom: 20,
  },
});

const mapStateToProps = (state) => {
  return {
    isLoading: state.photos.isLoading,
    photosList: state.photos.photosList,
  };
};

const mapDispatchToProps = {
  getListPhotos,
  // getChangeSizePage,
  // getPage,
  // findForDeletePerson,
};
export const GalleryScreen = connect(
  mapStateToProps,
  mapDispatchToProps,
)(galleryScreen);
