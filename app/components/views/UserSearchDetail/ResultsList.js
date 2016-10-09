import React from 'react';
// commons components
import Pagination from 'common/Pagination';
// stateless components
import ResultsItem from './ResultsItem';

export default function ResultsList ({ resultsList = [], itemsPerPage = 1, totalItems, onPageChanged }) {
  // console.warn('ResultsList:: ', detailList);
  function renderPageList () {
    return (
      <div className="user-search-detail--item__hasResults">
        { resultsList.map( detailItem =>
          <ResultsItem key={detailItem.id} detail={detailItem} />
        )}
        { totalItems > itemsPerPage &&
          <Pagination
            current={0}
            totalItems={totalItems}
            itemsPerPage={itemsPerPage}
            onPageChanged={onPageChanged} /> }
      </div>
    )
  }

  return (
    <div className="user-search-detail--list">
      <h1 style={{ margin: '.3em 0 1.4em', fontSize: '1.4em' }}>
        Results for user:
        <span className="text-gray-light"> { !!resultsList.length && !!resultsList[0].owner &&  resultsList[0].owner.login }</span>
      </h1>
      { resultsList.length
        ? renderPageList()
        : <p>This user does not have any repository associated.</p>
      }
    </div>
  )
}
