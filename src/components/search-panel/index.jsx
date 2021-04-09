import React from 'react';
import './style.css';

const SearchPanel = ({ onAddTerm }) => {
  return (
    <input
      className='form-control search-input'
      type='text'
      placeholder='Filter'
      onChange={onAddTerm} />
  )
}

export default SearchPanel;
