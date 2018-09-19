import React, { Component }
from 'react';

const initialState = {
    title: '',
    option1: '',
    option2: '',
    option3: '',
    option4: '',
    correct: '',
    status: 'save',
    message:"",
    errormsg: 'dn'
};


class CreateQuiz extends Component {
    constructor(props) {
        super(props);
        this.state = initialState;
    }
    componentWillMount() {

    }
    componentDidMount() {

    }
    submitQuestion(flag) {


        if (this.refs.title.value === '' || this.refs.option1.value === '' || this.refs.option2.value === '' || this.refs.correct.value === '') {
            alert("Please Title , minimum of two options and Select Correct Answer");
        } else {

            this.setState({
                title: this.refs.title.value,
                option1: this.refs.option1.value,
                option2: this.refs.option2.value,
                option3: this.refs.option3.value,
                option4: this.refs.option4.value,
                correct: this.refs.correct.value,
                status: flag,
                type: "quiz"

            }, function () {
                this.seriveCall();
            })

        }

    }
    seriveCall() {

        fetch('/api/createque', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.state)
        }).then(res => res.json()).then(json => {
          console.log(json);
            this.setState({"errormsg": "db",message:json.status}, ()=>{
                        setTimeout(()=>{
                            this.setState(initialState);  
                        },3000);
            }
           );
        });
    }
    render() {
        return (
                <div>
                    <div className="col-md-6"> 
                        <div className="box box-success">
                
                            <div className="panel panel-default">
                                <div className="panel-body">
                                    <div className={`alert alert-success  ${this.state.errormsg}`}>
                                        <strong>{this.state.message}</strong> !!!
                                    </div>
                
                                    <label>Quiz Title</label>
                                    <input className="form-control" ref="title" placeholder="Title" />
                                    <br/>
                                    <input className="form-control" ref="option1" placeholder="Option 1"/>
                                    <br/>
                                    <input className="form-control" ref="option2" placeholder="Option 2"/>
                                    <br/>
                                    <input className="form-control" ref="option3" placeholder="Option 3"/>
                                    <br/>
                                    <input className="form-control" ref="option4" placeholder="Option 4" />
                                    <br/>
                                    <br/>
                                    <label>Correct Answer</label>
                                    <input className="form-control" min="1" max="4" ref="correct"  type="number"  placeholder="Answer Number"/>
                                </div>
                
                                <div className="panel-footer">
                                    <input type="button" className="btn  btn-info" 
                                           onClick={() => {
                        this.submitQuestion('save');
                                                                                 }} 
                                           value="Save Question"/>
                                    &nbsp;  <input type="button" className="btn btn-success"
                                                   onClick={() => {
                            this.submitQuestion('publish');
                                                                                }}
                                                   value="Publish Question"/>
                                </div>
                
                            </div>
                        </div>
                    </div>
                </div>
                        );
    }
}

export default CreateQuiz;
