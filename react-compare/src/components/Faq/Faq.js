import './Faq.scss';
import React, { Component } from 'react';
import axios from 'axios';

class Faq extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            faqs: []
        };
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            const faqs = res.data.slice(0, 10);
            this.setState({ faqs });
      })
        .catch(e => {
        this.error.push(e)
      })
    }

    render() {
        return (
            <>
                <div className="faq">
                    <div className="container">
                        <section className="section">
                            <h1 className="page-title">FAQ</h1>
                            <h2 className="subtitle-new is-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra, urna id pellentesque consequat. Etiam semper tellus condimentum commodo lobortis.</h2>

                            <div className="columns">
                                {this.state.faqs.map(faq =>
                                    <div className="column is-one-third">
                                        <div className="card">
                                            <div className="card-content">
                                                <p className="faq-title">{faq.title}</p>
                                                <p className="faq-body">{faq.body}</p>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </section>
                    </div>
                </div>
            </>
        )
    };
  }
  
export default Faq;