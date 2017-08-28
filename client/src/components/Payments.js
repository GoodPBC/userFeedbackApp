import React, { Component } from 'react';
import MaterialIcon from 'react-google-material-icons';
import ReactStripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux'; //import connect helper
import * as actions from '../actions';
require('../assets/custom.css');
class Payments extends Component {
  render() {
    return (
      <ReactStripeCheckout
        name="Loor"
        description="25 Loors for $5.00"
        amount={100}
        token={token => console.log(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
        <button className="btn-large stripeButton">
          <MaterialIcon
            icon="attach_money"
            className="paymentIcon"
            size={28}
            color="white"
          />
        </button>
      </ReactStripeCheckout>
    );
  }
}

export default Payments;
