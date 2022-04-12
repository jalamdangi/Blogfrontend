import React, { useState } from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './user.css';
import profilepic from '../images/profilepic.jfif';
import Addpost from './Addpost';
import Editpost from './Editpost';
import Viewpost from './Viewpost';
import AskQuestion from './AskQuestion';
const Userdashboard = () => {
  const [userrole, setuserRole] = useState(<Addpost></Addpost>);
  return (
    <>
      <div className="container-fluid bg-light">
        <div className="row">
          <div className="col-md-2 border sidebar-menu">
              <h4 className=' m-4'>USER ROLES</h4>
              <div className="col-md-12">
                <div className="row">
                  <div className="col-md-3"><i className='fa fa-plus'></i></div>
                  <div className="col-md-9"><button onClick={()=>setuserRole(<Addpost></Addpost>)} className='btn btn-success'>Add Post</button></div>
                </div>
                <div className="row">
                  <div className="col-md-3"><i className='fa fa-eye'></i></div>
                  <div className="col-md-9"><button onClick={()=>setuserRole(<Viewpost></Viewpost>)} className='btn btn-success'>View Post</button></div>
                </div>
                <div className="row">
                  <div className="col-md-3"><i className='fa fa-edit'></i></div>
                  <div className="col-md-9"><button onClick={()=>setuserRole(<Editpost></Editpost>)} className='btn btn-success'>Edit Post</button></div>
                </div>
                <div className="row">
                  <div className="col-md-3"><i className='fa fa-question'></i></div>
                  <div className="col-md-9"><button onClick={()=>setuserRole(<AskQuestion></AskQuestion>)} className='btn btn-success'>Ask Question</button></div>
                </div>
              </div>
          </div>
          <div className="col-md-9 border">
            <div>{userrole}</div>
          </div>
          <div className="col-md-1 border text-center">
            <img src={profilepic} alt="" srcset="" id='userpic' />
          </div>
        </div>
      </div>
    </>
  )
}

export default Userdashboard