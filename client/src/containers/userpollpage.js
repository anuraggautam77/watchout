/* global google, fetch */

import React, { Component } from 'react';
import  Detail from "../components/poll/detail";
import Footer from './header/footer';
import '../style/css/detail.scss';
import Header from './header/user';
import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom";


class UserPollPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            question: [],
            already: false,
            showMessgae:"dn"

        }

    }
    componentWillMount() {
       
        if (this.props.match.params.type === "poll" || this.props.match.params.type === "quiz") {
            var type = this.props.match.params.type;
            var id = this.props.match.params.id;
            var userid = window.localStorage.getItem('subscriber');
           
            if(userid){
                 fetch(`/api/getque/${id}/${type}/${userid}`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            }).then(res => res.json()).then(json => {
                 
                 
                 if(json.que.length>0){
                       this.setState({question: json.que, already: json.already});
                 }else{
                       this.setState({...this.state,showMessgae: "db", already: json.already});
                 }
                 
              
            }); 
                
            }else{
                
                   this.props.history.push('/');
            }
            
          

        } else {

        }
    }
    componentDidMount() {

    }
    render() {
        return (
                <div className="application landing">
                    <Header/>
                    {
                        (() => {
                            if (!this.state.already) {
                                if (this.state.question.length > 0) {
                                        return (<Detail id={this.props.match.params.id} quedata={this.state.question} />)
                    }else{
                                    return (  <div>
                                            <div className="section section-breadcrumbs">
                                                <div className="container">
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <h1> 
                                                            <br/> <br/>
                                                             <Link className="btn " to={`/`}>  Back To Dashboard  </Link>
                                                            </h1>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                    
                                        </div>)
                    }  
                    }else{

                                        return (<div>
                                            <div className="section section-breadcrumbs">
                                                <div className="container">
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <h1> You have already applied for this Question Earlier  !! 
                                                            <br/> <br/>
                                                             <Link className="btn " to={`/`}>  Back To Dashboard  </Link>
                                                            </h1>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                    
                                        </div>
                                                )


                    }
                
                    })()
                    }
                  <Footer/>
                </div>






                        );
    }
}

export default withRouter(UserPollPage);;
