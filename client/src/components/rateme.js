import React from 'react';
import ReactDOM from 'react-dom';
import StarRatingComponent from 'react-star-rating-component';
 
class Rateme extends React.Component {
  constructor() {
    super();
 
    this.state = {
      rating: 0,
      show: true,
      showerror: "dn",
    };
  }
 
  onStarClick(nextValue, prevValue, name) {
    if (this.refs.mobilenolng.value) {
        this.setState({rating: nextValue});

        fetch('/api/rateus', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({rating: nextValue, mobile: this.refs.mobilenolng.value})
        }).then(res => res.json()).then(json => {
            this.setState({show: false});
        });
    } else {
        this.setState({showerror: "db"});
    }
  }
 
  onStarHover(nextValue, prevValue, name) {
    this.setState({rating: nextValue});
  }

  render() {
    const { rating } = this.state;
    
    return (
      <div>
        <div className="section">
            <div className="container">
                {this.state.show ? 
                    <div className="row">
                        <div className="col-sm-4">
                        <p style={{"color": "#fb8686"}} className={ `${this.state.showerror}`}>Please enter your registered mobile number!</p>
                        <input className="form-control" type="text" size="20" ref="mobilenolng"  minLength="9" maxLength="10"  placeholder="Enter your registered Mobile number!"/>
                            <StarRatingComponent 
                            name="rate1" 
                            starCount={4}
                            value={rating}
                            onStarClick={this.onStarClick.bind(this)}
                            onStarHover={this.onStarHover.bind(this)}
                            />
                        </div>
                    </div>
                : 
                <div className="row">
                    <div className="col-sm-4">
                    <h4 style={{"color": "#61ef61"}}> Thankyou for rating us!! </h4>
                    </div>
                </div>
                }
            </div>
        </div>
      </div>
    );
  }
}

export default Rateme;