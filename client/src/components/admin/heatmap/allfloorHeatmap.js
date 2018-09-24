import React, { Component } from 'react';
class FullHeatMap extends Component {
    constructor(props) {
        super(props);

        this.state = {
            bardata: props.gropupdata,
            bardatalisting: props.bardata,
            matrix: []
        };

        this.color = ["brown-tone", "slightly-blue", "moderate-orange", "bright-orange", "vivid-orange"];
    }
    componentWillMount() {
        this.setState({...this.state, matrix: []});
    }
    componentWillReceiveProps(props) {

        props.gropupdata.map((obj, i) => {
            if (this.color[i] === undefined) {
                obj.color = this.color[this.color.length - 1];
            } else {
                obj.color = this.color[i];
            }

        });

        this.setState({bardata: props.gropupdata, bardatalisting: props.bardata, }, () => {
            this.collectGraphdata();
        })
    }
    collectGraphdata() {
        this.setState({matrix: this.generateSquareMatrix(3, 2, this.state.bardata)})

    }
    generateSquareMatrix(num, init, groupdata) {

        var arr = [], row, col;
        var i = init;

        for (row = 0; row < num; row++) {
            arr[row] = [];
            for (col = 0; col < num; col++) {
                let usercount = 0;
                let color = this.color[this.color.length - 1];

                if (i > 3) {
                    groupdata.map((obj, index) => {
                        if (obj.floorno === i) {
                            usercount = obj.userCount;
                            color = obj.color;
                        }

                    })
                    arr[row][col] = [`Floor-${i}`, usercount, color];
                } else {
                    arr[row][col] = [`Floor-${i}`];
                }

                i++;
            }
        }
        return arr;
    }
    checkstatus(rid, cid, bid, col) {

        if (bid <= 3) {
            return(`recall-grid-tile cross-disable`);
        } else {
            return(`recall-grid-tile ${col[2]}`);
        }
    }
    gridClickHandler(e, colIdx) {
    }
    drawgrid() {
        let blockid = 1;
        const   template = this.state.matrix.map((row, rowIdx) => {
            return (
                    <div key={rowIdx}   className="recall-grid-row">
                        {
                            row.map((col, colIdx) => {
                                blockid++;
                                return (
                                                <div 
                                                    key={colIdx}  
                                                    blockid={ col[0] }
                                                    className={this.checkstatus(rowIdx, colIdx, blockid, col) } 
                                                    onClick={(e) => {
                                                        this.gridClickHandler(e, colIdx);
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 }}
                                                    > 
                                                    <div>
                                                        {
                                                                    (() => {
                                                                        if (col.length === 1) {
                                                                                return(<span> {col[0]}  </span>);
                                                        }else{
                                                                                        return(
                                                                                                        <span> {col[0]}
                                                                                                            <br/> Count: <h2>{col[1]}</h2>
                                                                                                        </span>);
                                                        }
                                                        })()
                                                        }
                                            
                                                    </div>
                                                </div>
                                                );
                        })
                        }
                    </div>
                                        );
        });
        return template;
    }
    renderList() {
        var template = this.state.bardatalisting.map((option, i) => {
            return (<li className={`list-group-item`}  key={i}>  
                <span className="badge" >{option.userCount}</span> 
                {option.floorno} <sup>th</sup> Floor </li>);
        });
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
                <div>
                    <div className="col-md-12 admin-allbox">
                
                        <div className="panel panel-default">
                            <div className="panel-heading"><b>Heat Map</b></div>
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
                                    <div className="col-md-8">
                                        <div className="panel panel-default">
                                            <div className="panel-body">
                                                <div className="chart-container">
                                                    {this.drawgrid()}
                                                </div>
                                            </div>
                                        </div>
                                    </div>      
                                    <div className="col-md-4">
                                        <ul className="list-group">
                                            {  (() => this.renderList())() }
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div> 
                
                    </div>
                </div>
                );
    }
}

export default FullHeatMap;
