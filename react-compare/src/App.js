import './App.scss';
import 'bulma';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Faq from './components/Faq/Faq';
import { Route, Switch, HashRouter } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <Header></Header>
      {/* <HashRouter basename="/"> */}
        <Switch>
          <Route exact path={process.env.PUBLIC_URL + '/'}><Home /></Route>
          {/* <Route exact path={`%PUBLIC_URL%/`} component={Home}><Home /></Route> */}
          // Added process.env.PUBLIC_URL to Route for Deployment
          <Route path={process.env.PUBLIC_URL + '/faq'} component={Faq}>
          <Faq />
        </Route>
        </Switch>
      {/* </HashRouter> */}
      <Footer></Footer>
    </div>
  );
}

export default App;
