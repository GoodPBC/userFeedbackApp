//import keys and stripe library
const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeData.stripeSecretKey);

module.exports = app => {
  app.post('/api/stripe', async (req, res) => {
    // console.log(req.body);
    const charge = await stripe.charges.create({
      amount: 500,
      currency: 'usd',
      description: '25 Loors for $5',
      source: req.body.id
    });
    //srtipe token
    // console.log(charge.id);

    console.log(req.user);
  });

  app.get('/api/stripe', (req, res) => {
    //req.logout();
    res.json(token);
  });
};
