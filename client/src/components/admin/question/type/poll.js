import React, { Component } from 'react';
import Chart from "chart.js";

class  Poll extends Component {
    constructor(props) {
        super(props);
        this.state = this.props;
    }
    componentWillMount() {
        this.collectData();
    }
    collectData() {
        var k = 1;
        var arrData = [];
        this.state.que[0].options.map((option, i) => {
            var obj = {}
            obj['text'] = option;
            obj['option'] = `op${k}`;
            obj['count'] = 0;
            this.state.count.arrCount.map((countob) => {
                if (Object.keys(countob)[0] === `op${k}`) {
                    obj['count'] = countob[`op${k}`];
                }
            });
            k++;
            arrData.push(obj);
        });

        this.setState({finalData: arrData}, () => {
            this.showGraph(arrData);
            console.log(this.state);
        })

    }
    showGraph(graphdata) {
        var labels = [], values = [];
        graphdata.map((ar) => {
            labels.push(`${ar.text} (${ar.count})`);
            values.push(ar.count);

        });


        var canvas = document.getElementById("chart");
        var ctx = canvas.getContext("2d");
        var myChart = new Chart(ctx, {
            type: "pie",
            data: {
                datasets: [
                    {
                        data: values,
                        backgroundColor: [
                            "rgba(255, 99, 132, 0.2)",
                            "rgba(54, 162, 235, 0.2)",
                            "rgba(255, 206, 86, 0.2)",
                            "rgba(75, 192, 192, 0.2)"

                        ],
                        borderColor: [
                            "rgba(255,99,132,1)",
                            "rgba(54, 162, 235, 1)",
                            "rgba(255, 206, 86, 1)",
                            "rgba(75, 192, 192, 1)"

                        ],
                        borderWidth: 1
                    }
                ],
                labels: labels
            },
            options: {
                legend: {
                    position: 'bottom',
                    display: true,
                    responsive: false,
                    maintainAspectRatio: true,
                    labels: {
                        fontFamily: 'Helvetica',
                        fontSize: 12
                    }
                }
            }
        });


    }
    renderList() {
        var template = this.state.finalData.map((option, i) => {
            return (<li 
                className={`list-group-item`}
                key={i}> 
                <span className="badge" >{option.count}</span>{option.text}</li>);
        });

        return template;
    }
    render() {
        return (
                <div>
                    <hr className="colorgraph" />
                    <br />
                
                    <div className="row">
                        <div className="col-sm-8 col-xs-12">
                            <div className="chart-container">
                                <canvas id="chart" />
                            </div>
                        </div>
                        <div className="col-sm-4 col-xs-12">
                            <div className="panel panel-default">
                                <div className="panel-heading">Options</div>
                                <div className="panel-body">
                                    <ul className="list-group">
                                        {  (() => this.renderList())() }
                                    </ul>
                                </div>
                                <div className="panel-footer"></div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6 col-xs-12">
                
                        </div>
                    </div>
                </div>

                );
    }
}

export default  Poll;
