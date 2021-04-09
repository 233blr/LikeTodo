import React, { Component } from 'react';
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

export default class PostAddForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: ''
    }
    this.onAddText = this.onAddText.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onAddText(e) {
    this.setState({
      text: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    if (!this.state.text) {
      alert('add text')
      return
    }
    this.props.onAdd(this.state.text);
    this.setState({
      text: ''
    });
  }

  render() {
    return (
      <PostForm onSubmit={this.onSubmit}>
        <input type='text' placeholder='Add task...' className='form-control' onChange={this.onAddText} value={this.state.text} />
        <Button type='submit' color="success">Add</Button>
    </PostForm>
  )
  }
}
