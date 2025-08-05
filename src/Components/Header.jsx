import React from 'react'
import { Link } from 'react-router-dom'
 import { FaHome } from 'react-icons/fa';
 import { MdGroups } from 'react-icons/md';
 import { FaEye } from 'react-icons/fa'; 
 import { FaTools } from 'react-icons/fa'; 
 export default function Header() {
  return (
    <>
    <section>
         <div className='App-header'>

          <h1 style={{
            color:'#3498db' ,
            fontSize:'2rem',
            paddingLeft:'15px' ,
            padding:'3px',
            borderRadius:'10px',
            border:'1px solid white',
            backgroundColor:'white'}}>
            Welcome aboard! 
          </h1>
           <ul className='App-header-lists'>
            <li className='App-lists'>
                  <Link to="/boarding" className="nav-link active"  style={{  fontSize:'2rem'}}><FaHome /></Link>
                </li>
               
                <li className='App-lists'>
                  <Link to="/branding:id" className="nav-link" style={{  fontSize:'2rem'}} ><  MdGroups  /></Link>
                </li>
                <li className='App-lists'>
                  <Link to="/preview" className="nav-link" style={{  fontSize:'2rem'}} >< FaEye /></Link>
                </li>
                <li className='App-lists'>
                  <Link to="/tools" className="nav-link"  style={{  fontSize:'2rem'}} >< FaTools /></Link>
                </li>


            </ul> 

           
         </div>

         
       


    </section>
    
    
    </>
  )
}
