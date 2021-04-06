import React from 'react';
import { Header, SearchPanel, PostFilter, PostList, PostAddForm } from '../';
import './style.css';

const App = () => {
  return (
    <div className='app'>
      <Header />
      < div className='search-panel d-flex' >
        <SearchPanel />
        <PostFilter />
      </div >
      <PostList />
      <PostAddForm />
    </div>
  )
}

export default App;
