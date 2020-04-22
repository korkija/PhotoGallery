import axios from 'axios';
// import {sortPeopleByName} from '../helpers/sortPeopleByName';
// import {findMinMax} from '../helpers/findMinMax';

import {URL_PHOTOS} from '../../constants/configApp';
import {
  GET_PHOTOS_PENDING,
  GET_PHOTOS_REJECTED,
  GET_PHOTOS_RESOLVED,
  GET_SIZE_PAGE,
  GET_PAGE,
  GET_AGE_MAX_MIN,
  GET_RESET_FILTER,
  GET_DELETE_PERSON,
  SET_PARAM_FILTER,
  ADD_NOT_SHOW_PERSON,
} from '../../constants/actionConstants';

const getPhotosPending = () => ({
  type: GET_PHOTOS_PENDING,
});

const getPhotosResolved = (payLoad) => ({
  type: GET_PHOTOS_RESOLVED,
  payLoad,
});

const getPhotosRejected = () => ({
  type: GET_PHOTOS_REJECTED,
  payLoad: 'Something wrong!',
});

// export const getChangeSizePage = (payLoad, payLoadSize) => (
//   dispatch,
//   getState,
// ) => {
//   let {people} = getState();
//   dispatch(setSizePage(payLoadSize));
//   dispatch(getPage(Math.ceil((people.pageSize * payLoad) / payLoadSize)));
// };
export const setSizePage = (pageSize) => ({
  type: GET_SIZE_PAGE,
  payLoad: {
    pageSize,
  },
});

const deletePerson = (ID) => ({
  type: GET_DELETE_PERSON,
  payLoad: ID,
});

const notShowPeople = (ID) => ({
  type: ADD_NOT_SHOW_PERSON,
  payLoad: ID,
});

// export const findForDeletePerson = (ID) => (dispatch, getState) => {
//   const {people} = getState();
//   const indexPeople = people.peopleList.findIndex((item) => item.id === ID);
//   dispatch(notShowPeople(ID));
//   dispatch(deletePerson(indexPeople));
// };

export const resetFilter = () => ({
  type: GET_RESET_FILTER,
});

export const getPage = (currentPage, pageCount) => ({
  type: GET_PAGE,
  payLoad: {
    currentPage,
    pageCount,
  },
});

const setAgeMaxMin = ({min, max}) => ({
  type: GET_AGE_MAX_MIN,
  payLoad: {
    min,
    max,
  },
});

export const setParamFilter = ({name, ageMin, ageMax, genderChoose}) => ({
  type: SET_PARAM_FILTER,
  payLoad: {
    name,
    ageMin,
    ageMax,
    genderChoose,
  },
});

export const getListPhotos = () => (dispatch) => {
  // export const getListPhotos = () => (dispatch, getState) => {
  dispatch(getPhotosPending());
  axios
    .get(URL_PHOTOS)
    .then(({data}) => {
      // const {people} = getState();
      console.log('data.result');
      console.log(data);
      dispatch(getPhotosResolved(data));
    })
    .catch((error) => {
      console.log(error);
      dispatch(getPhotosRejected());
    });
};
