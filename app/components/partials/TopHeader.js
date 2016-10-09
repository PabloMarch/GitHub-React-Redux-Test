import React from 'react';

export default function TopHeader () {
  return (
    <header className="main-header">
      <nav className="navbar navbar-default">
        <div className="navbar-header">
          <a href="#">
            <img className="logo-goeuro" src="http://cdn-goeuro.com/beta/images/GoEuro-Logo.svg" title="GoEuro" alt="GoEuro" />
          </a>
        </div>
        <a className="navbar-brand pull-right" href="#">GitHub user stalker</a>
      </nav>
    </header>
  )
}
