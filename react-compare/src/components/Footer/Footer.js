import './Footer.scss'

function Footer() {
    return (
        <>
            <footer className="footer">
                <div className="container">
                    <div className="columns">
                        <div className="column">
                            <p className="foot-desc">Is this worth anything?</p>
                            <p className="answer">You know what? It is! Email the creator of this website: <strong>jonrhymes@gmail.com</strong> for details. He’s a Developer. Ooo!</p>
                        </div>
                        <div className="column has-text-right">
                            <a className="social-icon" href="https://www.facebook.com/"><i className="fa fa-2x fa-facebook"></i></a>
                            <a className="social-icon" href="https://twitter.com/"><i className="fa fa-2x fa-twitter"></i></a>
                        </div>
                    </div>
                </div>
    </footer>
        </>
    );
  }
  
  export default Footer;