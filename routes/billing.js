//import keys and stripe library
const keys = require('../config/keys');
const stripe = require('stripe')(stripeData.stripeSecretKey);

module.exports = app => {
  app.post('/api/stripe', async (req, res) => {
    // console.log(req.body);

    if (!req.user) {
      return res.status(401).send({ error: 'You must login' });
    }

    const charge = await stripe.charges.create({
      amount: 500,
      currency: 'usd',
      description: '25 Loors for $5',
      source: req.body.id
    });
    //srtipe token
    // console.log(charge.id);

    let creditBlalance = (req.user.credits += 5); //update user credit balance
    console.log(creditBlalance);
    const user = await req.user.save(); // save updated user
    res.send(user);
  });

  app.get('/api/stripe', (req, res) => {
    //req.logout();
    res.json(token);
  });
};
