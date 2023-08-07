import { motion } from "framer-motion";

import { Link } from "react-router-dom";

import Navbar from '../Navbar/Navbar';
import "./header.scss"

const Header = () => {

    return (
        <header className="main-header" id="header">
            <div className="main-header__content">
                <div className="main-header__logo">
                    <Link to="/">
                        <motion.h2
                            initial={{x: -200}}
                            animate={{x: 0}}
                            
                        >
                            code[<span>bombel</span>]
                        </motion.h2>
                    </Link>
                </div>
                <Navbar />
            </div>
        </header>
    );
}

export default Header;