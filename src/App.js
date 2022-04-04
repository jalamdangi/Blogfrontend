import {BrowserRouter , Routes , Route} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Singleblog from './pages/Singleblog';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Check from './pages/Check';
import Errorpage from './pages/Errorpage';
import Fetchbytags from './pages/Fetchbytags';
// import Singeblog from './pages/Singleblog';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/blog' element={<Blog/>}/>
          <Route exact path='/contact' element={<Contact/>}/>
          <Route exact path='blog/singleblog/:id' element={<Singleblog/>}/>
          <Route exact path='/login' element={<Signin/>}/>
          <Route exact path='/signup' element={<Signup/>}/>
          <Route exact path='/check' element={<Check/>}/>
          <Route exact path='/fetchbytags/:tag' element={<Fetchbytags/>}/>
          <Route path="*" element={<Errorpage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
