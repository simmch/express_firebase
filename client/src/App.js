import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
constructor(props){
super(props)
  this.state = {
    firstname: '',
    lastname: '',
    title: 'Welcome',
    address: ''
  }
this.handleChange = this.handleChange.bind(this);
this.handleSubmit = this.handleSubmit.bind(this);
}

handleChange(e){
  e.preventDefault();
  this.setState({
    [e.target.name]: e.target.value
  })
}

handleSubmit(e){
  e.preventDefault();

  axios.post(`/name/${this.state.firstname}/${this.state.lastname}/${this.state.address}`)
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    })

    this.setState({
      firstname: '',
      lastname: '',
      address: ''
    })

}

  

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{this.state.title}</h1>
        </header>
       <div className="row">
        <form 
        className="form-group col-md-8 offset-md-2"
        onSubmit={this.handleSubmit}>
            <div className="form-group mb-2">
            <label className="col-form-label">First Name</label>
                <input 
                type="text" 
                className="form-control" 
                name="firstname" 
                onChange={this.handleChange}
                value={this.state.firstname} />
            </div>
          <br />
            <div className="form-group">
            <label className="col-form-label">Last Name</label>
                <input 
                type="text" 
                className="form-control" 
                name="lastname" 
                onChange={this.handleChange}
                value={this.state.lastname}  />
            </div>
            <br />
            <div className="form-group">
            <label className="col-form-label">Address</label>
            <textarea
                class="form-control"
                rows="3" 
                name="address"
                value={this.state.address}
                onChange={this.handleChange}>
            </textarea>
            </div>
                <button 
                type="submit" 
                className="btn btn-primary mb2"
                >Submit</button>
        </form>
       </div>
      </div>
    );
  }
}

export default App;
