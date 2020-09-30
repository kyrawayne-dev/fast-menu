import React, { Component } from 'react';
import { withGlobalState } from 'react-globally';
import '../stylesheets/Options.css'

class Options extends Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(option){
    this.props.setGlobalState(prevGlobalState => ({
      select: [...prevGlobalState.select, option]
    }))
  }

  render() {
    return (
      <div>
        <div className="optionheaders">
          <span>Size</span>
          <span>Price</span>
        </div>
        <ul className="options">
          {this.props.options.map(option => (
            <li className="optionitem" key={this.props.item + "-" + option.size} 
            onClick={() => this.handleClick({item: this.props.item, select: option})}>
              <span>{option.size.charAt(0).toUpperCase() + option.size.slice(1)}</span>
              <span>$ {option.price.toFixed(2)}</span>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default withGlobalState(Options)
