import React, { Component } from 'react';
import { Header, SearchPanel, PostFilter, PostList, PostAddForm } from '../';
import { v4 as uuidv4 } from 'uuid';
import './style.css';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [
        { id: 1, title: 'laboriosam mollitia et', important: false, completed: false },
        { id: 2, title: 'quo laboriosam', important: true, completed: false },
        { id: 3, title: 'ipsa repellendus fugit nisi', important: false, completed: true },
        { id: 4, title: 'aliquam aut quasi', important: false, completed: false },
        { id: 5, title: 'quia provident illum', important: false, completed: false },
        { id: 6, title: 'voluptatem incidunt', important: false, completed: true },
        { id: 7, title: 'suscipit repellat', important: false, completed: true },
        { id: 8, title: 'suscipit repellat', important: true, completed: false },
        { id: 9, title: 'esse quibusdam', important: false, completed: false },
        { id: 10, title: 'deleniti aut qui', important: true, completed: false },
        { id: 11, title: 'react js', important: true, completed: false },
      ],
      term: '',
      filter: 'All',
    };
    this.onDeletePost = this.onDeletePost.bind(this);
    this.addItem = this.addItem.bind(this);
    this.onToggleImportant = this.onToggleImportant.bind(this);
    this.onToggleCompleted = this.onToggleCompleted.bind(this);
    this.onAddTerm = this.onAddTerm.bind(this);
    this.onToggle = this.onToggle.bind(this);
    this.filterPost = this.filterPost.bind(this);
  }

  filterPost = (items, type) => {
    if (type === 'Completed') {
      return items.filter(item => item.completed)
    } else if (type === 'Important') {
      return items.filter(item => item.important)
    } else {
      return items
    }
  }

  searchPost = (items, term) => {
    if (!term) return items;
    if (term) return items.filter(item => (item.title.indexOf(term) > -1));
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

  onToggle = (id, value) => {
    this.setState(({ data }) => {
      const i = data.findIndex(elem => elem.id === id);
      const arr = [...data];
      const item = data[i];
      if (value) {
        arr.splice(i, 1, { ...item, important: !item.important });
      } else {
        arr.splice(i, 1, { ...item, completed: !item.completed });
      }
      return { data: arr };
    });
  }

  onToggleImportant = id => this.onToggle(id, true);

  onToggleCompleted = id => this.onToggle(id, false);

  onAddTerm = event => this.setState({ term: event.target.value });

  onToggleFilter = value => this.setState({ filter: value });

  render() {
    const { data, term } = this.state;
    const filteredPosts = this.filterPost(this.searchPost(data, term), this.state.filter);

  return (
    <div className='app'>
      <Header tasksCounter={this.state.data.length}
        completedTasksCounter={this.state.data.filter(item => item.completed).length} />
      <div className='search-panel d-flex'>
        <SearchPanel onAddTerm={this.onAddTerm} />
        <PostFilter filter={this.state.filter}
          onToggleFilter={this.onToggleFilter} />
      </div >
      <PostList posts={filteredPosts}
        onDelete={this.onDeletePost}
        onToggleImportant={this.onToggleImportant}
        onToggleCompleted={this.onToggleCompleted} />
      <PostAddForm onAdd={this.addItem} />
    </div>
  )
}
}
