import React from 'react';
import { Header, SearchPanel, PostFilter, PostList, PostAddForm } from '../';
import './style.css';

const App = () => {

  const data = [
    {id: 1, label: 'Hello World', important: false },
    {id: 2, label: 'Some Text', important: false },
    {id: 3, label: 'New Text', important: true },
  ]

  return (
    <div className='app'>
      <Header />
      < div className='search-panel d-flex' >
        <SearchPanel />
        <PostFilter />
      </div >
      <PostList posts={data} />
      <PostAddForm />
    </div>
  )
}

export default App;
