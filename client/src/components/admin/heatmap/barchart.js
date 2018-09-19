import React, { Component } from 'react';
import Chart from "chart.js";
class Barchart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bardata: props.bardata

        };
    }
    componentWillMount() {
        this.collectGraphdata();
    }
    collectGraphdata() {
        if (this.state.bardata.length > 0) {
            var label = [], value = []
            this.state.bardata.map((obj) => {
                label.push(`Floor No:${obj.floorno}`);
                value.push(obj.userCount);
            });
            this.showGraph(label, value);
        }

    }
    componentWillReceiveProps(props) {
        this.setState({bardata: props.bardata}, () => {
            this.collectGraphdata();
        })
    }
    showGraph(labels, values) {

        var canvas = document.getElementById("barchart");
        var ctx = canvas.getContext("2d");
        new Chart(ctx, {
            type: "bar",
            data: {
                labels: labels,
                datasets: [{
                        label: 'User Registration count',
                        fill: false,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255,99,132,1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        data: values
                    }]
            },
            options: {
                onClick: (evt, element) => {
                    // this.showFloorData(element[0]._index);
                },
                responsive: true,
                scales: {
                    xAxes: [{
                            gridLines: {display: true},
                            scaleLabel: {display: true, labelString: 'Floor No'}
                        }],
                    yAxes: [{
                            gridLines: {display: true},
                            ticks: {min: 0, max: 100, stepSize: 10},
                            scaleLabel: {
                                display: true,
                                labelString: 'Regsitered user '
                            }
                        }]
                }
            }
        });
    }
    showFloorData(index) {
        console.log(this.state.bardata[index]);
        this.props.floorwise(this.state.bardata[index])
    }
    render() {
        return (
                <div className="col-md-9">
                    <div className="panel panel-default">
                        <div className="panel-heading"><b> All floors Resigtration count</b></div>
                        <div className="panel-body">
                            <div className="chart-container">
                                <canvas id="barchart" />
                            </div>
                        </div>
                
                    </div>
                </div>

                );
    }
}

export default Barchart;
