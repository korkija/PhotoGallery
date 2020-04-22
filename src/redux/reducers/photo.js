import {
  GET_PHOTOS_PENDING,
  GET_PHOTOS_REJECTED,
  GET_PHOTOS_RESOLVED,
  GET_PAGE,
  GET_SIZE_PAGE,
  GET_AGE_MAX_MIN,
  GET_RESET_FILTER,
  GET_DELETE_PERSON,
  SET_PARAM_FILTER,
  ADD_NOT_SHOW_PERSON,
} from '../../constants/actionConstants';

const initial_data = {
  isLoading: true,
  photosList: [],
  id: '',
  alt_description: '',
  urls: {},
  width: 0,
  height: 0,
};

export const photos = (state = initial_data, action) => {
  switch (action.type) {
    case GET_PHOTOS_PENDING: {
      return {
        ...state,
        isLoading: true,
        errorMsg: '',
      };
    }
    case GET_PHOTOS_RESOLVED: {
      return {
        ...state,
        isLoading: false,
        photosList: action.payLoad,
        // totalForPages: action.payLoad.length,
      };
    }
    case GET_PHOTOS_REJECTED: {
      return {
        ...state,
        isLoading: false,
        errorMsg: action.payLoad,
      };
    }
    case GET_PAGE: {
      return {
        ...state,
        page: action.payLoad.currentPage,
        totalForPages: action.payLoad.pageCount,
      };
    }
    case GET_SIZE_PAGE: {
      return {
        ...state,
        pageSize: action.payLoad,
      };
    }
    case GET_DELETE_PERSON: {
      state.peopleList[action.payLoad].show = false;
      return {
        ...state,
        peopleList: state.peopleList.filter((item) => {
          return item.show === undefined;
        }),
      };
    }
    case ADD_NOT_SHOW_PERSON: {
      state.notShow.push(action.payLoad);
      return {
        ...state,
        notShow: state.notShow,
      };
    }
    case GET_RESET_FILTER: {
      return {
        ...state,
        ageMin: state.ageMinDefault,
        ageMax: state.ageMaxDefault,
        ageMinFilter: -1,
        ageMaxFilter: 1000,
        name: '',
        genderChoose: 'both',
      };
    }
    case GET_AGE_MAX_MIN: {
      return {
        ...state,
        ageMinDefault: action.payLoad.min,
        ageMaxDefault: action.payLoad.max,
        ageMin: action.payLoad.min,
        ageMax: action.payLoad.max,
      };
    }
    case SET_PARAM_FILTER: {
      const {name, ageMin, ageMax, genderChoose} = action.payLoad;
      return {
        ...state,
        ageMinFilter: ageMin,
        ageMaxFilter: ageMax,
        genderChoose: genderChoose,
        name: name,
      };
    }
    default: {
      return state;
    }
  }
};
