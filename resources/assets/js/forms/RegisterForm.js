import React, { Component } from 'react';

export default class RegisterForm extends Component {
	constructor(props) {
		super(props);
		this.state = { name:'', email:'', password:'', confirmPassword:'' };
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleInputChange(e) {
		const target = e.target;
		const value = target.value;
		const name = target.name;
		this.setState({ [name]: value});
	}

	handleSubmit(e) {
		e.preventDefault();
		let payload = { name:this.state.name, email:this.state.email, password:this.state.password };
		if(this.state.password != this.state.confirmPassword)
		{
			alert("Passwords do not match");
		}
		else {
			document.getElementById('submitForm').setAttribute('disabled', 'true');
			this.props.handleSubmit(payload);
		}
		
	}

	render() {
		return (
			<form className="form-horizontal" onSubmit={this.handleSubmit}>
				<div className="form-group">
					<label htmlFor="name" className="col-md-4 control-label">Name</label>

					<div className="col-md-6">
						<input required autoFocus
							id="name" type="text" className="form-control" name="name" value={this.state.name}
							onChange={this.handleInputChange}/>
					</div>
				</div>

				<div className="form-group">
					<label htmlFor="email" className="col-md-4 control-label">E-Mail Address</label>

					<div className="col-md-6">
						<input required
							id="email" type="email" className="form-control" name="email" value={this.state.email}
							onChange={this.handleInputChange}/>
					</div>
				</div>

				<div className="form-group">
					<label htmlFor="password" className="col-md-4 control-label">Password</label>

					<div className="col-md-6">
						<input required
							id="password" type="password" className="form-control" name="password" value={this.state.password}
							onChange={this.handleInputChange}/>
					</div>
				</div>

				<div className="form-group">
					<label htmlFor="password-confirm" className="col-md-4 control-label">Confirm Password</label>

					<div className="col-md-6">
						<input required
							id="password-confirm" type="password" className="form-control" name="confirmPassword" value={this.state.confirmPassword}
							onChange={this.handleInputChange}/>
					</div>
				</div>

				<div className="form-group">
					<div className="col-md-8 col-md-offset-4">
						<button type="submit" className="btn btn-primary" id="submitForm">
							Register
						</button>
					</div>
				</div>
			</form>
		);
	}
}