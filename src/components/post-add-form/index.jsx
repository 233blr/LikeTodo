import React from 'react';
import { Button } from 'reactstrap';
import styled from 'styled-components';

const PostForm = styled.form`
display: flex;
margin-top: 20px;
input {
  width: auto;
  flex-grow: 1;
  margin-right: 3px;
}
`

const PostAddForm = () => {
  return (
    <PostForm>
      <input type='text' placeholder='О чём думаешь?' className='form-control' />
      <Button type='submit' outline color="success">Добавить</Button>
    </PostForm>
  )
}

export default PostAddForm;
