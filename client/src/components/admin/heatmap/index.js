import React, { Component }
from 'react';

import Usercount from "./usercount";
import Barchart from "./barchart";
import Heatmap from "./heatmap";
var floordata = require("../../../common/floorplan");


class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            usercount: '..loading',
            floorwisecount: [],
            projectlist: null,
            firstrow: true,
            secondrow: false,
            floorno: ''
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
            console.log(json);
            var count = 0;
            json.result.map((obj) => {
                count += obj.userCount
            })
            this.setState({usercount: count, floorwisecount: json.result, firstrow: true})
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


            var arrData = []
            json.result.map((objpro) => {
                floordata[floorno].areas.map((jsonpro, i) => {
                    if (jsonpro.id === objpro.proid) {
                        jsonpro.userCount = objpro.userCount;
                        arrData.push(jsonpro);
                    }
                });
            });
            floordata[floorno].areas = arrData;
            floordata[floorno].areas.map((option, i) => {
                option.userCount = option.userCount > option.totalcount ? option.totalcount : option.userCount;
                option.percentage = option.userCount > option.totalcount ? Math.round(option.totalcount / option.totalcount * 100 * 100) / 100 : Math.round(option.userCount / option.totalcount * 100 * 100) / 100;
            });

            this.setState({
                ...this.state,
                firstrow: false,
                floorno: floorno,
                jsonData: floordata[floorno]
            });
        });

    }
    render() {
        return (
                <div>
                    <div className="row">
                        <br/>
                
                        {
                    (() => {
                                if (this.state.firstrow) {
                                        return (<div>
                                            <Usercount bardata={this.state.floorwisecount} 
                                                       floorwise={(obj) => this.floorwiseData(obj)} 
                                                       projectlist={null}
                                                       usercount={this.state.usercount}/>
                                            <Barchart bardata={this.state.floorwisecount} />
                                        </div>);
                        }else{
                                        return (<div>
    <Usercount 
        bardata={this.state.floorwisecount} 
        floorwise={(obj) => this.floorwiseData(obj)} 
        usercount={this.state.usercount}
        projectlist={this.state.jsonData}

        />
    <Heatmap 
        floorno={this.state.floorno}
        floorwisedata={this.state.jsonData}  />
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
