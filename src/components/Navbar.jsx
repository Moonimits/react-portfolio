import "./css/navbar.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg" data-bs-theme="dark">
      <div className="container">
        <a className="navbar-brand fw-bolder fs-1 fade-bottom" href="#" style={{"--i": 1}}>
          MLSH.
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbar"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbar">
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link fade-bottom" aria-current="page" href="#" style={{"--i": 2}}>
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fade-bottom" href="#About" style={{"--i": 3}}>
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fade-bottom" href="#Project" style={{"--i": 4}}>
                Project
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
