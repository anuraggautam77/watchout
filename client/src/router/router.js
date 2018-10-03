import React, { Component } from 'react';
import { BrowserRouter as Router, Route,Redirect } from 'react-router-dom';
 
import MainPage from '../containers/userdashboard';
import Landing from '../containers/landing';
import FootFall from '../containers/footfall';
import Rating from '../containers/rating';
import UserPollPage from '../containers/userpollpage';

import VideoPage from '../containers/videopage';

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
                     <Route path="/video" exact component={VideoPage} />
                     <Route path="/footfall" exact component={FootFall} />
                     <Route path="/rating" exact component={Rating} />
                     <Route path="/question/:id/:type" exact component={UserPollPage} />
                    </div>
            </Router>
        )
    }
};
