import React from 'react';

const Navbar = (props) => {
  return (
    <header>
      <div className="navbar navbar-dark bg-dark">
        <div className="d-flex justify-content-between">
          <h3 className="navbar-brand">My Locations</h3>
        </div>
      </div>
    </header>
  );
}

export default Navbar;