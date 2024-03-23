import React from "react"

export default function Card(props){
    console.log(props)
    return(
      /*  <div  className="card">
            <img src = "../images/katie-zaferes.png"  className="card--image"/>
            <div className="card--stats">  
                <img src ="../images/star.png" className="card--star" />   
  

                
                <span>5.0</span> 
                <span className="gray">(6) .</span>
                <span className="gray" >USA</span>
            </div>  
                  
                <p>Life Lessons with Katie Zaferes</p>
                <p><span className="bold"> From $136 </span> / person</p>
        </div>
    )   // Added inline elements like span.  
     */

    // we jump into jsx and then back into javascript with the Calibraces and I did some interpolation 
    // by allowing java script values into the string.   At className ="card--image" we are back to jsx again
    <div  className="card"> 
            <img src = {'../images/${props.img}'}  className="card--image"/>   
            <div className="card--stats">  
                <img src ="../images/star.png" className="card--star" />   
  

                
                <span>{props.rating}</span> 
                <span className="gray">({props.reviewCount}) .</span>  
                <span className="gray" >{props.country}</span>
            </div>  
                  
                <p>{props.title}</p>
                <p><span className="bold"> From ${props.price}</span> / person</p>
        </div>
    )   // Added inline elements like span.  
    // in the span at line 34 the () is part of jsx. 
 }