//import keys and stripe library
const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeData.stripeSecretKey);

module.exports = app => {
  app.post('/api/stripe', async (req, res) => {
    // console.log(req.body);
    const charge = await stripe.charges.create({
      amount: 500,
      currency: 'usd',
      description: 'Example charge',
      source: req.body.id
    });
    console.log(charge.id);
  });

  // app.get('/api/stripe', (req, res) => {
  //   //req.logout();
  //   res.json(token);
  // });
};
