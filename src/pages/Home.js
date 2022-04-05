import React from 'react'
import './pages.css'
import Card from '../components/card'

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
                        <h3 className='text-info'>Give Power To Your Thouts</h3>
                        </div>
                        <div className="col-md-12">
                        <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed ipsa dicta necessitatibus doloremque temporibus quas fugit tempora voluptatum excepturi molestiae.</h5>
                        <button className='btn btn-info'>Explore Now</button>
                        <h2>arbaaz unique</h2>
                        <p>The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mt-5 border p-3">
                <div className="col-md-12 text-center">
                    <h2>Recent Posts</h2>
                </div>
            </div>
             <div className="row border">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
             </div>
            <div className="row mt-4 border">
                <div className="col-md-12 text-center p-3">
                    <h2>Category</h2>
                </div>
            </div>
            <div className="row border">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
            <div className="row mt-4 border p-2">
                <div className="col-md-12 text-center">
                    <h2>Frequently Asked Questions</h2>
                </div>
            </div>
            <div className="row border">
                <div className="col-md-12">
                <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active p-5">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium omnis, dolores harum mollitia animi magnam maiores? Asperiores doloremque commodi ex!</p>
                    </div>
                    <div class="carousel-item p-5">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident excepturi veritatis omnis, quibusdam quos rerum. Totam perferendis et doloremque alias.</p>
                    </div>
                    <div class="carousel-item p-5">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat hic aspernatur non sit quod dicta similique quam quos quas magni.</p>
                    </div>
                </div>
                <a class="carousel-control-prev bg-info" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next bg-info" href="#carouselExampleControls" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
                </div>
            </div>
            <div className="row p-3 border">
                <div className="col-md-12 text-center">
                    <h2>Footer Section</h2>
                </div>
            </div>
            <div className="row border border">
                    <div className="col-md-12">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, culpa vel, amet quod iste numquam deserunt eum ab porro dicta explicabo odio neque! Eligendi quisquam quod at iste, unde quidem numquam? Nisi soluta eos recusandae ipsam voluptatem repellat tempora necessitatibus. Reiciendis modi nostrum non, unde eius eveniet eum necessitatibus esse.Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, dolorem voluptatem rem quod aliquid totam corporis earum in, ipsam beatae ad temporibus iste repudiandae nihil provident quam officia pariatur at ipsum laboriosam accusantium! Officia aliquid minus quia ipsa dignissimos doloremque dolorum fugit explicabo sit nesciunt nostrum expedita nisi iure, et fuga aut molestias perspiciatis at eaque ab, quasi vitae tempore ducimus delectus? Eligendi, voluptate deserunt! Tempore temporibus dolores adipisci expedita ab ducimus consequuntur animi, repellendus dolorum minus, magnam sequi a facere, quasi voluptas odit eaque eos? Sapiente, quisquam odio aut modi in doloremque sit laboriosam eius reiciendis voluptatem, laudantium deserunt?</div>
            </div>
        </div>
    </>
  )
}

export default Home


