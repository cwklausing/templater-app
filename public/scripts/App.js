import React, { Component } from 'react';
import { render } from 'react-dom';
import axios from 'axios';
import Form from './Form';
import Template from './Template';

class App extends Component {
	constructor() {
		super();
		this.state = {
			guestNames: [],
			companyNames: [],
			templateNames: [],
			activeGuest: '',
			activeCompany: '',
			activeTemplate: '',
			templateOutput: '',
			message: ''
		};
	}
	componentDidMount() {
		// Run 'then' functions for functions run on init after component has mounted to get
		// fulfilled promise, not just the promise object.
		axios.get('/guests').then(res =>
			this.setState({
				guestNames: res.data
			})
		);
		axios.get('/companies').then(res =>
			this.setState({
				companyNames: res.data
			})
		);
		axios.get('/templates').then(res =>
			this.setState({
				templateNames: res.data
			})
		);
	}
	handleGenerateClick() {
		const templateId = parseInt(this.state.activeTemplate);
		const guestId = parseInt(this.state.activeGuest);
		const companyId = parseInt(this.state.activeCompany);

		if (templateId && guestId && companyId) {
			this.postTemplateMessage(templateId, guestId, companyId);
		} else {
			this.setState({
				message: ''
			});
		}
	}
	handleInput(event) {
		this.setState({ message: event.target.value });
	}
	handleGuestChange(event) {
		// onChange function for guest <select>
		const guestId = event.target.value;
		this.setState({
			activeGuest: guestId
		});
	}
	handleCompanyChange(event) {
		// onChange function for company <select>
		const companyId = event.target.value;
		this.setState({
			activeCompany: companyId
		});
	}
	handleTemplateChange(event) {
		// onChange function for template <select>
		const templateId = event.target.value;
		this.setState({
			activeTemplate: templateId
		});
	}
	postTemplateMessage(templateId, guestId, companyId) {
		return axios
			.post('/templates', {
				templateId: templateId,
				guestId: guestId,
				companyId: companyId
			})
			.then(res => {
				this.setState({
					message: res.data.message
				});
			});
	}
	render() {
		return (
			<div className="app">
				<div className="landing">
					<h1>Templater Delux</h1>
					<Form
						guestNames={this.state.guestNames}
						companyNames={this.state.companyNames}
						templateNames={this.state.templateNames}
						activeGuest={this.state.activeGuest}
						activeCompany={this.state.activeCompany}
						activeTemplate={this.state.activeTemplate}
						onClick={() => this.handleGenerateClick()}
						onGuestChange={event => this.handleGuestChange(event)}
						onCompanyChange={event => this.handleCompanyChange(event)}
						onTemplateChange={event => this.handleTemplateChange(event)}
					/>
					<Template message={this.state.message} onChange={event => this.handleInput(event)} />
				</div>
			</div>
		);
	}
}

render(<App />, document.getElementById('app'));
