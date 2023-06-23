import React from 'react'
import data from "./data.js"
import MakeCards from './MakeCards.js';

const Projects = () => {
    const listOfProjects = data.projects;
    console.log (listOfProjects);

    
    return (
    <div className='project-div'>
        <div>
            <p className="project-heading"><strong>Projects</strong></p>
        </div>
        <div class = "card-arrangment">
            {listOfProjects.map ((curr)=>{
                return(
                    <>
                        <MakeCards key = {curr.id} project = {curr}/>
                    </>
                    
                )
            })}

            
        </div>
    </div>
    )
}

export default Projects