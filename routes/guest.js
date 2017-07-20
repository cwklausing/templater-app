const express = require('express');
const router = express.Router();
const path = require('path');
const guestData = require('../data/Guests');

router.get('/', function(req, res) {
	const guestNames = [];
	for (let i = 0; i < guestData.length; i++) {
		const name = {
			id: guestData[i].id,
			firstName: guestData[i].firstName,
			lastName: guestData[i].lastName
		};
		guestNames.push(name);
	}
	res.send(guestNames);
});

module.exports = router;
