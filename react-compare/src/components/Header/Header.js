import '../Header/Header.scss'
import { BrowserRouter as Router, Link } from 'react-router-dom';

function Header() {

    return (
        <>
            <nav className="navbar is-dark" role="navigation" aria-label="main navigation">
                
            <div className="navbar-brand">
                <button id="brand" className="button is-dark is-medium">MyCompany</button>

                <button class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </button>
            </div>

            <div id="navbarBasicExample" className="navbar-menu">
                    <div className="navbar-end">
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
                </div>
            </div>
            </nav>
        </>
    );
  }
  
  
  export default Header;