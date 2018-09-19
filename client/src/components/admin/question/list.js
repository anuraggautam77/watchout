
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
            body: JSON.stringify({both: true})
        }).then(res => res.json()).then(json => {
            this.setState({'list': json.pollList.concat(json.quizList)});
        });
    }
    publishHandler(type, id, status) {
        fetch('/api/chnagestatus', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({type, id, status})
        }).then(res => res.json()).then(json => {
            this.state.list.map((obj) => {
                if (obj.id === json.changeto[0].id) {
                    obj.detail.status = json.changeto[0].status;
                }
            });
            this.setState({list: this.state.list});
        });

    }
    render() {
        const childElements = this.state.list.map((obj) => {
            return (
                <div className="image-element-class col-md-3" key={obj.id}>
                <div className={`card tile ${obj.detail.status == "save" ? 'orange' : 'green' } `}>
                    <div className="content">
                        <Link to={`admindetail/${obj.id}/${obj.type.toLocaleLowerCase()}`}> 
                        <h3 className="title">{obj.type}: {obj.detail.qus}</h3> 
                        </Link>
                        <p>Content....</p>
                        <button className="btn btn-danger" onClick={() => this.publishHandler((obj.type).toLocaleLowerCase(), obj.id, obj.detail.status)}>{obj.detail.status == "save" ? 'Publish' : 'Unpublish' }</button> 
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
