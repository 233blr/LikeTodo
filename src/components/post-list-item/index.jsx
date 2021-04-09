import React from 'react';
import './style.css';

const PostItem = ({ title, important, completed, onDelete, onToggleCompleted, onToggleImportant }) => {
  let classNames = 'app-list-item d-flex justify-content-between';
  if (important) classNames += ' important';
  if (completed) classNames += ' like';

    return (
      <div className={classNames}>
        <span className='app-list-item-label'>
          {title}
        </span>
        <div className='d-flex justify-content-center align-items-center'>
          <button type='button' className='btn-star btn-sm' onClick={onToggleImportant}>
            <i className='fa fa-star'></i>
          </button>
          <button type='button' className='btn-like btn-sm' onClick={onToggleCompleted}>
            <i className='fa fa-check'></i>
          </button>
          <button type='button' className='btn-trash btn-sm' onClick={onDelete}>
            <i className='fa fa-times'></i>
          </button>
        </div>
      </div>
    )
}

export default PostItem;
