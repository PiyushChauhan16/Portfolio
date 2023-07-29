import React from 'react'
import leetcode from "./images/leetcode.png"
import github from "./images/github.png"
import gfg from "./images/gfg.png"
import linkedin from "./images/linkedin.png"
import gmail from "./images/gmail.png"
import resume from "./images/resume.png"

const Sidebar = () => {
  return (
    <div className='sidebar-outer-div'>

    
    <div class = "sidebar-div">
        <div>
            <a href = "https://drive.google.com/file/d/1q7ykIoy7gdM6OnQMlvOe9wE881-0ey1S/view?usp=sharing">
            <img className = "icon resume" src = {resume}></img></a>
            
        </div>
        <div>
            <a href = "https://leetcode.com/devil16/">
            <img className = "icon leetcode" src = {leetcode}></img></a>
            
        </div>
        <div>
            <a href = "https://github.com/PiyushChauhan16/">
            <img className = "icon github" src = {github}></img></a>
            
        </div>
        <div>
            <a href = "https://auth.geeksforgeeks.org/user/freakycoder02/practice">
            <img className = "icon gfg"  src = {gfg}></img></a>
            
        </div>
        <div>
            <a href='https://www.linkedin.com/in/iampiyushchauhan/'>
            <img className = "icon linkedin" src = {linkedin}></img></a>
            
        </div>
        <div>
            <a href = "https://mail.google.com/mail/u/1/#inbox">
            <img className = "icon gmail" src = {gmail}></img></a>
            
        </div>
        
        
        
        
    </div>
    </div>
  )
}

export default Sidebar