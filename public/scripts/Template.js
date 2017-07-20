import React, { Component } from 'react';
import axios from 'axios';

function Template(props) {
	return <textarea value={props.message} onChange={props.onChange} />;
}

export default Template;
