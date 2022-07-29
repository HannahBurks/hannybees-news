
 
import React from 'react';
import ReactDOM from 'react-dom';
import { Helmet } from "react-helmet"
export default function Weather(){


    return(
    <div>
    <h1>Weather and Travel</h1>
    <div>
    <a className="weatherwidget-io" href="https://forecast7.com/en/51d51n0d13/london/" data-label_1="LONDON" data-theme="beige" >London</a>
    <script>{
    !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src='https://weatherwidget.io/js/widget.min.js';fjs.parentNode.insertBefore(js,fjs);}}(document,'script','weatherwidget-io-js')}
    </script>
    </div>
      <Helmet>
    <div style="width:260px">
    <script language="JavaScript" src="https://www.tfl.gov.uk/tfl/syndication/widgets/serviceboard/embeddable/serviceboard-iframe-stretchy.js"></script>
    </div>
    </Helmet>
    </div>
    )
    }