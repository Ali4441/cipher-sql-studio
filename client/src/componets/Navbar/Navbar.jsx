import "./Navbar.scss";

const Navbar = ({ status, Navigate }) => {
  return (
    <nav className="navbar">
      <a href="#" className="navbar__brand">
        <div className="navbar__logo">CS</div>
        <span className="navbar__name">
          Cipher<em>SQL</em>Studio
        </span>
        <span className="navbar__pill">Beta</span>
      </a>

      <div className="navbar__status">
        <div className="navbar__dot"></div>
        {status}
      </div>

      <button className="navbar__btn">{Navigate}</button>
    </nav>
  );
};

export default Navbar;