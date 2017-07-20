var timeService = require('./timeService');

const dataService = {
	matchData: function(id, data) {
		// Check for the item with the matching id
		const ID = parseInt(id);
		for (var i = 0; i < data.length; i++) {
			if (data[i].id === ID) {
				return data[i];
			}
		}
	},
	renderTemplate: function(template, guest, company) {
		// Make sure all the data exists
		if (!template || !guest || !company) {
			return false;
		}
		const message = template.message;
		const variables = {
			timeGreeting: timeService.getTimeGreeting(company.timezone)
		};
		const data = {
			guest: guest,
			company: company
		};
		const resObject = {
			message: ''
		};

		// Iterate through message and concatenate pieces to segment
		for (let i = 0; i < message.length; i++) {
			let segment = '';
			if (message[i].variable === 'timeGreeting') {
				// Time greeting
				segment = variables.timeGreeting;
			} else if (typeof message[i] === 'string') {
				// String
				segment = message[i];
			} else if (!message[i].nestedVar) {
				// Single Var
				const theFile = message[i].file;
				const theVar = message[i].variable;
				segment = data[theFile][theVar];
			} else if (message[i].nestedVar) {
				// Nested Var
				const theFile = message[i].file;
				const theVar = message[i].variable;
				const theNestedVar = message[i].nestedVar;
				const theData = data[theFile][theVar][theNestedVar];
				// Check for end or start timestamp
				if (message[i].nestedVar === 'endTimestamp' || message[i].nestedVar === 'startTimestamp') {
					segment += timeService.convertToDate(theData);
				} else {
					segment += theData;
				}
			}
			resObject.message += segment;
		}
		return resObject;
	}
};

module.exports = dataService;
