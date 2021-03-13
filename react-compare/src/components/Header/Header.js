import React, { Component } from 'react';
import './Header.scss'
import { BrowserRouter as Router, Link } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { isToggleOn: false };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }
    render() { 

        let menuActive = this.state.isToggleOn ? 'is-active' : '';
        return (
            <>
                <nav className="navbar is-dark" role="navigation" aria-label="main navigation">
                
                    <div className="navbar-brand">
                        <button id="brand" className="button is-dark is-medium">MyCompany</button>

                        <a role="button" className={"navbar-burger "+menuActive} aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" onClick={this.handleClick}>
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                        </a>
                    </div>

                    <div id="navbarBasicExample" className={"navbar-menu navbar-end "+menuActive}>
                        {/* <div className="navbar-end"> */}
                            <Router forceRefresh={true}>
                                <Link to="/" className="navbar-item">Home</Link>
                                <Link to="/faq" className="navbar-item">Features</Link>
                                <Link to="/faq" className="navbar-item">About</Link>
                                <Link to="/faq" className="navbar-item">FAQ</Link>
                            </Router>
        
                            <div className="navbar-item">
                                <div className="buttons">
                                    <button className="button is-primary is-outlined">
                                        <span className="icon">
                                            <i className="fa fa-download"></i>
                                        </span>
                                        <span>Join Now</span>
                                    </button>
                                </div>
                            </div>
                        {/* </div> */}
                    </div>
                </nav>
            </>
        );
    }
  }
  
  
  export default Header;