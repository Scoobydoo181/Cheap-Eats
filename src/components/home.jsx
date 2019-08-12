import React, { Component } from 'react';

import Navbar from './navbar'
import Card from './card'
import NewCardForm from './newCardForm'

class Home extends Component {
   state = {
       showNewCardForm: false,
       cards: []
   } 
    handleSearch = () =>{
        return true
    }

    newCard = (e) =>{
        e.preventDefault()
        this.setState((state) =>({showNewCardForm: !state.showNewCardForm}))
    }

    submitNewCard = () => {

    }

    render() { 
        return (
            <React.Fragment>
                <Navbar searchHandler={this.handleSearch} newCardHandler={this.newCard} loggedIn={false}/>
                <div className="container-flex bg-light h-100">
                    <div className="row justify-content-center">
                        {this.state.showNewCardForm && <NewCardForm formSubmit={this.submitNewCard}/>}
                        {[...Array(9).keys()].map((i) => <Card id={i}/>)}
                    </div>
                </div>
            </React.Fragment>  
        );
    }
}
 
export default Home;