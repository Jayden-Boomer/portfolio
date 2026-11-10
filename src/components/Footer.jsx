import React from "react";
import Container from "react-bootstrap/Container";

const Footer = (props) => {
  const bgStyle = { backgroundColor: "#f5f5f5" };

  return (
    <footer style={bgStyle} className="mt-auto py-5 text-center ">
      <Container>
        {props.children}
        <i className="fas fa-code" /> Portfolio by{" "}
        <a
          rel="noopener"
          href="https://github.com/Jayden-Boomer"
          aria-label="My GitHub"
        > <span className="badge bg-dark">
            Jayden Boomer
          </span>
        </a>{" "}
        using <i className="fab fa-react" />
        <p>
          <small className="text-muted">
            Template by <a href="https://github.com/hashirshoaeb/home">Hashir Shoaib</a>. Project code is open source.
          </small>
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
