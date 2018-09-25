
import React, { Component }
from 'react';
import { BrowserRouter as Router, Route, Link, withRouter}
from "react-router-dom";
import { WhatsappShareButton, WhatsappIcon } from 'react-share';
 


class  Header extends Component {
constructor(props) {
super(props);
}
logoutHandler() {

}
render() {
return (
<div className="mainmenu-wrapper">
    <div className="container">
        <nav id="mainmenu" className="mainmenu">
            <ul>
                <li className="logo-wrapper">
                    <Link to="/" className="dropdown-toggle" data-toggle="dropdown">
                    <img src="/img/web-logo.png" alt="AGARTHA"/>
                    </Link>
                </li>
            </ul>
        </nav>
    </div>
    
    {
        
        (()=>{
         if(window.localStorage.getItem('referralcode')!==null){
            
                
                return(<div className="overpop">
    
        
        
        <div className="row">

            <div className="col-md-12 col-sm-6">
            <div className="alert code"><img src="/img/share-small.png"/>  {window.localStorage.getItem('referralcode')} </div>
            </div>
            <div className="col-md-12 col-sm-6">
               <WhatsappShareButton 
                    url={`Referral Code: ${window.localStorage.getItem('referralcode')}  url: ${location.origin}/home/${window.localStorage.getItem('referralcode')}`}
                    > <WhatsappIcon size={28} round={true} />
                </WhatsappShareButton> &nbsp; &nbsp; &nbsp;
                <a href={`mailto:?subject=Referral Code ${window.localStorage.getItem('referralcode')}&body= url :${location.origin}/home/${window.localStorage.getItem('referralcode')}`}> <span style={{"fontSize": "20px", "color": "green", "top": "4px"}} className='glyphicon glyphicon-envelope'></span></a>
                &nbsp; &nbsp; &nbsp; <a className="hidden-md" style={{"fontSize": "15px", "color": "green", "top": "9px"}} href={`sms://?&body=${window.localStorage.getItem('referralcode')}`} >SMS</a>


            </div>

                                                </div>
      
      
    </div>)
                
         } 
        })()
        
        }
    
    
    
    
    
</div>
);
}
}

export default withRouter(Header);
