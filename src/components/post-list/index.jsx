import React from 'react';
import { PostItem } from '../';

const PostList = () => {
  return (
    <ul className='app-list list-group'>
      <PostItem />
      <PostItem />
      <PostItem />
    </ul>
  )
}

export default PostList;
