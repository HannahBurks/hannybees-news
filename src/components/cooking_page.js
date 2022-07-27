
    import { useEffect } from "react";
    import {Routes, Route, useNavigate} from 'react-router-dom';
    import { useState } from "react";
    import '../App.css';
    import Article from './article'
    import GetTopicData from "./topic_articles";

    export default function Cooking(){
      
    
    return (
        <div className ="cookingitemCard">
            <h2 className="cookingHeader">Cooking Articles</h2>
            <GetTopicData/>
    </div>
    )
    }
