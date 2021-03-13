import './Home.scss'

function Home() {
    let heading = 'Soaring to new heights';
    let subheading = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra, urna id pellentesque consequat.';
    let testimonial = '“Absolutely brilliant tool for SaaS and PasS businesses. We couldn’t survive without it!”';
    let author = '- Alison T.';
    return (
        <>
        <div className="home">
            <section className="hero">
                <div className="hero-body">
                    <p className="title">{ heading }</p>
                        <div className="is-two-thirds column is-paddingless">
                            <p className="subtitle is-4">{ subheading }</p>
                        </div>
                            <a className="button is-large is-primary" id="learn">Learn More</a>
                </div>
            </section>

        <section className="section">
        <div className="container">
            <div className="columns pd is-desktop">
            <div className="column is-1 has-text-centered">
                <i className="fa fa-cog is-primary"></i>
            </div>
            <div className="column is-one-third-desktop">
                <p className="nu-title"><strong>We provide superior logistics so that your business can succeed in any environment.</strong></p>
            </div>
            <div className="column">
                <p className="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tristique lorem elit, porta hendrerit metus condimentum id. </p>
            </div>
            </div>
        </div>

        <div className="columns pd">
            <div className="column">
            <div className="card">
                <div className="card-content">
                <p className="new-title">{ testimonial }</p>
                <p className="subtitle">{ author }</p>
                </div>
            </div>
            </div>
            <div className="column">
            <div className="card">
                <div className="card-content">
                <p className="new-title">{ testimonial }</p>
                <p className="subtitle">{ author }</p>
                </div>
            </div>
            </div>
            <div className="column">
            <div className="card">
                <div className="card-content">
                <p className="new-title">{ testimonial }</p>
                <p className="subtitle">{ author }</p>
                </div>
            </div>
            </div>
        </div>
        </section>

    </div>
        </>
    );
}
  
export default Home;