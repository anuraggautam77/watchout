import React, { Component } from 'react';
import { BrowserRouter as Router, Route,Redirect } from 'react-router-dom';
 
import MainPage from '../containers/userdashboard';
import Landing from '../containers/landing';
import FootFall from '../containers/footfall';

import UserPollPage from '../containers/userpollpage';
import AdminPollPage from '../containers/adminpollpage';
import Heatmap from '../containers/adminheatmap';
import CreateQuestion from '../containers/createquestion';
import Notification from '../containers/notification';
import Adminlogin from '../containers/adminlogin';
import AdminReg from '../containers/admin-reg';

import Auth from '../common/auth';


export default class Routing extends Component {
    
    constructor(props) {
        super (props);
    }
    
  
    render() {
         
             
const PrivateRoute =({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) =>{  
                         return(Auth.isUserAuthenticated() ?
                                 (<Component {...props}/> ) :
                                (<Redirect to={{  pathname: '/admin', state: { from: props.location } }}/> )
                             )}
                    }/>
 )
         
         
        return ( <Router>
                    <div>
                     <Route path="/" exact component={Landing} />
                     <Route path="/home/:id" exact component={Landing} />
                      
                     <Route path="/mainpage" exact component={MainPage} />
                     <Route path="/footfall" exact component={FootFall} />
                     
                     
                     
                     <Route path="/question/:id/:type" exact component={UserPollPage} />
                     <Route path="/adminpanel" exact component={Adminlogin} /> 
                     <Route path="/adminreg" exact component={AdminReg} /> 
                     <PrivateRoute path="/createque" exact component={CreateQuestion} /> 
                     <PrivateRoute path="/notify" exact component={Notification} /> 
                     <PrivateRoute path="/admindetail/:id/:type" exact component={AdminPollPage} />
                     <PrivateRoute path="/heatmap"  component={Heatmap} />
                     
                    </div>
            </Router>
        )
    }
};
