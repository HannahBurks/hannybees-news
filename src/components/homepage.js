import { Navigate } from 'react-router-dom';
import '../App.css';
import {Routes, Route, useNavigate} from 'react-router-dom';
import { useEffect } from 'react';


export default function Homepage(){

    
    const navigate = useNavigate();

    return(
           <div>
               <h1 className="homepage-title">ARTICLE CATAGORIES</h1>
               <div className='hexbuttonContainer'>
<div className='hexbuttons'>
  <div className='hexr'>
    <button className='hexagonbutton' onClick={() => navigate('/categories', { state: {name:'coding'}})} ><span  title='Coding'><i className='fa fa-bolt'></i></span>
    </button>
    <button className='hexagonbutton' onClick={() => navigate('/categories', { state: {name:'cooking'}})}><span title='Cooking'><i className='fa fa-map'></i></span> </button>
  </div>
  <div className='hexr'>
    <button className='hexagonbutton' onClick={() => navigate('/categories', { state: {name:'football'}})}><span  title='Football'><i className='fa fa-home'></i></span></button>
    <div className='hexagon'><span><i className='fa fa-building'></i></span></div>
  </div>
  <div clasNames='hexr'>
    <div className='hexagon'><span ><i className='fa fa-star'></i></span></div>
    <div className='hexagon'><span ><i className='fa fa-pencil'></i></span></div>
  </div>
</div>
</div>
<div className="aboutUsSection">
<h3 className ="aboutUsTitle">ABOUT US</h3>
<p className ="introduction">Welcome to Hannybee News, the only news platform that has a deep concern and passion for bees! 
Bees are integral to our planet in order for life to thrive. Bees work hard in groups to gather pollen, a bit how journalist work to gather information for news collums!
We are inspired by bees work ethic and unification. We believe the world would be a better place if humans were to also incoperate these values, rather than being deeply divided. 
One way to do this, is to have platforms that allow us to express views, engage in discussion and invoke mutual understanding in a calm and compassionate way...this is where Hannybee's news comes in! 
</p>
</div>
</div>
    )
}