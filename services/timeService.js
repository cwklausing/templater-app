var timeService = {
	getTimeGreeting: function(timeZone) {
		const date = new Date();
		let hour = date.getHours();
		let adminOffset = date.getTimezoneOffset();
		let userOffset = null;
		let netOffset = null;
		let timeGreeting = '';

		switch (timeZone) {
			case 'US/Eastern':
				userOffset = 240;
				break;
			case 'US/Central':
				userOffset = 300;
				break;
			case 'US/Western':
				userOffset = 360;
				break;
			default:
				userOffset = adminOffset;
		}

		// Account for time zone differences
		netOffset = adminOffset - userOffset;
		hour += netOffset / 60;
		if (hour < 0) {
			hour += 24;
		}
		// Generate timeGreeting
		if (3 < hour && hour < 12) {
			timeGreeting = 'Good morning';
		} else if (hour <= 3 || 5 <= hour) {
			timeGreeting = 'Good evening';
		} else {
			timeGreeting = 'Good afternoon';
		}

		return timeGreeting;
	},
	convertToDate: function(timeString) {
		let dateString = '';
		const date = new Date(timeString);
		dateString += date.getDate() + '/';
		dateString += date.getMonth() + 1 + ' at ';
		if (date.getHours() < 12) {
			dateString += date.getHours() + ':';
		} else {
			dateString += date.getHours() - 12 + ':';
		}
		if (date.getMinutes() < 10) {
			dateString += '0' + date.getMinutes();
		} else {
			dateString += date.getMinutes();
		}
		return dateString;
	}
};

module.exports = timeService;
