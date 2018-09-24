import React, { Component } from 'react';

class FloorWiseHeatmap extends Component {
    constructor(props) {
        super(props);

        this.color = ["brown-tone", "slightly-blue", "moderate-orange", "bright-orange", "vivid-orange"];
        this.state = {
            floorwisedata: props.floorwisedata,
            floorno: props.floorno,
            matrix: [],
            bardata: props.gropupdata,
        }

    }
    componentWillMount() {
        this.collectdata();


    }
    collectdata() {

        this.state.floorwisedata.map((option) => {
            option.percentage = option.userCount > 40 ? Math.round(40 / 40 * 100 * 100) / 100 : Math.round(option.userCount / 40 * 100 * 100) / 100;
        })

        this.setState({...this.state,
            floorwisedata: this.state.floorwisedata,
            matrix: this.generateSquareMatrix(4, 1, 600, 39, this.state.floorno)})


    }
    // 

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

        props.floorwisedata.map((option) => {
            option.percentage = option.userCount > 40 ? Math.round(40 / 40 * 100 * 100) / 100 : Math.round(option.userCount / 40 * 100 * 100) / 100;
        });

        this.setState({...this.state, floorno: props.floorno, bardata: props.gropupdata, floorwisedata: props.floorwisedata, matrix: this.generateSquareMatrix(4, 1, 600, 39, this.state.floorno)})

    }
    generateSquareMatrix(num, init, max, diff, floorno) {
        var arr = [], row, col;
        var i = init;
        var j = i + diff;
        let blockid = 0;
        for (row = 0; row < num; row++) {
            arr[row] = [];
            for (col = 0; col < num; col++) {
                blockid++;
                let usercount = 0;
                let color = this.color[this.color.length - 1];
                this.state.floorwisedata.map((obj, index) => {


                    if (obj.projName === `Block-${blockid}`) {
                        usercount = obj.userCount;


                        color = this.getPercentageWiseColor(obj.percentage)
                    }
                })

                arr[row][col] = [`${i} to ${j}`, `Block-${blockid}`, usercount, color],
                        i = j + 1;
                j = i + diff;

            }
        }
        return arr;
    }
    checkstatus(id, color) {
        return(`recall-grid-tile ${color}`);
    }
    drawgrid() {
        let blockid = 0;
        const   template = this.state.matrix.map((row, rowIdx) => {
            return (
                    <div key={rowIdx}   className="recall-grid-row">
                        {
                            row.map((col, colIdx) => {
                                blockid++;
                                return (
                                                <div key={colIdx}
                                                     id={`${this.state.floorno}F-${rowIdx + 1}B-${colIdx + 1}R`} 
                                                     blockid={`Block-${blockid}`}
                                                     className={this.checkstatus(blockid, col[3]) } 
                                                     > 
                                                    <div> {col[1]} <br/><span> Seat no { col[0] }</span><br/>
                                                        <h2>{col[2]}</h2>
                                                    </div>
                                                </div>
                                        )
                        })
                        }
                    </div>
                        )
        })
        return template;
    }
    renderListButton() {
        var template = this.state.bardata.map((option, i) => {
            return (<li className={`list-group-item`}  key={i}>  
                <span className="badge" >{option.userCount}</span> 
                <button onClick={() => {
                                this.props.floorwise(option.floorno);
                                                                                                                                                    }} className="btn btn-success btn-xs">{option.floorno} <sup>th</sup> Floor Detail</button> </li>);
        });
        return template;
    }
    render() {


        return (
                <div className="col-md-12 admin-allbox">
                
                    <div className="panel panel-default">
                        <div className="panel-heading"><b>Floor Plan {this.state.floorno}</b></div>
                        <div className="panel-body">
                
                            <div className="col-md-3">
                                <div className="panel panel-default">
                                    <div className="panel-heading"><b>Floor  wise</b></div>
                                    <div className="panel-body">
                                        <ul className="list-group">
                                            {  (() => this.renderListButton())() }
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div  className="col-md-9" >
                                
                                    <div className="panel panel-default">
                                        <div className="panel-body">
                                            <div className="chart-container">
                                                {this.drawgrid()}
                                            </div>
                                        </div>
                                    </div>
                                    
                            </div>
                        </div>
                    </div> 
                                                                
                </div>
                );
    }
}

export default FloorWiseHeatmap;
