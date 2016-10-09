import React from 'react';

export default function UserDetail ({ detail }) {
  // console.warn('UserDetail:: ', detail);
  return (
    <section className="user-detail--wrap" style={{ marginTop: 20 }}>
      <div className="media">
        <div className="media-left">
          <a href="#">
            <img className="media-object" src={detail.avatar_url} alt="User Avatar" style={{ maxWidth: '80px' }} />
          </a>
        </div>
        <div className="media-body">
          <h4 className="media-heading" style={{textTransform: 'uppercase'}}>{detail.login}</h4>
          <ul className="list-unstyled">
            <li><strong>Type: </strong>{detail.type}</li>
            <li><strong>Public Repositories: </strong>{detail.public_repos}</li>
            <li><a href={detail.html_url} target="_blank"><strong>Go to GitHub</strong></a></li>
          </ul>
        </div>
      </div>
    </section>
  )
}
