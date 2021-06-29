// router
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

// components
import About from './About'
import Header from './Header'

// styling
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Router>
        <Route path="/" component={About} />
      </Router>
    </div>
  );
}

export default App;
