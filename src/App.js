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
import Recentblog from './components/Recentblog';
import BlogCategory from './pages/BlogCategory';
import Footer from './components/Footer';
import Question from './pages/Question';
import Userdashboard from './user/Userdashboard';
import Edit from './user/Edit';
import ViewQuestion from './user/ViewQuestion';
import Singlequestion from './user/Singlequestion';

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
          <Route exact path='/fetchbytags/:tag/singleblog/:id' element={<Singleblog/>}/>
          <Route exact path='/recentblog' element={<Recentblog/>}/>
          <Route exact path='/singleblog/:id' element={<Singleblog/>}/>
          <Route exact path='/singleblog/:id/:category' element={<Singleblog/>}/>
          <Route exact path='blog/singleblog/:id/:category' element={<Singleblog/>}/>
          <Route exact path='/blogcategory/:category' element={<BlogCategory/>}/>
          <Route exact path='/blogcategory/:category/singleblog/:id' element={<Singleblog/>}/>
          <Route exact path='/Userdashboard' element={!localStorage.getItem('token')?<Signin/>:<Userdashboard/>}/>
          <Route exact path='/Question' element={<ViewQuestion />} />
          <Route exact path='/singlequestion/:id' element={<Singlequestion />} />
          <Route exact path='/editpost/:id' element={<Edit />} />
          <Route path="*" element={<Errorpage />} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
