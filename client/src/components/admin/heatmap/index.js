import React, { Component }
from 'react';

import Usercount from "./usercount";
//import Barchart from "./barchart";
//import Heatmap from "./heatmap";
import FloorWiseHeatmap from "./floorwiseHeatmap";
import FullHeatMap from "./allfloorHeatmap";

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            usercount: '...',
            spotcount: '...',
            refferal: [],
            floorwisecount: [],
            firstrow: true,
            secondrow: false,
            floorwisedata: [],
            floorno: '',
            mostDenFloor: [],
            mostDenLoc: []


        };
    }
    componentWillMount() {

        fetch('/api/alluserdetail', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(res => res.json()).then(json => {
            var count = 0, spotcount = 0;
            json.result.map((obj) => {
                count += obj.userCount;
            });
            json.spotcount.map((obj) => {
                spotcount += obj.userCount;
            });
            this.setState({
                usercount: count,
                spotcount: spotcount,
                refferal: json.refferal,
                floorwisecount: json.result,
                mostDenFloor: json.mostDenFloor,
                mostDenLoc: json.mostDenLoc,
                firstrow: true,
            })
        });
    }
    floorwiseData(floorno) {


        fetch(`/api/floorwsie/${floorno}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(res => res.json()).then(json => {
            json.result.sort(function (a, b) {
                var x = a['userCount'];
                var y = b['userCount'];
                return ((y < x) ? -1 : ((y < x) ? 0 : 1));
            });

            this.setState({
                ...this.state,
                firstrow: false,
                secondrow: true,
                floorno: floorno,
                floorwisedata: json.result

            });
        }
        );

    }
    render() {

        return (
                <div>
                    <div className="row">
                        {
                            (() => {
                                if (this.state.firstrow) {
                                        return (<div>
                                            <Usercount bardata={this.state.floorwisecount} 
                                                       floorwise={(obj) => this.floorwiseData(obj)} 
                                                       usercount={this.state.usercount}
                                                       refferal={this.state.refferal}
                                                       spotcount={this.state.spotcount}
                                                       mostDenFloor={this.state.mostDenFloor}
                                                       mostDenLoc={this.state.mostDenLoc}
                                
                                                       />
                                            <FullHeatMap 
                                                floorwise={(obj) => this.floorwiseData(obj)} 
                                                bardata={this.state.floorwisecount}
                                                gropupdata={this.state.floorwisecount}  />
                                
                                        </div>);
                        }else{
                                                return (<div>
                                                    <Usercount 
                                                        refferal={this.state.refferal}
                                                        bardata={this.state.floorwisecount} 
                                                        floorwise={(obj) => this.floorwiseData(obj)} 
                                                        usercount={this.state.usercount}
                                                        spotcount={this.state.spotcount}
                                                        mostDenFloor={this.state.mostDenFloor}
                                                        mostDenLoc={this.state.mostDenLoc}
                                                        />
                                        
                                                    <FloorWiseHeatmap
                                                        floorwise={(obj) => this.floorwiseData(obj)} 
                                                        gropupdata={this.state.floorwisecount} 
                                                        floorwisedata={this.state.floorwisedata}
                                                        floorno={this.state.floorno}
                                                        />
                                                </div>);

                        }
                
                
                        })()
                
                        }
                
                
                    </div>
                
                </div>

                    );
    }
}

export default Index;
