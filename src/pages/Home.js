import React from 'react'
import './pages.css'
import Card from '../components/Card'
import Recentblog from '../components/Recentblog'
import frontendimage from '../images/frontend.jpg'; 
import backendimage from '../images/backend.png'; 
import databaseimage from '../images/database.png'; 
import frameworkimage from '../images/framework.png'; 
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
        <div className="container wrapper">
            <div className="row mt-5">
                <div className="col-md-6">
                    <img src="images/image1.svg" alt="" />
                </div>
                <div className="col-md-6 about-section">
                    <div className="row">
                        <div className="col-md-12">
                        <h3 className='text-info'>Give Power To Your Thought</h3>
                        </div>
                        <div className="col-md-12">
                        <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed ipsa dicta necessitatibus doloremque temporibus quas fugit tempora voluptatum excepturi molestiae.</h5>
                        <button className='btn btn-info'>Explore Now</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mt-5 border p-3">
                <div className="col-md-12 text-center">
                    <h2>Recent Posts</h2>
                </div>
            </div>
                <Recentblog></Recentblog>
            <div className="row mt-4 border">
                <div className="col-md-12 text-center p-3">
                    <h2>Category</h2>
                </div>
            </div>
            <div className="row border">
                <Card category="frontend"  image={frontendimage}/>
                <Card category="backend"   image={backendimage}/>
                <Card category="database"  image={databaseimage}/>
                <Card category="framework" image={frameworkimage}/>
            </div>
            <div className="row mt-4 border p-2">
                <div className="col-md-12 text-center">
                    <h2>Frequently Asked Questions</h2>
                </div>
            </div>
            <div className="row border">
                <div className="col-md-12">
                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active p-5">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium omnis, dolores harum mollitia animi magnam maiores? Asperiores doloremque commodi ex!</p>
                    </div>
                    <div className="carousel-item p-5">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident excepturi veritatis omnis, quibusdam quos rerum. Totam perferendis et doloremque alias.</p>
                    </div>
                    <div className="carousel-item p-5">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat hic aspernatur non sit quod dicta similique quam quos quas magni.</p>
                    </div>
                </div>
                <a className="carousel-control-prev bg-info" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next bg-info" href="#carouselExampleControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
                </div>
            </div>
        </div>
        <div className="container-fluid">
        <div className="row p-2 border bg-light">
                <div className="col-md-12 text-center">
                    <h2>Footer Section</h2>
                </div>
            </div>
        </div>
    </>
  )
}

export default Home


 