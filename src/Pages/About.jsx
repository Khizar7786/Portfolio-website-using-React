import React from 'react'

function About() {
  return (
    <div id="section2" className="default-margin">
  <div id="know-more">
    <h1>About Me</h1>
  </div>

  <div className="image-section">
    <img
      id="img2"
      src="./public/images/programmer.png"
      style={{ height: "300px" }}
      alt="Programmer"
    />

    <div id="child-2">
      <div className="two-cards">
        <div id="Education" className="cards-two">
          <h1>Education</h1>
          <p>MS Computer Science</p>
          <p>BS Computer Science</p>
        </div>

        <div id="Experience" className="cards-two">
          <h1 id="exp">Experience</h1>
          <p>1 year in</p>
          <p>Front end Development</p>
        </div>
      </div>

      <div style={{ textAlign: "left" }}>
        <p style={{ marginTop: "30px", padding: "0px 60px" }}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores
          maxime aliquam, quis cumque nesciunt exercitationem labore nulla,
          optio facere ut repudiandae sint at tenetur rem atque ex placeat odio
          excepturi deleniti. Iure natus repellendus consequatur, error impedit
          id voluptatibus quaerat, aut libero perferendis earum totam odit
          exercitationem quas! Saepe repellendus est, recusandae tempore quae
          non illum repudiandae pariatur deserunt nihil consequuntur hic soluta
          minima obcaecati eveniet qui sit ab nulla. Saepe quasi unde mollitia
          deleniti ex. Ipsam sit at minus provident eum veniam consequuntur
          laudantium in! Quae veritatis illum repellendus, corporis recusandae
          pariatur. Atque aperiam cupiditate voluptas enim! Vero, praesentium?
        </p>
      </div>
    </div>
  </div>
</div>

  )
}

export default About