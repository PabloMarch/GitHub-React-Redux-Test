import React from 'react';
import ResultsList from 'ResultsList';

export default function Results ({ reposData, isUserValid, isIdValid, onTryAgainBtnClick }) {
  return (
    <div className="user-search-detail--content" style={{ minHeight: '15em' }}>
      { isUserValid
        ?
          isIdValid
          ?
            <ResultsList resultsList={reposData} />
          :
            <p className="text-center" style={{ marginTop: 8 }}>
              This user was not found on our database.
              {' '}
              <a href="#focus-to-search-input" onClick={onTryAgainBtnClick}>Please try again</a>.
            </p>
        :
          <p className="text-center" style={{ marginTop: 8 }}>Please insert a username.</p>
      }
    </div>
  )
}
