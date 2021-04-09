import React from 'react';
import styled from 'styled-components';

const Header = styled.div`
display: flex;
align-items: flex-end;
  justify-content: space-between;
  h1 {
    font-size: 26px;
    :hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }
  h2 {
    font-size: 1.2rem;
  color: grey;
  }
`

const AppHeader = ({ tasksCounter, completedTasksCounter }) => {
  return (
    <Header>
      <h1>Account Name</h1>
      <h2>{tasksCounter} tasks, {completedTasksCounter} completed</h2>
    </Header>
  )
}

export default AppHeader;
