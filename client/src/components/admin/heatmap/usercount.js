import React, { Component }
from 'react';
class Usercount extends Component {
    constructor(props) {
        super(props);
        this.state = {
            usercount: props.usercount,
            bardata: props.bardata,
            spotcount: props.spotcount,
            refferal: props.refferal,
            mostDenFloor: props.mostDenFloor,
            mostDenLoc: props.mostDenLoc
        };
    }
    componentWillMount() {

    }
    componentDidMount() {

    }
    componentWillReceiveProps(props) {
        this.setState({usercount: props.usercount, mostDenFloor: props.mostDenFloor,
            mostDenLoc: props.mostDenLoc, refferal: props.refferal, spotcount: props.spotcount, bardata: props.bardata})
    }
    renderList() {
        var template = this.state.bardata.map((option, i) => {
            return (<li className={`list-group-item`}  key={i}>  
                <span className="badge" >{option.userCount}</span> 
                <button onClick={() => { this.props.floorwise(option.floorno);
                                                                                                                                                                                                                                    }} className="btn btn-success btn-xs">{option.floorno} <sup>th</sup> Floor Detail</button> </li>);
        });
        return template;
    }
    refferalcode() {

        var template = this.state.refferal.map((option, i) => {
            return (
                    <li className={`list-group-item`}  key={i}>  
                        <strong>{option.name}'s</strong>  ref code <b>{option.code}</b>  <span className="badge" >{option.userCount}</span> 
                    </li>);
        });
        return template;
    }
    render() {
 
        return (
                <div>
                    <div className="col-md-3">
                        <div className="panel panel-default">
                            <div className="panel-heading"><b>Registered user</b></div>
                            <div className="panel-body text-center">
                                <b> Count <h1>{this.state.usercount}</h1> </b>
                            </div>
                        </div>
                    </div>  
                    <div className="col-md-3">
                        <div className="panel panel-default">
                            <div className="panel-heading"><b>Spot Registration Count</b></div>
                            <div className="panel-body text-center">
                                <b> Count <h1>{this.state.spotcount}</h1> </b>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="panel panel-default">
                            <div className="panel-heading"><b>Refferal Code </b></div>
                            <div className="panel-body text-center">
                                {  (() => this.refferalcode())() }
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="panel panel-default">
                            <div className="panel-heading"><b>Density Wise</b></div>
                            <div className="panel-body">
                                {

                                    (() => {
                                        if (this.state.mostDenFloor.length > 0) {
                                            return  (
                                            <li className={`list-group-item`}   >  
                                                <b> By Floor: </b>{`${this.state.mostDenFloor[0].fn} Floor , Count:${this.state.mostDenFloor[0].userCount}`}
                                            </li>

                                                    )
                                }
                                }) ()   
                
                                }
                
                
                                {
                                            (() => {
                                                if (this.state.mostDenLoc.length > 0) {
                                                    return  (
                                                    <li className={`list-group-item`}   >  
                                                        <b> By Location : </b>{`${this.state.mostDenLoc[0].blockname} of ${this.state.mostDenLoc[0].loc.split('-')[0]} , Count: ${this.state.mostDenLoc[0].userCount}`} 
                                                    </li>
                                                            )
                                }
                                })()     
                
                                }
                
                            </div>
                        </div>
                     </div>
                </div>



                        );
    }
}

export default Usercount;
