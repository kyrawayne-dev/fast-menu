import React from 'react';
import { withGlobalState } from 'react-globally';
import '../stylesheets/CheckoutCart.css';

const CheckoutCart = ({globalState}) => {
    return (
      <div>
        <h1>Checkout</h1>
        <ul className="checkoutcart">
        {globalState.select.map((selection, index) => (
          <li className="checkoutcart-item" key={"checkout-" + index}>
            {selection.select.size.charAt(0).toUpperCase() + selection.select.size.slice(1)} {selection.item} 
          </li>
        ))}
        </ul>
      </div>
    )
}

export default withGlobalState(CheckoutCart);