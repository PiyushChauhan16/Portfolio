import React from 'react'
import gh from "./.\\images\\geekhouse_logo.jpeg.png"
import deloitte from "./.\\images\\deloitte_logo.png"

const Break = () => {
  const path = "./images/deloitte_logo.png";

  return (
    <div style={{
        height:"10px",
        width: "400px",
        backgroundColor: "#bcbcbc",
        borderRadius:"8px",
        marginLeft:"35%"
    }}>
      <img src = {gh} alt = "image"></img>
      <img src = {deloitte} alt = "image"></img>
    </div>
  )
}

export default Break