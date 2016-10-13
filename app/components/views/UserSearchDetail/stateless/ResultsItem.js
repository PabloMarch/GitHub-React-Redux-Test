import React from 'react';
import moment from 'moment';

export default function ResultsItem ({ detail }) {
  // console.warn('ResultsItem:: ', detail);
  const repoUrl = detail.clone_url.replace('.git', '');
  return (
    <article className="user-search-detail--item panel panel-primary">
      <header className="panel-heading">
        <h1 className="panel-title" style={{ textTransform: 'capitalize' }}>
          <span className="user-search-detail--title">{detail.name.replace(/-/g, ' ')}</span>
          <a href={`github-mac://openRepo/${detail.clone_url}`} className="cta-clone pull-right" title="Clone in Mac">
            <i className="glyphicon glyphicon-save" />
          </a>
        </h1>
      </header>
      <div className="panel-body">
        <p style={{fontSize: '1.1em'}}>{detail.description}</p>
        <ul style={{ paddingLeft: '1.2em' }}>
          { detail.homepage &&
            <li><strong>Home Page:</strong> <a href={detail.homepage} target="_blank">{detail.homepage}</a></li>
          }
          <li><strong>GitHub:</strong> <a href={repoUrl} target="_blank">{repoUrl}</a></li>
          <li><strong>Created Date:</strong> {moment(detail.created_at).format('LL')}</li>
          <li><strong>Watchers:</strong> {detail.watchers}</li>
          <li><strong>Folks:</strong> {detail.forks}</li>
        </ul>
      </div>
    </article>
  )
}
