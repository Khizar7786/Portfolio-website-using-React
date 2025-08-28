import React from 'react'

function Experience() {
  return (
    <div id="experience" className="default-margin">
  <h1 style={{ textAlign: "center", marginBottom: "30px" }}>Experience</h1>
  <p style={{fontSize:"22px", marginBottom:"50px", marginTop:"70px", fontFamily:"cursive", border:"1px solid", borderRadius: "35px", padding:"20px"}}>I have hands-on experience in building responsive and interactive web applications using HTML, CSS, JavaScript, and React. My work involves crafting clean UI designs, implementing dynamic functionality, and optimizing performance for smooth user experiences. Alongside frontend development, I have worked with Python for problem-solving and automation, and C++ for developing efficient, performance-driven programs. I also use GitHub to manage my projects, collaborate on code, and maintain version control.</p>

  <div className="experience-cards">
    <div className="exp-card">
      <i className="fa-brands fa-html5" style={{ fontSize: "2rem", color: "#e34c26" }}></i>
      <p>HTML</p>
    </div>

    <div className="exp-card">
      <i className="fa-brands fa-css3-alt" style={{ fontSize: "2rem", color: "#264de4" }}></i>
      <p>CSS</p>
    </div>

    <div className="exp-card">
      <i className="fa-brands fa-js" style={{ fontSize: "2rem", color: "#f7df1e" }}></i>
      <p>JavaScript</p>
    </div>

    <div className="exp-card">
      <i className="fa-brands fa-react" style={{ fontSize: "2rem", color: "#61dafb" }}></i>
      <p>React</p>
    </div>

    <div className="exp-card">
      <i className="fa-brands fa-python" style={{ fontSize: "2rem", color: "#3776ab" }}></i>
      <p>Python</p>
    </div>

    <div className="exp-card">
      <i className="fa-solid fa-code" style={{ fontSize: "2rem", color: "#5c6bc0" }}></i>
      <p>C++</p>
    </div>

    <div className="exp-card">
      <i className="fa-brands fa-github" style={{ fontSize: "2rem", color: "black" }}></i>
      <p>GitHub</p>
    </div>
  </div>
</div>

  )
}

export default Experience