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
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Home}><Home /></Route>
          <Route path="/faq" component={Faq}><Faq /></Route>
        </Switch>
      </HashRouter>
      <Footer></Footer>
    </div>
  );
}

export default App;
