import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__content">
        <p>© {new Date().getFullYear()} RentARide. All rights reserved.</p>
        <a id="about" href="#about">About</a>
      </div>
    </footer>
  );
}

export default Footer;


