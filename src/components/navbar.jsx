import React, { Component } from 'react';

class Navbar extends Component {
    render() { 
        return ( 
            <nav className="navbar navbar-dark bg-dark navbar-expand-sm">

                <a className="navbar-brand" href="/">
                    <img src="favicon.ico" alt="logo"></img>
                </a>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul className="navbar-nav nav-pills">
                            <li className="nav-item"><a className="nav-link" href={this.props.loggedIn ? "/account" : "/login"} >{this.props.loggedIn?"Account":"Login"}</a></li>
                            <li className="nav-item"><a className="nav-link btn btn-sm btn-primary" href="/new" onClick={this.props.newCardHandler} >Create new</a></li>
                    </ul>

                    <form className="form-inline ml-auto" onSubmit={this.props.searchHandler}>
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>

                </div>
            </nav> 
            );
    }
}
 
export default Navbar;