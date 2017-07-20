const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

const index = require('./routes/index');
const guest = require('./routes/guest');
const company = require('./routes/company');
const template = require('./routes/template');

app.set('port', process.env.PORT || 5000);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/guests', guest);
app.use('/companies', company);
app.use('/templates', template);
app.use('/', index);

// Start node server
app.listen(app.get('port'), function() {
	console.log('Node server is running on port ' + app.get('port'));
});
