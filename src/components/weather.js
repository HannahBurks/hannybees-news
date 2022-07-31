
 
import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react';
import {WeatherWidget} from "@daniel-szulc/react-weather-widget";
import { Timeline } from 'react-twitter-widgets'
export default function Weather(){
  
   

    return(
    <div>
    <h1 className ="weatherHeader">Weather and Travel</h1>
    <div className ="weatherWidget">
        <div></div>
    <WeatherWidget
        autoLocate="gps"
    />
    </div>
    <h2 className="TravelUpdates"> Travel updates from TFL : </h2>
    <div className = "Timeline">
    <Timeline className="tfl"
  dataSource={{
    sourceType: 'profile',
    screenName: 'TFL'
  }}
  options={{
    height: '300px',
    theme: 'dark',
    width: '350px',
    
  }}
  renderError={(_err) => <p>Could not load timeline</p>}
/>
</div>


    </div>
   
    )
   
    }