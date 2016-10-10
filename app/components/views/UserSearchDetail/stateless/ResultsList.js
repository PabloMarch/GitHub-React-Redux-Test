import React from 'react';
// stateless components
import ResultsItem from './ResultsItem';

export default function ResultsList ({ resultsList = [], userName }) {
  // console.warn('ResultsList:: ', detailList);
  function renderPageList () {
    return (
      <div className="user-search-detail--item__hasResults">
        { resultsList.map( detailItem =>
          <ResultsItem key={detailItem.id} detail={detailItem} />
        )}
      </div>
    )
  }

  return (
    <div className="user-search-detail--list">
      <h1 style={{ margin: '.3em 0 1.4em', fontSize: '1.4em' }}>
        Results for user:
        <span className="text-gray-light"> {userName}</span>
      </h1>
      { resultsList.length
        ? renderPageList()
        : <p className="text-center">This user does not have any repository associated.</p>
      }
    </div>
  )
}
