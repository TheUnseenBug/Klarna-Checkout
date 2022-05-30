const express = require('express');
const app = express();

/**
 * 	Set URLS for our Routes
 **/
// Set Client Route URLS
app.use('/', require('../routes/client/ladningPage'));
app.use('/cart-checkout', require('../routes/client/cartCheckout'));
app.use('/checkout', require('../routes/client/index'));
app.use('/confirmation', require('../routes/client/confirmation'));

// Set Server Route URLS
app.use('/push', require('../routes/server/push'));
app.use('/order-lines', require('../routes/server/order-lines'));

// Set Server & Client (Error) Route URLS
app.use('/500', require('../routes/both/500.js'));
app.use('*', require('../routes/both/404.js')); // Always keep as last route

module.exports = app;
