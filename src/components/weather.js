
 
import React from 'react';
import ReactDOM from 'react-dom';

export default function Weather(){


    return(
    <div>
    <h1>Weather and Travel</h1>
    <h3>London</h3>
    <a className="weatherwidget-io" href="https://forecast7.com/en/51d51n0d13/london/" data-label_1="LONDON" data-theme="beige" >LONDON</a>
    <script>{
    !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src='https://weatherwidget.io/js/widget.min.js';fjs.parentNode.insertBefore(js,fjs);}}(document,'script','weatherwidget-io-js')}
    </script>
    </div>
    )
    }