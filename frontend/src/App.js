import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Home from './components/main/Home';
import Showdatapage from './components/main/ViewData'

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/allData' element={<Showdatapage />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
