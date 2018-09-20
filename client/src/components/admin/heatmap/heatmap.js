import React, { Component } from 'react';
import ImageMapper from "../../../common/ImageMapper";
var floordata = require("../../../common/floorplan");


class Heatmap extends Component {
    constructor(props) {
        super(props);

        this.color = [
            'rgba(210,72,47,0.6)', // 81=<100
            'rgba(226,148 ,33,0.6)', //61=<80
            'rgba(249,209,60,0.6)', //41=<60
            'rgba(187,220,244,0.6)', //21=<40
            'rgba(231,240,250,0.6)'     //0=<20
        ]
        this.state = {
            floorwisedata: props.floorwisedata,
            floorno: props.floorno,
            imgurl: `../img/floorplan/desktop/${props.floorno}-floor.PNG`,
            map: floordata[ props.floorno]
        }

    }
    getPercentageWiseColor(percentage) {
        var color = '';
        switch (true) {


            case (percentage >= 0 && percentage <= 20):
                color = this.color[4];
                break;

            case (percentage >= 21 && percentage <= 40):
                color = this.color[3];
                break;


            case (percentage >= 41 && percentage <= 60):
                color = this.color[2];
                break;

            case (percentage >= 61 && percentage <= 80):
                color = this.color[1];
                break;

            case (percentage >= 81 && percentage <= 100):
                color = this.color[0];
                break;
        }
        return color;

    }
    componentWillReceiveProps(props) {
        this.setState({...this.state,
            floorwisedata: props.floorwisedata,
            map: floordata[ props.floorno],
            imgurl: `../img/floorplan/desktop/${props.floorno}-floor.PNG`,
            floorno: props.floorno
        });

    }
    render() {

        this.state.map.areas.map((option) => {
            option.fillColor = this.getPercentageWiseColor(option.percentage)
        })

        return (
                <div className="col-md-9">
                    <div className="panel panel-default">
                        <div className="panel-heading"><b>Floor Plan {this.state.floorno}</b></div>
                        <div className="panel-body">
                            <ImageMapper  src={ this.state.imgurl} admin="true" map={ this.state.map} />
                        </div>
                    </div>
                </div>
                );
    }
}

export default Heatmap;
