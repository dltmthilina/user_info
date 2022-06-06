import React from 'react'
import { useState, useEffect } from 'react';
import axios from "axios";
import Card from '../components/Card';

import classes from "./Home.module.css";

function Home() {

const [users, setUsers] = useState([]);

    const fetchUsers= async()=>{
        await axios.get('https://reqres.in/api/users?page=1').then((res)=>{
          setUsers(res.data.data);
          

        }).catch((err)=>{
          alert(err.message)
          console.log(err)
        });
    }
  
    useEffect(()=>{
      fetchUsers();
      
    },[])


  return (
    <div className={classes.home}>

            <div className={classes.users}>
            {users && users.map((user)=>(
                <Card key={user.id} user={user} />
            ))}
            </div>
    </div>
  )
}

export default Home