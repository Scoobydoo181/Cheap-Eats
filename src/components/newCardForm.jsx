import React, { Component } from 'react';

class NewCardForm extends Component {
    state = {}
    render() { 
        return (
            <div className="card col-md-3 col-sm-12 m-1 p-1" >
                <h4 className="card-title">New Card</h4>

                <form action={this.props.formSubmit}>
                    <div className="form-group">
                        <label htmlFor="#meal-title" className="mr-4">Meal Title</label>
                        <input type="text" className="form-control" id="meal-title" placeholder="Enter meal title"/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="#meal-image" className="mr-4">Meal Image</label>
                        <input type="file" className="form-control-file" id="meal-image" />
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="#meal-price" className="mr-4">Meal Price</label>
                        <input type="number" className="form-control" id="meal-price" placeholder="Enter meal price" />
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="#meal-recipe" className="mr-4">Meal Recipe</label>
                        <textarea className="form-control" id="meal-recipe" placeholder="Enter meal instructions" />
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>

                </form>
            </div>
          );
    }
}
 
export default NewCardForm;