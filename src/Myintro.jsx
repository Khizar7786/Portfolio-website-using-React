import React from 'react'

function Myintro() {
  return (
      <div id="section-1">
  <div className="section1-container ">
    <img
      id="img1"
      src="./images/Headshot.png"
      style={{ width: "400px", borderRadius: "10%" }}
      alt="Headshot"
    />
    <div id="second-div" style={{ textAlign: "center" }}>
      <p style={{ color: "rgb(85, 85, 85)" }}>Hello I am</p>
      <h1>Muhammad Khizar</h1>
      <p style={{ color: "rgb(85, 85, 85)" }}>frontend Developer</p>
      <div id="btn-container">
        <button className="my-btn">Download cv</button>
        <button className="my-btn">Contact info</button>
      </div>
    </div>
  </div>
</div>

  )
}

export default Myintro