import React from 'react';

export default function ResultsItem ({ detail }) {
  // console.warn('ResultsItem:: ', detail);
  return (
    <article className="user-search-detail--item panel panel-default">
      <header className="panel-heading">
        <h1 className="panel-title">{detail.name}</h1>
      </header>
      <div className="panel-body">
        <p>{detail.description}</p>
      </div>
    </article>
  )
}
