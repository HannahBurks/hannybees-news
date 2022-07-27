
    import { useEffect } from "react";
    import {Routes, Route, useNavigate} from 'react-router-dom';
    import { useState } from "react";
    import '../App.css';
    import Article from './article'
    import GetTopicData from "./topic_articles";
    

    export default function Coding(){
    
    
    
    return (
        <div className ="codingitemCard">
            <h2 className="codingHeader">Coding Articles</h2>
             <GetTopicData/>
    </div>
    )
    }
    
    
 