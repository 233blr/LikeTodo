import React, { Component } from 'react';
import { Header, SearchPanel, PostFilter, PostList, PostAddForm } from '../';
import './style.css';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [
        { id: 1, label: 'Hello World', important: false },
        { id: 2, label: 'Some Text', important: false },
        { id: 3, label: 'New Text', important: false },
        { id: 4, label: 'Some New Text', important: false },
        { id: 5, label: 'And New Text', important: false },
      ],
    };
    this.onDeletePost = this.onDeletePost.bind(this);
  }

  onDeletePost = id => {
    this.setState(({ data }) => {
      const i = data.findIndex(elem => elem.id === id);
      const arr = [...data];
      arr.splice(i, 1);
      return {
        data: [...arr]
      }
    })
  }

  render() {
  return (
    <div className='app'>
      <Header />
      < div className='search-panel d-flex' >
        <SearchPanel />
        <PostFilter />
      </div >
      <PostList
        posts={this.state.data}
        onDelete={this.onDeletePost} />
      <PostAddForm />
    </div>
  )
}
}
