import React from 'react'
import {useNavigate} from "react-router-dom";

import classes from "./Card.module.css";

function Card({user}) {

 

  const navigate = useNavigate();

    const handleOpen =(id)=>{
            navigate(`/info?id=${id}`);
            
    }

   
  return (
      <>
            <div className={classes.card} key={user.id} style={{cursor:"pointer"}} onClick={()=>handleOpen(user.id)}>
                <div className={classes.image}>
                <img  src={user.avatar} alt= {`{user.first_name}`}/>
                </div>
                <div className={classes.details}>
                    <strong>{user.first_name}</strong>
                    <p>{user.email}</p>
                </div>

            
            </div>
    </>
  )
}

export default Card