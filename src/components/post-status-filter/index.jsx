import React from 'react';
import { Button } from 'reactstrap';

const PostFilter = () => {
  return (
    <div className='btn-group'>
      <Button outline color='primary'>Все</Button>
      <Button outline color="info">Понравилось</Button>
    </div>
  )
}

export default PostFilter;
