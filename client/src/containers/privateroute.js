
import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Auth from '../common/auth';


class PrivateRoute extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }
    componentWillMount() {
        Auth.isUserAuthenticated((a) => {
            this.setState({auth: a});
        })
    }
    componentDidMount() {

    }
    render() {

        return (<Redirect to={{pathname: '/createque', state: {from: this.props.location } }}/>);

                /*
                 Auth.isUserAuthenticated((a) => {
                 alert(1);
                 return(
                 <Route path="/createque" render={(props) => {
                 return(true ? (<Component {...this.this.props}/>) :
                 (<Redirect to={{pathname: '/admin', state: {from: this.props.location } }}/>)
                 )
                 }
                 }/>
                 )
                 
                 
                 
                 });*/
            }
        }

        export default PrivateRoute;
