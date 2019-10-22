import React, { Component } from 'react';

class Card extends Component {

    render() { 
        return (  
            <>
                <div className="card col-md-3 col-sm-12 m-1 p-1" >
                    <img src={this.props.imagePath || ""} alt={this.props.title + " meal image"} className="card-image-top"/>
                    <div className="card-body">
                        <h4 className="card-title">{this.props.title || "Card title"}</h4>

                        <h6 className="card-subtitle mb-1">{this.props.price || "Card price"}</h6>
                        
                        <p className="card-text">{this.props.recipe || `Some quick example text to
                            build on the card title and make up the bulk of the card's content.`}</p>
                        
                        <button className="btn btn-primary" data-toggle="collapse" data-target={(this.props.title + this.props.price) ||`#collapse-target${this.props.id}`}>Expand</button>
                    </div>
                </div>
                <div className="collapse m-1 card col-md-6 col-sm-12 p-1" id={(this.props.title + this.props.price) || `collapse-target${this.props.id}`}>
                </div>
            </>
        );
    }
}
 
export default Card;