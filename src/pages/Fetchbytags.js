import React, { useEffect , useState } from 'react';
import { NavLink , useParams } from 'react-router-dom';
import './pages.css';
import Recentpostsidebar from '../components/Recentpostsidebar'

const Fetchbytags = () => {
    const {tag} = useParams();
    const [data, setData] = useState([])
    useEffect(()=>{
        fetch(`http://localhost:5000/fetchbytags/${tag}`).then((result)=>{
            result.json().then((response)=>{
                setData(response)
            })
        })
        console.log('i am fired')
    },[tag])
    // console.log(data)
  return (
    <>
    <div className="container-fluid">
        <h3 className='p-2'>Post Related {tag}</h3>
        <div className="row">
            <div className="col-md-9">
                <div className="row">
        {
        data.slice(0,8).map((item)=>{ 
            return(
                  <>
                  <div  className="card col-md-6" >
                    <img className="card-img-top" src={item.image} alt="Card image cap" style={{height:200,width:200}}/>
                    <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text text-truncate">{item.description}</p>
                    <p>{item.tags.map((tag)=>{return(
                      <>
                      <NavLink to={`/fetchbytags/${tag}`} className="blog-tags">{tag}</NavLink>
                      </>
                    )})}</p>
                    <NavLink to={`singleblog/${item._id}`} className="btn btn-primary">Read More</NavLink>
                    </div>
                 </div>
                  </>
                    )
                 })
            }
            </div>
            </div>
            <div className="col-md-3">
              <div className="row border">
              <h3 className='pl-3'>Recent Posts</h3>
              <div className="col-md-12">
                <Recentpostsidebar></Recentpostsidebar>
              </div>
            </div>
            </div>
        </div>
       
    </div>
    </>
  )
}

export default Fetchbytags






