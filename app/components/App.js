import React, { Component } from 'react';
import TopHeader from './partials/TopHeader';
import Footer from './partials/Footer';
import UserSearchDetail from './views/UserSearchDetail';

class App extends Component {
  render() {
    return (
      <div className="main-wrapper">
        <TopHeader />
        <div className="container">
          {/* // This app doesn't need routers yet but add all this logic here in otherwise. */}
          <UserSearchDetail />
          <Footer />
        </div>
      </div>
    )
  }
}

export default App;
