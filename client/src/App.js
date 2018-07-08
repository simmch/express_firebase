import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
constructor(props){
super(props)
  this.state = {
    firstname: 'placeholder',
    lastname: 'placeholder',
    title: 'Welcome'
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

  // const person = {
  //   firstname: this.state.firstname,
  //   lastname: this.state.lastname
  // };

  axios.post(`/name/${this.state.firstname}/${this.state.lastname}`)
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    })

    this.setState({
      firstname: '',
      lastname: ''
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
                placeholder="First Name"
                onChange={this.handleChange} />
            </div>
          <br />
            <div className="form-group">
            <label className="col-form-label">Last Name</label>
                <input 
                type="text" 
                className="form-control" 
                name="lastname" 
                placeholder="Last Name"
                onChange={this.handleChange}  />
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
