/* global google, fetch */

import React, { Component }
from 'react';
import { BrowserRouter as Router, Route, Link }
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
        console.log(this.state)
        const childElements = this.state.list.map((obj) => {
            return (<div className="image-element-class col-md-3" key={obj.id}>
                <div className={`card tile ${obj.detail.status === "save" ? 'orange' : 'green' } `}>
                    <div className="content">
                        <Link to={`question/${obj.id}/${obj.type.toLocaleLowerCase()}`}> 
                        <h3 className="title">{obj.type}: {obj.detail.qus}</h3> 
                        </Link>
                        <p>Content....</p>
                    </div>
            
                </div>
            </div>
                    );
        });

        return (
                <div>
                    <Masonry
                        className={'my-gallery-class'} 
                        options={masonryOptions}  
                        updateOnEachImageLoad={false} 
                        imagesLoadedOptions={imagesLoadedOptions} 
                        >
                        {childElements}           
                    </Masonry>
                </div>
                );
    }
}

export default PollList;
