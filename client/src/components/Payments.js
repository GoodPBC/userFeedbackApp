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
        amount={500}
        token={token => this.props.sendStripeTokenToServer(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
        {/* this.props.sendStripeTokenToServer made availabele by action creator*/}
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

export default connect(null, actions)(Payments);
