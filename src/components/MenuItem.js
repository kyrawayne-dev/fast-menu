import React, { Component } from 'react';
import Options from './Options';
import '../stylesheets/MenuItem.css';

export default class MenuItem extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="menu">
        {this.props.items.map(item => (
          <div className="menuitem" key={item.item}>
          <h1>{item.item}</h1>
          <h2><Options item={item.item} options={item.options}></Options></h2>
        </div>
        ))}
      </div>
    )
  }
}
