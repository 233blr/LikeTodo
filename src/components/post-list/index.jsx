import React from 'react';
import { PostItem } from '../';
import './style.css';

const PostList = ({ posts }) => {
  return (
    <ul className='app-list list-group'>
      {posts && posts.map(post => {
        const { id, ...postProps } = post;
        return <li key={id} className='list-group-item'><PostItem {...postProps} /></li>
      })}
    </ul>
  )
}

export default PostList;
