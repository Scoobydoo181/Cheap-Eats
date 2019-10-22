import React, { Component } from 'react';

import Navbar from './navbar'
import Card from './card'
import NewCardForm from './newCardForm'

import firebase from 'firebase'
export default class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            showNewCardForm: false,
            cards: [],
            url: ""
        }
        this.app = firebase.initializeApp({PRIVATE_CONFIG: ""}); 
    }

    render() { 
        return (
            <>
                <Navbar searchHandler={this.handleSearch} newCardHandler={this.newCardLink} loggedIn={false}/>
                <div className="container-flex bg-light h-100">
                    <div className="row justify-content-center">
                        {this.state.showNewCardForm && <NewCardForm toggle={this.toggleNewCardForm} addNewCard={this.addNewCard} addImage={this.addImage}/>}
                        {/* <img href={this.state.url} alt="test"></img> */}
                        {(this.state.cards).map( (card) => <Card title={card.title} imagePath={this.getImage(card.imagePath)} price={card.price} recipe={card.recipe} key={card.id} />)}
                        
                    </div>
                </div>
            </>  
        );
    }

    getImage = (path) => {
    }
    
    componentDidMount = () => {
        firebase.firestore().collection('cards').get().then((querySnapshot) => {
            querySnapshot.docs.forEach((doc) => {
                const card = {
                    title: doc.data().title,
                    imagePath: doc.data().imagePath,
                    recipe: doc.data().recipe,
                    price: doc.data().price,
                    id: doc.id
                };
                this.addNewCard(card)
            });
        });

        firebase.storage().refFromURL("gs://cheap-eats-8325d.appspot.com/Profile Icon.png").getDownloadURL().then(dlurl => {
            this.setState({url: dlurl})
        })
        
    }
    
    addNewCard = (card) => {
        this.setState( (state) => ({ cards: [...state.cards, card] }) )
    }

    newCardLink = e =>{
        e.preventDefault()
        this.toggleNewCardForm()
    }

    toggleNewCardForm = () => {
        this.setState((state) => ({ showNewCardForm: !state.showNewCardForm }))
    }

}