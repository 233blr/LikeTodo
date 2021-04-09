import React, { Component } from 'react';
import { Header, SearchPanel, PostFilter, PostList, PostAddForm } from '../';
import { v4 as uuidv4 } from 'uuid';
import './style.css';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [
        { id: 1, title: 'Hello World', important: false, completed: false },
        { id: 2, title: 'Hello World', important: true, completed: false },
        { id: 3, title: 'Hello World', important: false, completed: true },
        { id: 4, title: 'Hello World', important: false, completed: false },
        { id: 5, title: 'Hello World', important: false, completed: false },
        { id: 6, title: 'Hello World', important: false, completed: false },
        { id: 7, title: 'Hello World', important: false, completed: false },
      ],
    };
    this.onDeletePost = this.onDeletePost.bind(this);
    this.addItem = this.addItem.bind(this);
    this.onToggleImportant = this.onToggleImportant.bind(this);
    this.onToggleCompleted = this.onToggleCompleted.bind(this);
  }

  onDeletePost = id => {
    this.setState(({ data }) => {
      const i = data.findIndex(elem => elem.id === id);
      const arr = [...data];
      arr.splice(i, 1);
      return { data: arr };
    })
  }

  addItem = text => {
    this.setState(({ data }) => ({ data: [...data, { id: uuidv4(), title: text, important: false, completed: false }] }));
  }

  onToggleImportant = id => {
    this.setState(({ data }) => {
      const i = data.findIndex(elem => elem.id === id);
      const arr = [...data];
      const item = data[i];
      arr.splice(i, 1, { ...item, important: !item.important });
      return { data: arr };
    });
  }

  onToggleCompleted = id => {
    this.setState(({ data }) => {
      const i = data.findIndex(elem => elem.id === id);
      const arr = [...data];
      const item = data[i];
      arr.splice(i, 1, { ...item, completed: !item.completed });
      return { data: arr };
    })
  }

  render() {
  return (
    <div className='app'>
      <Header />
      <div className='search-panel d-flex'>
        <SearchPanel />
        <PostFilter />
      </div >
      <PostList posts={this.state.data}
        onDelete={this.onDeletePost}
        onToggleImportant={this.onToggleImportant}
        onToggleCompleted={this.onToggleCompleted} />
      <PostAddForm onAdd={this.addItem} />
    </div>
  )
}
}
