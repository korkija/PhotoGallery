import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {ListPhotoContainer} from '../../components/ListPhoto';
import {getListPhotos} from '../../redux/actions/photo';
import {connect} from 'react-redux';

class galleryScreen extends Component {
  componentDidMount() {
    this.props.getListPhotos();
  }

  render() {
    const {isLoading, photosList} = this.props;
    if (isLoading) {
      return null;
    }
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
  },
  welcomeContainer: {
    justifyContent: 'center',
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
};
export const GalleryScreen = connect(
  mapStateToProps,
  mapDispatchToProps,
)(galleryScreen);
