import './App.scss';
import 'bulma';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Faq from './components/Faq/Faq';
import { Route, Switch, BrowserRouter, HashRouter } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <Header></Header>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route exact path='/faq' component={Faq}></Route>
          </Switch>
        </BrowserRouter>
      <Footer></Footer>
      </div>
  );
}

export default App;
