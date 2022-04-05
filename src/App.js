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
<<<<<<< HEAD
import Userprofile from './pages/Userprofile';
=======
>>>>>>> 1323dd27ad9a17318f5f7d65f373cd3add7e91cd
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
<<<<<<< HEAD
          <Route exact path="/fetchbytags/:tags/singleblog/:id" element={<Singleblog />}></Route>
          <Route exact path='/userprofile' element={<Userprofile/>}/>
=======
>>>>>>> 1323dd27ad9a17318f5f7d65f373cd3add7e91cd
          <Route path="*" element={<Errorpage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
