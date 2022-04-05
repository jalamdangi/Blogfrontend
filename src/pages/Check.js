import React, { useEffect , useState } from 'react';
import { NavLink } from 'react-router-dom';
import './pages.css';

const Check = () => {
    const [data, setData] = useState([])
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products').then((result)=>{
            result.json().then((response)=>{
                setData(response)
            })
        })
    },[])
    // console.log(data)
  return (
    <>
    <div className="container">
        <h3 className='border'>Community Posts</h3>
        <div className="row">
        {
        data.slice(0,4).map((item)=>{ 
            return(
            <div className="col-md-6">
                <div className="card">
                    <img className="card-img-top" src={item.image} alt="Card image cap" style={{height:200,width:200}}/>
                    <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text text-truncate">{item.description}</p>
                    <NavLink to={`checkproduct/${item.id}`} className="btn btn-primary">Check Product</NavLink>
                    </div>
                </div>
            </div>
                    )
                 })
            }
        </div>
    </div>
    </>
  )
}

export default Check