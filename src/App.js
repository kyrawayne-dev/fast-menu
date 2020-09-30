import React from 'react';
import './stylesheets/App.css'
import MenuItem from './components/MenuItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHamburger } from '@fortawesome/free-solid-svg-icons'
// import selections from './selections'
import { withGlobalState } from 'react-globally';
import CheckoutCart from './components/CheckoutCart';
import selections from './selections';
// import axios from 'axios';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      menu: []
    };
    this.handleSend = this.handleSend.bind(this);
  }

  handleSend(){
    this.props.setGlobalState(prevGlobalState => ({
      select: []
    }))
  }

  componentDidMount(){
    // axios.get('https://mobile-dev-code-project.s3-us-west-2.amazonaws.com/project.json', {
    //   withCredentials: false,
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'Accept': 'application/json',
    //     'X-Requested-With': 'XMLHttpRequest'
    //   }
    // })
    // .then(response => response.json())
    // .then(
    //   (result) => {
    //     this.setState({
    //       menu: result.menu,
    //       isLoaded: true
    //     });
    //   }, (error) => {
    //     this.setState({
    //       error: error,
    //       isLoaded: false
    //     });
    //   }
    // )
    this.setState({
      error: null,
      isLoaded: true,
      menu: [
          {
            "item": "Burger",
            "options": [
              {
                "size": "regular",
                "price": 3
              }
            ]
          },
          {
            "item": "Soda",
            "options": [
              {
                "size": "small",
                "price": 0.99
              },
              {
                "size": "regular",
                "price": 1.5
              },
              {
                "size": "large",
                "price": 2
              },
              {
                "size": "too large",
                "price": 3.5
              }
            ]
          },
          {
            "item": "Fries",
            "options": [
              {
                "size": "small",
                "price": 0.99
              },
              {
                "size": "regular",
                "price": 1.5
              },
              {
                "size": "large",
                "price": 1.99
              }
            ]
          }
        ]
    })
  }

  render(){
    const { error, isLoaded, menu } = this.state;
    let content = ''
    if (isLoaded) {
      content = (
        <div className="flex-between">
          <div className="width-50">
            <MenuItem items={menu}/>
          </div>
          <div className="width-50">
            <CheckoutCart items={selections}/>
            <button className="send-btn" onClick={this.handleSend}>Send to Kitchen</button>
          </div>
        </div>
      );
    } else {
      content = (<div>Loading...</div>);
    }
    return (
      <div className="app">
        <FontAwesomeIcon icon={faHamburger} className="logo"/>
        <h1>
          Welcome to
          <br/>
          the <span className="app-name">Fast Menu!</span>
        </h1>
        {content}
      </div>
    );
  }
}

export default withGlobalState(App);