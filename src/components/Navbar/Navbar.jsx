import { useState, useEffect } from "react";

import { motion } from "framer-motion";

import "./navbar.scss";

const Navbar = () => {

  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu((open) => !open)
  }

  useEffect(() => {
    openMenu ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'auto';
  })

  return (
    <>
      <nav className={openMenu ? "main-header__nav active" : "main-header__nav"}>
        <ul>
          <motion.li onClick={() => setOpenMenu(false)} className="main-header__nav-item"
            initial={{ y: -200 }}
            animate={{
              y: 0,
              transition: {
                type: 'spring',
                delay: 0.10 
              }
            }}
          >
            <a href="/#about">
              <span>About</span>
            </a>
          </motion.li>
          <motion.li onClick={() => setOpenMenu(false)} className="main-header__nav-item"
            initial={{ y: -200 }}
            animate={{
              y: 0,
              transition: {
                type: 'spring',
                delay: 0.30
              }
            }}
          >
            <a href="/#projects">
              <span>Projects</span>
            </a>
          </motion.li>
          <motion.li onClick={() => setOpenMenu(false)} className="main-header__nav-item"
            initial={{ y: -200 }}
            animate={{
              y: 0,
              transition: {
                type: 'spring',
                delay: 0.50
              }
            }}
          >
            <a href="/#contact">
              <span>Contact</span>
            </a>
          </motion.li>
        </ul>
      </nav>
      <button className={openMenu ? "main-header__hamburger active" : "main-header__hamburger"} onClick={toggleMenu}></button>
    </>
  );
};

export default Navbar;
