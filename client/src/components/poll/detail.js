import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Chart from "chart.js";

class Detail extends Component {
    constructor(props) {
        super(props);
       
        this.state = {
            detail: props.quedata,
            submitPoll: false,
            id: props.id,
            questionshow:"db",
            slectedOption: '',
            disabled:false,
            ca:'',
            attempt:'',
            isCorrect:''
        };
    }
    componentWillMount() {
    }
    componentDidMount() {

    }
    showGraph(data, label) {
       
        var canvas = document.getElementById("chart");
        var ctx = canvas.getContext("2d");
        var myChart = new Chart(ctx, {
            type: "pie",
            data: {
                datasets: [
                    {
                        data: data,
                        backgroundColor: [
                            "rgba(255, 99, 132, 0.2)",
                            "rgba(54, 162, 235, 0.2)",
                            "rgba(255, 206, 86, 0.2)",
                            "rgba(75, 192, 192, 0.2)",
                            "rgba(153, 102, 255, 0.2)",
                            "rgba(255, 159, 64, 0.2)"
                        ],
                        borderColor: [
                            "rgba(255,99,132,1)",
                            "rgba(54, 162, 235, 1)",
                            "rgba(255, 206, 86, 1)",
                            "rgba(75, 192, 192, 1)",
                            "rgba(153, 102, 255, 1)",
                            "rgba(255, 159, 64, 1)"
                        ],
                        borderWidth: 1
                    }
                ],
                labels: label
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
    selectedOptionHandler(event) {
        
        this.setState({
            ...this.state,
            slectedOption: event.target.value
        });

    }
    submitHandler(type) {

        var id = this.state.id;
        var selected = this.state.slectedOption;
        var userid = window.localStorage.getItem('subscriber');
        if (this.state.slectedOption !== '') {
            fetch('/api/submitquestion', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({type, id, selected, userid})
            }).then(res => res.json()).then(json => {
                if (json.type === 'poll') {
                    var data = [], label = [];
                    json.result.map((obj) => {
                        label.push(obj[obj.rans]);
                        data.push(obj.ansCount);

                    });
                    this.showGraph(data, label);
                    this.setState({...this.state,disabled:true});
                }else{
                    
                      this.setState({
                                     ...this.state,
                                    isCorrect:json.result[0].iscorrect,
                                    ca:json.result[0].ca[0],
                                    attempt:json.result[0].attempt[0],
                                    disabled:true,
                                    questionshow:"dn"
                                    });
                }

            });
        }
    }
    render() {

        if (this.state.detail.length > 0) {
            var k = 0;
            const optionList = this.state.detail[0].options.map((obj, i) => {
                if (obj !== "") {
                    k++;
                    
                 return ( <div className="funkyradio"  key={i} >
                            <div className="funkyradio-success">
                             <input type="radio"  disabled={ this.state.disabled}
                                name="radio"  onClick={(event) => {  this.selectedOptionHandler(event); }} 
                                 id={`radio${i}`} 
                                     value={`op${k}`}
                                     />
                            <label  htmlFor={`radio${i}`} >
                            <strong>{obj}</strong></label>
                          </div>
                        </div>);
                }
         });


            return (
                    <div>
                <div className="section section-breadcrumbs">
                        <div className="container">
                            <div className="row">
                            
                                <div className="col-md-6">
                                    <h1>  <span className="text-uppercase">{this.state.detail[0].type}</span> : {this.state.detail[0].que}</h1>
                                </div>
                            </div>
                        </div>
                    </div>        
                    
              <div className="detailPage">
                 <div className="section">
                 <div className="container">       
                    <div className="row" style={ { "borderRadius":"6px", "paddingTop": "17px", backgroundImage: "url(/img/bg-dash.png)" } } >
                          <div className={`col-sm-6 col-xs-12 ${this.state.questionshow}`}>
                                <div className="form-group">
                                
                                    {optionList}
                                    <br/>
                                       
                                    { (()=>{
                                       if(!this.state.disabled) {
                                          return ( <div>
                                    <Link style={{"width":"123px"}} className="btn  btn-primary pull-right" to={`/mainpage`}>  Back </Link>
                                    <button type="button" style={{"width":"123px"}} onClick={() => {  this.submitHandler(this.state.detail[0].type) }} 
                                              className="btn"> Submit</button>
                                     </div>            
                                    )  
                                       }else{
                                       
                                        return ( <Link style={{"width":"123px"}} className="btn  btn-primary " to={`/mainpage`}>  Back </Link>)
                                        
                                        }
                                     })()
                                     }
                                </div>
                       </div>
                            
                            
              { (()=>{
          if(this.state.questionshow==="dn") {
                    if(this.state.isCorrect){
            return(
                    <div className={`col-sm-6 col-xs-12 `}>
                     <div className="alert alert-success" role="alert">
                            <strong> Congratulations!!!</strong> You made it .
                    </div>
                    </div>
               )  
                    }else{
                return(
                   <div className={`col-sm-6 col-xs-12 `}>
                     <div className="alert alert-danger" role="alert">
                             <strong> Sorry !!!  </strong>  Better Luck next time.
                    </div>
                    </div>                           
                 )        
                                        }
                                       }
                                     })()
                               }
                            
                            <div className="col-sm-6 col-xs-12" >
                                    <div className="chart-container">
                                        <canvas id="chart"/>
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
}

export default Detail;
