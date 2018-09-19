
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link ,withRouter}
from "react-router-dom";
 

class AdminHeader extends Component {
    constructor(props) {
        super(props);
        
    }
    logoutHandler(){
       localStorage.removeItem('jwtToken');  
         localStorage.removeItem('userid');  
            this.props.history.push("/admin");
    }
     
    render() {
        return (
                 <nav className="navbar navbar-default">
                            <div className="container-fluid">
                               <ul className="nav navbar-nav navbar-left">
                                 <li>
                                        <Link to="/heatmap" className="dropdown-toggle" data-toggle="dropdown"> 
                                             <p>Admin</p>
                                         </Link>
                                   </li>
                                   
                                    <li>
                                <Link to="/createque" className="dropdown-toggle" data-toggle="dropdown"> 
                                    <p>Create Question</p>
                                </Link>
                                
                                </li>
                             </ul>
                        
                        <ul className="nav navbar-nav navbar-right">
                                <li>
                                    <a href="javascript:void(0)" onClick={()=>{this.logoutHandler()}} className="dropdown-toggle" data-toggle="dropdown">
                                        <p>Logout</p>
                                    </a>
                                </li>
                                  
                        </ul>
                            </div>
                        </nav>
                );
    }
}

export default withRouter(AdminHeader);
