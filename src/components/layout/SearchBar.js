import React from 'react'

const Navbar = () => {
    return (
        <nav style={{ marginBottom: '30px '}} className="blue">
        <div className="nav-wrapper">
          <form>
            <div className="input-field">
              <input id="search" type="search" required />
              <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
              <i className="material-icons">close</i>
            </div>
          </form>
        </div>
      </nav>
    )
}

export default Navbar
