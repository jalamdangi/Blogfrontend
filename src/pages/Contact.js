import React from 'react'

const Contact = () => {
  return (
    <>
        <div className="container-fluid">
          <div className="row mt-5">
            <div className="col-md-6 border signup-img">
              <img src="images/image6.svg" alt="" />
            </div>
            <div className="col-md-6 border">
              <h3 className='pt-2'>Please Share Your Feedback</h3>
            <form>
                <div className="form-group">
                  <label for="exampleInputEmail1">Your Name</label>
                  <input type="email" className="form-control"  placeholder="Enter Your Name"/>
                </div>
                <div className="form-group">
                  <label for="exampleInputPassword1">Enter Your Email</label>
                  <input type="password" className="form-control"  placeholder="Enter Your Email"/>
                </div>
                <div class="form-group">
                        <label for="exampleFormControlTextarea1">Write your feedback here</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                <button type="submit" className="btn btn-primary">Send Feedback</button>
              </form>
            </div>
          </div>
        </div>
    </>
  )
}

export default Contact