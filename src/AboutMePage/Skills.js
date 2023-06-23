import React from 'react'
import data from './data'
import MakeCards from './MakeCards';
import { useState } from 'react';

const Skills = () => {
    const listOfSkills = data.skills;
    

  return (
    <div className='project-div'>
        <div>
            <p className="project-heading"><strong>Skills</strong></p>
        </div>
        <div class = "card-arrangment">
            {listOfSkills.map ((curr)=>{
                return(
                    <>
                        <MakeCards key = {curr.id} project = {curr} choice={0}/>
                    </>
                    
                )
            })}

            
        </div>
    </div>
  )
}

export default Skills