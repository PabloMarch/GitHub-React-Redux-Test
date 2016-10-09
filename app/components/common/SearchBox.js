import React from 'react';

export default function SearchBox ({ searchTerm, onSearch, onTermChange }) {
  return (
    <div className="input-group">
      <input type="text" className="form-control" placeholder="Username" value={searchTerm} onChange={onTermChange}/>
      <span className="input-group-btn">
        <button type="submit" className="btn btn-primary" onClick={onSearch}>Search</button>
      </span>
    </div>
  )
}
