import { useEffect } from "react";
import { useState } from "react";

import '../App.css';

export default function ActiveUser(){
    const [userDetails, setUserDetails] = useState('')
    
 

    useEffect(() => {
    fetch('https://hannybees-news-app.herokuapp.com/api/users').then((response) => {
        return response.json();
      })
      .then((data) => {
        const websiteUsers = data.users
        const myUser = websiteUsers.filter((user) => {
            return user.username ==="cooljmessy"
        })
        setUserDetails(myUser[0])
        
    })
    })
    



    return (
        <div className='user_card--active'>
   <img className= 'user_avatar--active' src={userDetails.avatar_url} alt={`${userDetails.name} avatar`} />
   <h2 className ="greeting">Hello 	
&#128075;</h2>
   <h3 className ="userName">
    {userDetails.name}</h3>
        </div>
    )}