const express = require('express');
const router = express.Router();
const path = require('path');
const dataService = require('../services/dataService');
const templateData = require('../data/Templates');
const companyData = require('../data/Companies');
const guestData = require('../data/Guests');

router.post('/', function(req, res) {
	const template = dataService.matchData(req.body.templateId, templateData);
	const guest = dataService.matchData(req.body.guestId, guestData);
	const company = dataService.matchData(req.body.companyId, companyData);
	const output = dataService.renderTemplate(template, guest, company);
	res.send(output);
});

router.get('/', function(req, res) {
	const templateNames = [];
	for (let i = 0; i < templateData.length; i++) {
		const name = {
			id: templateData[i].id,
			template: templateData[i].name
		};
		templateNames.push(name);
	}
	res.send(templateNames);
});

module.exports = router;
