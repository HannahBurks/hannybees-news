
    import { useEffect } from "react";
    import {Routes, Route, useNavigate} from 'react-router-dom';
    import { useState } from "react";
    import '../App.css';
    import Article from './article'
import GetTopicData from "./topic_articles";
    

    export default function Football(){
    
    
    return (
        <div className ="footballitemCard">
            <h2 className="footballHeader">Football Articles</h2>
            <GetTopicData/>
                  
    
    </div>
    )
    }
