import React, { Component } from "react";
import Poll from "./type/poll";
import Quiz from "./type/quiz";
class Detail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            users: props.pollquiz.users !== null ? props.pollquiz.users : [],
            count: props.pollquiz.count !== null ? props.pollquiz.count : [],
            que: props.pollquiz.que !== null ? props.pollquiz.que : []
        };
    }
    render() {
        return(
                    <div>
                        <h3 className="form-signin-heading">{this.props.pollquiz.que[0].que}</h3>
                        {(() => {
                                if (this.props.pollquiz.type === "poll") {

                                        return (<Poll
                                            count= {this.state.count}
                                            que= {this.state.que} 
                                            />);
                        } else {

                                                return (<Quiz
                                                    users= {this.state.users}
                                                    que= {this.state.que} 
                                                    count= {this.state.count}
                                                    />);
                        }
                        })()
                        }
                
                    </div>
               
                    );
    }
}
export default Detail;
