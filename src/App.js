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
      <About />
    </div>
  );
}

export default App;
