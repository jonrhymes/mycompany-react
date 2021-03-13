import './App.scss';
import 'bulma';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Faq from './components/Faq/Faq';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route path="/faq"><Faq /></Route>
      </Switch>
      <Footer></Footer>
    </div>
  );
}

export default App;
