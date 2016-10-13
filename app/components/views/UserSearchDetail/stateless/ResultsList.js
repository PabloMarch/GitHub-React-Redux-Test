import React from 'react';
// stateless components
import ResultsItem from './ResultsItem';

export default function ResultsList ({ resultsList = [] }) {
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
      { resultsList.length
        ? renderPageList()
        : <p className="text-center">This user does not have any repository associated.</p>
      }
    </div>
  )
}
