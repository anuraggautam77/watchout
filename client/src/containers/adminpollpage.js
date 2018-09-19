/* global google, fetch */

import React, { Component } from 'react';
import  Detail from "../components/admin/question/detail";
 import  AdminHeader from './header/admin';
 
import '../style/css/detail.scss';



class AdminPollPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: null,
            count: null,
            que: null,
            type: this.props.match.params.type
        };
    }
    componentWillMount() {

        if (this.props.match.params.type === "poll" || this.props.match.params.type === "quiz") {
            var type = this.props.match.params.type;
            var id = this.props.match.params.id;
            fetch(`/api/admingetque/${id}/${type}`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            }).then(res => res.json()).then(json => {
                if (type == "poll") {
                    this.setState({count: json.count, que: json.que})
                } else {
                    this.setState({users: json.users, count: json.count, que: json.que})
                }
               
            });

        } else {

        }
    }
    componentDidMount() {

    }
    render() {
        return (
                
                <div className="wrapper">
                    <div className="main-panel">
                        
                        
                        <AdminHeader/>
                        
                       
                        <div className="content">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="card">
                                            <div className="content">
                                                {
                                        (()=> {
                                            if(this.state.que!==null){
                                               return( <Detail  pollquiz= {this.state}  />) 
                                            } 
                                        })()
                                        }
                                           </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                
                        <footer className="footer">
                            <div className="container-fluid">
                                <div className="copyright pull-right">
                                </div>
                            </div>
                        </footer>
                
                
                    </div>
                </div>
                );
    }
}

export default AdminPollPage;
