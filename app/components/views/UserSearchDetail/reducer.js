import {
  UPDATE_USERNAME,
  UPDATE_PAGE_NUMBER,
  IS_FETCHING_USER_DATA,
  SET_USER_DATA,
  IS_FETCHING_REPOS_DATA,
  SET_REPOS_DATA,
  RESET_USER_DATA,
  RESET_DATA
} from 'actions'

const initialState = {
  userName: '',
  itemsPerPage: 5,
  pageNumber: 1,
  userData: {},
  reposData: [],
  isFetchingUserData: false,
  isFetchingReposData: false
};

export function userSearchDetail (state = initialState, action) {

  switch (action.type) {
    case UPDATE_USERNAME:
      return Object.assign({}, state, { userName: action.userName });

    case UPDATE_PAGE_NUMBER:
      return Object.assign({}, state, { pageNumber: action.pageNumber });

    case IS_FETCHING_USER_DATA:
      return Object.assign({}, state, { isFetchingUserData: action.isFetching });

    case SET_USER_DATA:
      return Object.assign({}, state, { userData: action.userData });

    case IS_FETCHING_REPOS_DATA:
      return Object.assign({}, state, { isFetchingReposData: action.isFetching });

    case SET_REPOS_DATA:
      return Object.assign({}, state, { reposData: action.reposData });

    case RESET_USER_DATA:
      return Object.assign({}, state, { userData: initialState.userData, reposData: initialState.reposData });

    case RESET_DATA:
      return initialState;

    default:
      return state;
  }

}
