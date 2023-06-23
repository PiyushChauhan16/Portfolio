import React from 'react'
import data from "./data"

const Education = () => {
  const listOfEducation = data.education;

  return (
    <div className = "education-div">
        <div className='education-arrangment' >
            <div className='heading-div'>
                <p className='education-heading'>Education Details</p>
                <p className='line'>_</p>
            </div>
            <div>
            <ul >
                {listOfEducation.map((curr)=>{
                    return(
                        <li className='education-list'>
                            <div className='education-detail'>
                                <p className='standard'>{curr.standard}</p>    
                                <p className='school'>{curr.school}</p>
                                <p className='year'>{curr.year}</p>
                                <p className='cgpa'><strong>CGPA/Percentage: {curr.cgpa}</strong></p>
                                <br></br><br></br>
                            </div>
                        </li>
                        
                    )
                })}
            </ul>
                
            </div>
        </div>

    </div>
  )
}

export default Education