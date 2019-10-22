import React, { Component } from 'react';
import firebase from 'firebase'

export default class NewCardForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            title: "",
            file: null,
            imagePath: "",
            price: "",
            recipe:""
        }
    }
    
    render() { 
        return (
            <div className="card col-md-3 col-sm-12 m-1 p-1" >
                <h4 className="card-title">New Card</h4>
    
                <form onSubmit={this.formSubmit}>
                    <div className="form-group">
                        <label htmlFor="#meal-title" className="mr-4">Meal Title</label>
                        <input type="text" value={this.state.title} onChange={this.updateInput} name="title" className="form-control" id="meal-title" placeholder="Enter meal title"/>
                    </div>
    
                    <div className="form-group">
                        <label htmlFor="#meal-image" className="mr-4">Meal Image</label>
                        <input type="file" onChange={this.updateInput} name="file" className="form-control-file" id="meal-image" />
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="#meal-price" className="mr-4">Meal Price</label>
                        <input type="number" value={this.state.price} step="0.01" onChange={this.updateInput} name="price" className="form-control" id="meal-price" placeholder="0.00" />
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="#meal-recipe" className="mr-4">Meal Recipe</label>
                        <textarea className="form-control" value={this.state.recipe} onChange={this.updateInput} name="recipe" id="meal-recipe" placeholder="Enter meal instructions" />
                    </div>
    
                    <button type="submit" className="btn btn-primary">Submit</button>
    
                </form>
            </div>
          );
    }

    updateInput = e => {
        if(e.target.name === "file")
            this.setState({ file: e.target.files[0], imagePath: e.target.files[0].name })
        else
            this.setState({ [e.target.name]: e.target.value})
    }

    formSubmit = (e) => {
        e.preventDefault()
        this.props.addNewCard(this.state)
        
        firebase.firestore().collection("cards").add(this.state).then(doc => {
            firebase.storage().ref(`images/${doc.id}`).put(this.state.file)

            this.setState(state => ({
                title: "",
                file: null,
                price: "",
                recipe: "",
                imagePath: ""
            }))
        })
        this.props.toggle()
    }
}