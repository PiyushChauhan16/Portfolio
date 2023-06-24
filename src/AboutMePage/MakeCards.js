import React from 'react'
import "./style.css"

const MakeCards = ({project, choice=1}) => {
  return (
    <div>
            
        <div className={"card" + (choice === 1 ? "" : " short-card")}>
        <div className="card1">
            <p className = "project-name">{project.topic}</p>
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
                
           
            <div className="go-corner" href="#">
            <div className="go-arrow">
                <button style={{
                    background:"transparent",
                    color: "white",
                    border: "none",
                    cursor: "pointer"
                }}></button>
            </div>
            </div>

            <div>
                {choice === 1 && (<a style={{color:"black", textDecoration:"none"}} href={project.link}><button className='visit-btn'>VISIT PROJECT </button></a>)}
            </div>
            
            
        </div>
        

        </div>
    </div>
  )
}

export default MakeCards