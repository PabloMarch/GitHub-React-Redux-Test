import React from 'react';
import moment from 'moment';

export default function ResultsItem ({ detail }) {
  // console.warn('ResultsItem:: ', detail);
  return (
    <article className="user-search-detail--item panel panel-primary">
      <header className="panel-heading">
        <h1 className="panel-title" style={{ textTransform: 'capitalize' }}>
          {detail.name.replace(/-/g, ' ')}
          <a href={`github-mac://openRepo/${detail.clone_url}`} className="pull-right" title="Clone in Mac">
            <i className="glyphicon glyphicon-save" />
          </a>
        </h1>
      </header>
      <div className="panel-body">
        <p style={{fontSize: '1.1em'}}>{detail.description}</p>
        <ul style={{ paddingLeft: '1.2em' }}>
          <li><strong>Created Date:</strong> {moment(detail.created_at).format('LL')}</li>
          <li><strong>Watchers:</strong> {detail.watchers}</li>
          <li><strong>Folks:</strong> {detail.forks}</li>
        </ul>
        <p></p>
      </div>
    </article>
  )
}
