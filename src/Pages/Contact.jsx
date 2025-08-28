import React from 'react'

function Contact() {
  return (
    <div id="Contact">
  <h1
    style={{
      textAlign: "center",
      marginTop: "60px",
      fontSize: "50px",
    }}
  >
    Contact Me
  </h1>
  <p style={{ textAlign: "center", marginTop: "20px" }}>
    You can reach me out on the following platforms
  </p>

  <div className="contact-cards">
    <div className="cards shadow-drop-2-center">
      <a href="mailto:m.khizar7786@gmail.com">
        <i
          className="fa-regular fa-envelope"
          style={{ color: "black", fontSize: "2.5rem" }}
        ></i>
      </a>
      <p style={{ fontSize: "16px" }}>m.khizar7786@gmail.com</p>
    </div>

    <div className="cards shadow-drop-2-center">
      <a
        href="https://wa.me/03214717654?text=urlencodedtext"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa-brands fa-whatsapp" style={{ color: "black" }}></i>
      </a>
      <p>+92 3214717654</p>
    </div>

    <div className="cards shadow-drop-2-center">
      <a href="https://www.linkedin.com/pub/dir/Muhammad/Khizar">
        <i className="fa-brands fa-linkedin"></i>
      </a>
      <p>Linkedin Profile</p>
    </div>
  </div>
</div>

  )
}

export default Contact