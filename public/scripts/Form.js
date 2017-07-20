import React from 'react';

function Form(props) {
	// Used to populate guest dropdown menu
	const guests = props.guestNames.map((guest, index) => {
		return <option value={guest.id} key={guest.id}>{guest.firstName + ' ' + guest.lastName}</option>;
	});
	// Used to populate company dropdown menu
	const companies = props.companyNames.map((company, index) => {
		return <option value={company.id} key={company.id}>{company.company}</option>;
	});
	// Used to populate template dropdown menu
	const templates = props.templateNames.map((template, index) => {
		return <option value={template.id} key={template.id}>{template.template}</option>;
	});
	return (
		<div className="form">
			<select
				name="template"
				className="template-select"
				value={props.activeTemplate}
				onChange={props.onTemplateChange}
			>
				<option value="">Select a template</option>
				{templates}
			</select>
			<select name="guest" className="guest-select" value={props.activeGuest} onChange={props.onGuestChange}>
				<option value="">Select a guest</option>
				{guests}
			</select>
			<select
				name="companie"
				className="company-select"
				value={props.activeCompany}
				onChange={props.onCompanyChange}
			>
				<option value="">Select a company</option>
				{companies}
			</select>
			<button onClick={props.onClick}>Generate!</button>
		</div>
	);
}

export default Form;
