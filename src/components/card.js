import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

const Card = (props) => {
  return (
    <>
        <div className="col-md-3 p-2">
            <div className="card">
                <img className="card-img-top" src={props.image} alt="Card image cap"/>
                    <div className="card-body">
                        <h5 className="card-title text-capitalize">{props.category}</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <NavLink to={`blogcategory/${props.category}`} className="btn btn-info text-capitalize">{props.category}</NavLink>
                    </div>
            </div>
        </div>
    </>
  )
}

export default Card