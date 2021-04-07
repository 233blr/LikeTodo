import React from 'react';
import { PostItem } from '../';
import './style.css';
import { ListGroup, ListGroupItem } from 'reactstrap';

const PostList = ({ posts, onDelete }) => {
  return (
    <ListGroup className='app-list'>
      {posts && posts.map(post => {
        const { id, ...postProps } = post;
        return (
          <ListGroupItem key={id} className='list-group-item'>
            <PostItem
              {...postProps}
              onDelete={() => onDelete(id)} />
          </ListGroupItem>
        )
      })}
    </ListGroup>
  )
}

export default PostList;
