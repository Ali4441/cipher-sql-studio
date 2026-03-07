import React from 'react'
import "./Switcher.scss"
import { Link } from "react-router-dom";
const Switcher = () => {


  return (
    <div className="switcher">
      <Link to="/" className="switcher__btn active">
        Home — Assignments
      </Link>

      <Link to="#" className="switcher__btn">
        Attempt — Workspace
      </Link>
    </div>
  )
}

export default Switcher
