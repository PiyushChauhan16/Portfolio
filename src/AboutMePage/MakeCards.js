import React from 'react'
import "./style.css"

const MakeCards = ({project, choice=1}) => {
  return (
    <div>
            
        <div class="card">
        <div class="card1">
            <p class = "project-name">{project.topic}</p>
            {choice === 1 && project.tech_stack.map((curr)=>{
                return (
                    <p class = "tech-stack-list">{"• " + curr +" "}</p>
                )
            })}

            <ul>
                {project.details.map((curr)=>{
                    return (
                        <li className="project-summary">{curr}</li>
                    )
                })}
            </ul>
                
           
            <div class="go-corner" href="#">
            <div class="go-arrow">
                <button style={{
                    background:"transparent",
                    color: "white",
                    border: "none",
                    cursor: "pointer"
                }}></button>
            </div>
            </div>
            {choice === 1 && (<button className='visit-btn'><a style={{color:"black"}} href={project.link}>VISIT PROJECT</a> </button>)}
            
        </div>
        

        </div>
    </div>
  )
}

export default MakeCards