import React from 'react'
import data from './data'
const Achivements = () => {
    const listOfAcademics = data.achivements;
    const listOfExtraCurricular = data.extra_curricular;

  return (
    <div className = "achivement-div">
        <div className = "achievment-arrangment">
            <div>
                <p className = "achivement-heading">Academic Achivements</p>
                <ul className='achivement-list'>
                    {listOfAcademics.map((curr)=>{
                        return (
                            <li><p>{curr}</p></li>
                        )
                    })}
                </ul>
            </div>
            <div>
                <p className = "achivement-heading">Extra-curricular activities</p>
                <ul className='achivement-list'>
                    {listOfExtraCurricular.map((curr)=>{
                        return (
                            <li ><p>{curr}</p></li>
                        )
                    })}
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Achivements   