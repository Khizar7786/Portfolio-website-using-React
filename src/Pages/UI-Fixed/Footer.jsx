import React from 'react'

function Footer() {
  return (
    <footer>
  <div
    className="footer-container"
    style={{ color: "white", backgroundColor: "#191919" }}
  >
    <h1>MUHAMMAD KHIZAR</h1>
    <div style={{ width: "50%", margin: "0 auto" }}>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt nihil
        quae voluptatem itaque tenetur veritatis explicabo iusto, suscipit
        reprehenderit optio delectus provident autem facere, perspiciatis,
        recusandae architecto velit doloribus! Magnam! Lorem ipsum dolor sit
        amet consectetur, adipisicing elit. Architecto mollitia beatae, facere,
        optio esse non maiores perspiciatis voluptas dolore quos expedita eum,
        perferendis labore dolor repellendus iusto? Assumenda, officia
        blanditiis.
      </p>
    </div>
    <div className="contact-links2">
      <ul>
        <li>
          <a href="">
            <i className="fa-brands fa-facebook" style={{ color: "white" }}></i>
          </a>
        </li>
        <li>
          <a href="">
            <i className="fa-brands fa-twitter" style={{ color: "white" }}></i>
          </a>
        </li>
        <li>
          <a href="">
            <i className="fa-brands fa-github" style={{ color: "white" }}></i>
          </a>
        </li>
        <li>
          <a href="">
            <i className="fa-brands fa-youtube" style={{ color: "white" }}></i>
          </a>
        </li>
      </ul>
    </div>
  </div>
  <div className="copyright-bar">
    <p>Copyright @2021</p>
    <a
      href="#"
      style={{ textDecoration: "none", marginLeft: "20px" }}
    >
      MUHAMMAD KHIZAR
    </a>
  </div>
</footer>
  )
}

export default Footer