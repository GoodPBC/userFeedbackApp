import React, { Component } from 'react';
import MaterialIcon from 'react-google-material-icons';
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
      >
        <button
          className="btn btn-floating btn-large black"
          style={{ color: '#ffea00 !important' }}
        >
          <MaterialIcon icon="attach_money" size={28} color="#ffea00" />
        </button>
      </ReactStripeCheckout>
    );
  }
}

export default Payments;
