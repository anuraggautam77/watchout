import React, { Component }
from 'react';


class Usercount extends Component {
    constructor(props) {
        super(props);
        this.state = {
            usercount: props.usercount,
            bardata: props.bardata,
            projectlist: props.projectlist
        };
    }
    componentWillMount() {

    }
    componentDidMount() {

    }
    componentWillReceiveProps(props) {
        this.setState({usercount: props.usercount, bardata: props.bardata, projectlist: props.projectlist})
    }
    renderList() {
        var template = this.state.bardata.map((option, i) => {
            return (<li    className={`list-group-item`}  key={i}>  
                <span className="badge" >{option.userCount}</span> 
                <button onClick={() => {
                                this.props.floorwise(option.floorno);
                                                                                                                                                                                                                                                                                                                                                                                                                                      }} className="btn btn-success btn-xs">{option.floorno} <sup>th</sup> Floor Detail</button>
            
            </li>);
        });
        return template;
    }
    projectList() {
        var template = this.state.projectlist.areas.map((option, i) => {
            return (<li    className={`list-group-item`}  key={i}> 
                <b>{option.title}</b><br/>
                Total Count :  {option.totalcount}<br/>
                Register User :{option.userCount}<br/>
                %age: { option.percentage}
            </li>);
        });
        return template;
    }
    render() {


        return (
                <div className="col-md-3">
                    <div className="panel panel-default">
                        <div className="panel-heading"><b>Registered user</b></div>
                        <div className="panel-body text-center">
                            <b> Count <h1>{this.state.usercount}</h1> </b>
                        </div>
                    </div>
                    <div className="panel panel-default">
                        <div className="panel-heading"><b>Floor  wise</b></div>
                        <div className="panel-body">
                            <ul className="list-group">
                                {  (() => this.renderList())() }
                            </ul>
                        </div>
                    </div>
                    {
                        (() => {
                            if (this.state.projectlist !== null) {
                                return (
                                            <div className="panel panel-default">
                                                <div className="panel-heading"><b>{
                                                                this.state.projectlist.name} Project List</b></div>
                                                <ul className="list-group">
                                                    {  (() => this.projectList())() }
                                                </ul>
                                            </div>
                                        )
                    }
                    })()
                
                    }
                
                
                
                
                
                
                </div>

                );
    }
}

export default Usercount;
