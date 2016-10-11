import React from 'react';

export default function SearchBox ({ searchTerm, onSearch, onTermChange, onCleanField }) {
  return (
    <div className="input-group">
      <input
        type="text"
        id="search-box"
        className="form-control"
        placeholder="Username"
        defaultValue={searchTerm}
        onKeyUp={onTermChange}
        style={{ paddingRight: '30px' }} />

      <span className="input-group-btn">
        { searchTerm &&
          <a className="search-clean-icon glyphicon glyphicon-remove-circle" onClick={onCleanField} />
        }
        <button
          type="submit"
          className="btn btn-primary"
          onClick={onSearch}>
          Search
        </button>
      </span>
    </div>
  )
}
