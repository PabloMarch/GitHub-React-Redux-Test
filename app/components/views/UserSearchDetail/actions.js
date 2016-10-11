import fetch from 'isomorphic-fetch';
// dummy data
import userData from 'json!data/userInfo.json'
import reposData from 'json!data/userReposDetail.json';

export const UPDATE_USERNAME = 'UPDATE_USERNAME';
export const UPDATE_PAGE_NUMBER = 'UPDATE_PAGE_NUMBER';
export const IS_FETCHING_USER_DATA = 'IS_FETCHING_USER_DATA';
export const SET_USER_DATA = 'SET_USER_DATA';
export const IS_FETCHING_REPOS_DATA = 'IS_FETCHING_REPOS_DATA';
export const SET_REPOS_DATA = 'SET_REPOS_DATA';
export const RESET_USER_DATA = 'RESET_USER_DATA';
export const RESET_DATA = 'RESET_DATA';

// Move later to a config file
const config = {
  API_ENDPOINT: '//api.github.com'
};

// ## UI actions
export function updateUserName (userName) {
  return {
    type: UPDATE_USERNAME,
    userName
  }
}

export function updatePageNumber (pageNumber) {
  return {
    type: UPDATE_PAGE_NUMBER,
    pageNumber
  }
}

// ## Endpoints
// # TODO: Refactoring, reuse fetch functions

// User request actions
function isFetchingUserData (isFetching) {
  return {
    type: IS_FETCHING_USER_DATA,
    isFetching
  }
}

function setUserData (userData) {
  return {
    type: SET_USER_DATA,
    userData
  }
}

export function fetchUserInfo () {
  return async (dispatch, getState) => {
    try {
      dispatch(isFetchingUserData(true));
      const { userName, itemsPerPage, pageNumber } = getState().userSearchDetail;
      const response = await( await( fetch(`${config.API_ENDPOINT}/users/${userName}`))).json();
      // dispatch(resetUserData());
      if (response && Object.keys(response).length) {
        // console.warn('fetchUserInfo::response: ', response);
        dispatch(setUserData(response));
        return response;
      }
      console.warn('fetchUserInfo::response::error: ', 'There is no account associated to this username.');
    } catch (error) {
      // TODO: Install toastr for box messages
      console.warn('fetchUserInfo::catch::error: Service Unavailable', error);
    } finally {
      dispatch(isFetchingUserData(false));
    }
  }
}

// TODO: OPtimizing fetch using apiCaller utility
// export function fetchUserInfo () {
//   return (dispatch, getState) => {
//     dispatch(isFetchingUserData(true));
//
//     const { userName, itemsPerPage, pageNumber } = getState().userSearchDetail;
//     const response = callApi(`users/${userName}`).then(response => {
//       if (response && Object.keys(response).length) {
//         console.warn('fetchUserInfo::response: ', response);
//         dispatch(setUserData(response));
//         return response;
//       }
//       console.warn('fetchUserInfo::response::error: ', 'There is no account associated to this username.');
//     });
//
//     dispatch(isFetchingUserData(false));
//     return response;
//   }
// }

// Repository request actions
function isFetchingReposData (isFetching) {
  return {
    type: IS_FETCHING_REPOS_DATA,
    isFetching
  }
}

function setReposData (reposData) {
  return {
    type: SET_REPOS_DATA,
    reposData
  }
}

export function fetchUserRepos () {
  return async (dispatch, getState) => {
    try {
      dispatch(isFetchingReposData(true));
      const { userName, pageNumber, itemsPerPage } = getState().userSearchDetail;
      const pager = `page=${pageNumber}&per_page=${itemsPerPage}`;
      const response = await( await( fetch(`${config.API_ENDPOINT}/users/${userName}/repos?${pager}`))).json();

      if (response && response.length) {
        // console.warn('fetchUserRepos::response: ', response);
        dispatch(setReposData(response));
        return response;
      }
      // console.warn('fetchUserRepos::response::error: ', response);
    } catch (error) {
      // TODO: Install toastr for box messages
      console.warn('fetchUserInfo::catch::error:', error);
    } finally {
      dispatch(isFetchingReposData(false));
    }
  }
}

// Utils
function resetUserData () {
  return {
    type: RESET_USER_DATA
  }
}

export function resetData () {
  return {
    type: RESET_DATA
  }
}
