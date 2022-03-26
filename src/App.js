import logo from './logo.svg';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import Home from './pages/Home';
import Navbar from './components/Navbar';
import About from './pages/About';
import Error from './pages/Error';
import Services from './pages/Services';
import Peoples from './pages/Peoples';
import SinglePerson from './pages/SinglePerson';

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/peoples' element={<Peoples/>}/>
        <Route path='/person/:seed/:index' element={<SinglePerson/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
