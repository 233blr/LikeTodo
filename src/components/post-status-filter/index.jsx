import React, { Component } from 'react';
import { Button } from 'reactstrap';

export default class PostFilter extends Component {
  constructor(props) {
    super(props);
    this.buttons = ['Important', 'Completed', 'All'];
  }

  render() {
    const buttons = this.buttons.map(item => {
      const clazz = this.props.filter === item ? 'btn-success' : 'btn-light';
      return <Button className={`btn ${clazz}`} key={item} onClick={() => this.props.onToggleFilter(item)}>{item}</Button>;
    });

    return <div className='btn-group'>{buttons}</div>
  };
};
