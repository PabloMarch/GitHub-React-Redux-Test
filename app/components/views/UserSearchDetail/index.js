import React, { Component } from 'react';
// commons components
import SearchBox from 'common/SearchBox';
// stateless components
import ResultsList from './ResultsList';
import UserDetail from './UserDetail';
// css
// import './style.scss';
// dummy data
import userData from 'json!data/userInfo.json'
import reposData from 'json!data/userReposDetail.json';

class UserSearchDetail extends Component {

  constructor (props) {
    super(props);
    this.state = {
      itemsPerPage: 5,
      userData: null,
      reposData: []
    }
  }

  // Search Events
  onSearchUserRepository = e => {
    // console.warn('UserSearchDetail::onSearchUserRepository:: ', e.target.value);
    this.setState({ userData: userData });
    this.setState({ reposData: reposData });
  }

  onSearchUserTermChange = e => {
    console.warn('UserSearchDetail::onSearchUserTermChange:: ', e.target.value);
  }

  // Pagination events
  onPageChanged = e => {
    console.warn('UserSearchDetail::onPageChanged:: ', e + 1);
  }

  render() {
    const { itemsPerPage, userData, reposData } = this.state;

    return (
      <main className="user-search-detail--wrap" role="main">
        <h1 className="text-gray" style={{ marginBottom: '1em' }}>Search <strong>GitHub</strong> Repositories <small>by user</small></h1>
        <div className="row">
          <aside className="col-xs-12 col-md-3">
            <SearchBox
              searchTerm=""
              onSearch={this.onSearchUserRepository}
              onTermChange={this.onSearchUserTermChange} />
            { userData &&
              <UserDetail detail={userData} />
            }
          </aside>
          <section className="col-xs-12 col-md-9">
            { reposData.length
              ? <ResultsList
                  itemsPerPage={itemsPerPage}
                  totalItems={Math.ceil(userData.public_repos / itemsPerPage)}
                  resultsList={reposData}
                  onPageChanged={this.onPageChanged} />
              : <p style={{ marginTop: 8 }}>This user was not found on our database. <a href="#focus-to-search-input">Please try again</a>.</p>
            }
          </section>
        </div>
      </main>
    )
  }
}

export default UserSearchDetail;
