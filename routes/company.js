const express = require('express');
const router = express.Router();
const path = require('path');
const companyData = require('../data/Companies');

router.get('/', function(req, res) {
	const companyNames = [];
	for (let i = 0; i < companyData.length; i++) {
		const name = {
			id: companyData[i].id,
			company: companyData[i].company
		};
		companyNames.push(name);
	}
	res.send(companyNames);
});
module.exports = router;
