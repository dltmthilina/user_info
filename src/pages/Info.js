import React, { useEffect, useState } from 'react'
import axios from 'axios'

import { useSearchParams } from 'react-router-dom'
import Model from '../components/Model';
import classes from "./Info.module.css";

export default function Info() {

  let [searchParams]= useSearchParams();
  let id =searchParams.get('id')
  console.log(id);

  const [user, setUser]= useState([]);

    useEffect(()=>{
      const fetchUser= async()=>{
        await axios.get(`https://reqres.in/api/users/${id}`).then((res)=>{
          setUser(res.data.data);
        }).catch((err)=>{
          alert(err.message)
          console.log(err)
        });
    }

    fetchUser();
    
    },[])

  

  return (
    <div className={classes.info}>
    <Model user={user}/>
    </div>
  )
}
