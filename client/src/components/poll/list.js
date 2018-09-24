/* global google, fetch */

import React, { Component }
from 'react';
import { BrowserRouter as Router, Route, Link, withRouter}
from "react-router-dom";
import Masonry from 'react-masonry-component';
const masonryOptions = {
    transitionDuration: 6
};
const imagesLoadedOptions = {background: '.my-bg-image-el'};
class PollList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        };
        var devicetoken = window.localStorage.getItem('deviceToken');
        var subscriber = window.localStorage.getItem('subscriber');
        if (subscriber === null && devicetoken == null) {
            this.props.history.push('/');
        }


    }
    componentWillMount() {
        fetch('/api/pollquizlist', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({})
        }).then(res => res.json()).then(json => {
            this.setState({'list': json.pollList.concat(json.quizList)});
        });
    }
    render() {
        /*
         <div className="col-md-3 col-sm-6">
         <div className="service-wrapper">
         <img src="img/service-icon/diamond.png" alt="Service Name"/>
         <h3>Brilliant Look</h3>
         <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames. <a href="#">Read more...</a></p>
         </div>
         </div> */





        const childElements = this.state.list.map((obj, index) => {
            return (<div className="image-element-class col-md-3 col-sm-6" key={obj.id}>
            
                <div className="service-wrapper">
                    <div className="ribbon-wrapper">
                        <div className="price-ribbon ribbon-green"> {obj.type} </div>
                    </div>
                    <h2 className="pricing-plan-title">{index + 1}) Question</h2>
                    <div className="content">
                        <h3 className="title">{obj.detail.qus}</h3> 
                        <Link className="btn" to={`/question/${obj.id}/${obj.type.toLocaleLowerCase()}`}> 
                        See {obj.type}  </Link>
                    </div>
            
                </div>
            </div>
                    );
        });
        return (
                <div>
                
                    <div className="section section-breadcrumbs">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6">
                                  <h1>Question Listing</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="listing">
                        <div className="section">
                            <div className="container">
                                <div className="row">
                                    <Masonry
                                        className={'my-gallery-class'} 
                                        options={masonryOptions}  
                                        updateOnEachImageLoad={false} 
                                        imagesLoadedOptions={imagesLoadedOptions} 
                                        >
                                        {childElements}           
                                    </Masonry>
                
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                );
    }
}

export default withRouter(PollList);
