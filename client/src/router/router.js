import React, { Component } from 'react';
import { BrowserRouter as Router, Route,Redirect } from 'react-router-dom';
 
import MainPage from '../containers/userdashboard';
import Landing from '../containers/landing';
import FootFall from '../containers/footfall';
import UserPollPage from '../containers/userpollpage';

export default class Routing extends Component {
    
    constructor(props) {
        super (props);
    }
    
  
    render() {
     return ( <Router>
                    <div>
                     <Route path="/" exact component={Landing} />
                     <Route path="/home/:id" exact component={Landing} />
                     <Route path="/mainpage" exact component={MainPage} />
                     <Route path="/footfall" exact component={FootFall} />
                     <Route path="/question/:id/:type" exact component={UserPollPage} />
                    </div>
            </Router>
        )
    }
};
