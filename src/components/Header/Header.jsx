import React from 'react'

export default function Header() {
    const headerStyle ={
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"black",
        color:"white",
        padding:"1em"

        
    }
  return (
    <div style= {headerStyle}>
     <h1>Components List</h1> 
    </div>
  )
}
