import React from 'react'
import data from "./data"

const Internship = () => {
    const listOfInternship = data.internship;
    const [index, setIndex] = React.useState (0);
    const intern = listOfInternship[index];

    function handleClick (){
        const len = listOfInternship.length;
        setIndex((index+1)%len);
        console.log (len);
    }

   

  return (
    <div className='intern-div'>
        <p className='internship-heading'>Internships</p>
        <div className='intern-arrangment'>
        <div className="about-intern">
            <p className='company'>{intern.company}</p>
            <p className='location'>{intern.location} </p>
            <p className='role'>{intern.role} </p>
            <p className='date'>{intern.date}</p>
            <div className='intern-list'>
                <ul >
                    {intern.description.map((curr)=>{
                    return(
                        <li className='list-item'><p className='intern-summary'>{curr}</p></li>
                    )
                })}
                </ul>
                <button className = "certificate-btn"><a style={{color:"black"}} href={intern.certificate}>CERTIFICATE</a></button>
            </div>           
        </div>

        <div style={{position:"relative"}}>
            
            <button className="intern-btn" onClick={handleClick}>{">"}</button>
        </div>        
    </div>
    </div>
    
  )
}

export default Internship