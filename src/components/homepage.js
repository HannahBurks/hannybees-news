import { Navigate } from 'react-router-dom';
import '../App.css';
import {Routes, Route, useNavigate} from 'react-router-dom';
import { useEffect } from 'react';


export default function Homepage(){

    
    const navigate = useNavigate();

    return(
           <div>
               <h1>ARTICLE CATAGORIES</h1>
<div className='hexbuttons'>
  <div className='hexr'>
    <button className='hexagon' onClick={() => navigate('/coding')} ><span  title='Coding'><i className='fa fa-bolt'></i></span>
    </button>
    <button className='hexagon' onClick={() => navigate('/cooking')}><span title='Cooking'><i className='fa fa-map'></i></span> </button>
  </div>
  <div className='hexr'>
    <button className='hexagon' onClick={() => navigate('/football')}><span  title='Football'><i className='fa fa-home'></i></span></button>
    <div className='hexagon'><span><i className='fa fa-building'></i></span></div>
  </div>
  <div clasNames='hexr'>
    <div className='hexagon'><span ><i className='fa fa-star'></i></span></div>
    <div className='hexagon'><span ><i className='fa fa-pencil'></i></span></div>
  </div>
</div>
</div>
    )
}