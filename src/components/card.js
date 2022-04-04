import React from 'react'

const Card = () => {
  return (
    <>
        <div className="col-md-3 p-2">
            <div className="card">
                <img className="card-img-top" src="images/two.jpg" alt="Card image cap"/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-info">Read More</a>
                    </div>
            </div>
        </div>
    </>
  )
}

export default Card