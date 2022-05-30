const app = require('../../loaders/express-handlebars');

app.get('/', async function (req, res, next) {
	res.render('landingPage', {});
});

module.exports = app;
