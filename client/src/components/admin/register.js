import React from 'react';
import { Link } from 'react-router-dom';

export default class RegistrationForm extends React.Component {
   constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }
  onChange(e){
    const state = this.state;
      state[e.target.name] = e.target.value;
     this.setState(state);
  }

  onSubmit(e) {
      e.preventDefault();
        const { username, password } = this.state;
       fetch('/api/register', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
           body: JSON.stringify({ username, password })
            
        }).then(res => res.json()).then(json => {
            console.log(json)
            // this.props.history.push("/login")
        });
  }
     
    render() {
      const { username, password } = this.state;
        return(
                <div className="container">
        <form className="form-signin" onSubmit={(e)=>this.onSubmit(e)}>
        
          <label   className="sr-only">Email address</label>
          <input type="text" 
            className="form-control" 
            placeholder="username" 
            name="username" 
            onChange={(e)=>this.onChange(e)} 
            required/>
          <label   className="sr-only">Password</label>
          <input 
          type="password" 
          className="form-control" 
          placeholder="Password" 
          name="password" 
          onChange={(e)=>this.onChange(e)}  required/>
          <button className="btn btn-lg btn-primary btn-block" type="submit">Register</button>
        </form>
      </div>
          );
    }
};