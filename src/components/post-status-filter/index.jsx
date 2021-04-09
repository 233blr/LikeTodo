import React from 'react';
import { Button } from 'reactstrap';

const PostFilter = () => {
  return (
    <div className='btn-group'>
      <Button outline color='primary'>All</Button>
      <Button outline color="info">Completed</Button>
    </div>
  )
}

export default PostFilter;
