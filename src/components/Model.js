import React from 'react'


import classes from "./Model.module.css"

function Model({user}) {
   

  return (
    <div className={classes.model}>
        <div className={classes.image}>
            <img src={user.avatar} alt= {`{user.first_name}`}/> 
        </div>
        <div className={classes.description}>
            <table>
                <td>
                    <tr>First Name</tr>
                    <tr>Last  Name</tr>
                    <tr>Email</tr>
                </td>
                <td>
                    <tr>{user.first_name}</tr>
                    <tr>{user.last_name}</tr>
                    <tr>{user.email}</tr>
                </td>

            </table>
           
        </div>
    </div>
  )
}

export default Model