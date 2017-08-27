import React, { Component } from 'react';
import ReactStripeCheckout from 'react-stripe-checkout';

class Payments extends Component {
  render() {
    return (
      <ReactStripeCheckout
        name="Loor"
        description="25 Loors for $5.00"
        amount={100}
        token={token => console.log(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      />
    );
  }
}

export default Payments;
