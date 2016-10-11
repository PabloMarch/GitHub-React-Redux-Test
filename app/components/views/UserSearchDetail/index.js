import React, { Component } from 'react';
import { connect } from 'react-redux';
// commons components
import Loader from 'common/Loader';
import SearchBox from 'common/SearchBox';
import Pagination from 'common/Pagination';
// stateless components
import Results from './stateless/Results';
import UserDetail from './stateless/UserDetail';
// actions
import {
  updateUserName,
  updatePageNumber,
  fetchUserInfo,
  fetchUserRepos,
  resetData
} from './actions';
// css
// import './style.scss';

class UserSearchDetail extends Component {

  componentDidMount () {
    this.input = document.getElementById('search-box');
  }

  // Search events
  onSearchUserRepository = () => {
    const { userName } = this.props.data;
    const isUserNameValid = userName.length > 1;
    // TODO: Validate 'isUserNameValid' on a sophisticated way
    if (isUserNameValid) {
      const { dispatch } = this.props;
      dispatch(fetchUserInfo())
        .then(response => {
          if (response && response.id) {
            dispatch(fetchUserRepos());
          }
        });
    } else {
      console.warn('onSearchUserRepository::validation:', 'Please add a valid user name.');
    }
  }

  onUserNameChange = e => {
    if (e.keyCode === 13) {
      this.onSearchUserRepository();
    } else {
      this.props.dispatch(updateUserName(e.target.value));
    }
    e.preventDefault();
  }

  // Pagination events
  onPageChanged = e => {
    // console.warn('UserSearchDetail::onPageChanged:: ', e + 1);
    const { dispatch } = this.props;
    dispatch(updatePageNumber(e+1));
    dispatch(fetchUserRepos());
  }

  onCleanUserName = e => {
    this.cleanSearchField();
    this.props.dispatch(resetData());
  }

  onTryAgainBtnClick = e => {
    this.cleanSearchField();
    e.preventDefault();
  }

  cleanSearchField () {
    this.props.dispatch(updateUserName(''));
    this.input.value = '';
    this.input.focus();
  }

  render() {
    const {
      userName,
      itemsPerPage,
      pageNumber,
      userData,
      reposData,
      isFetchingUserData,
      isFetchingReposData
    } = this.props.data;

    const { id, login, public_repos = 0 } = userData;
    const totalItems = Math.ceil( public_repos / itemsPerPage);
    const isUserValid = !!Object.keys(userData).length;

    return (
      <main className="user-search-detail--wrap" role="main" style={{minHeight: '20em'}}>
        <h1 className="text-gray" style={{ marginBottom: '1em' }}>Search <strong>GitHub</strong> Repositories <small>by user</small></h1>
        <div className="row">
          <aside className="col-xs-12 col-md-3">
            <SearchBox
              searchTerm={userName}
              onSearch={this.onSearchUserRepository}
              onTermChange={this.onUserNameChange}
              onCleanField={this.onCleanUserName} />
            { isUserValid &&
              userData.id &&
              <Loader isLoading={isFetchingUserData}>
                <UserDetail detail={userData} />
              </Loader>
            }
          </aside>
          <section className="col-xs-12 col-md-9">
            { id &&
              <h1 style={{ margin: '.3em 0 1.4em', fontSize: '1.4em' }}>
                Results for user:
                <span className="text-gray-light"> {login}</span>
              </h1>
            }
            <Loader isLoading={isFetchingReposData}>
              <Results
                reposData={reposData}
                isUserValid={isUserValid}
                isIdValid={id}
                onTryAgainBtnClick={this.onTryAgainBtnClick} />
            </Loader>
            { !!reposData.length &&
              public_repos > itemsPerPage &&
              <Pagination
                current={pageNumber-1}
                totalItems={totalItems}
                itemsPerPage={itemsPerPage}
                onPageChanged={this.onPageChanged} />
            }
          </section>
        </div>
      </main>
    )
  }
}

function mapStateToProps(state) {
  return {
    data: state.userSearchDetail
  };
}

export default connect(mapStateToProps)(UserSearchDetail);
