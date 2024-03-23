import React from "react"
import Navbar from "./COMPONENTS/Navbar"
import Card from "./COMPONENTS/Card"
import Hero from "./COMPONENTS/Hero"

export default function App(){
    return(
        <div>
            <Navbar />
            
          <Card                                                       // beginning of Card Component
            img="katie-zaferes.png"
            rating="5.0"   //sometimes it could{5.0} cos its a floating number
            reviewCount={6}
            country="USA"
            title="Life Lessons with Katie Zaferes"
            price ={136} 
             />  

        </div>  //End Of div
    )  
    
}
    