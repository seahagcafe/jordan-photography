import React, {useState} from "react";
import styles from './NavBar.module.css';
import { AiOutlineMenu, AiOutlineSearch, AiOutlineUser, AiOutlineClose, AiFillCamera } from 'react-icons/ai';
// import Logo from '../../images/githubpic.png'
import { BrowserRouter, Route, Link } from "react-router-dom";
import { calculateNewValue } from "@testing-library/user-event/dist/utils";

function Navbar() {
  const [nav, setNav] = useState(false)

  return (
    <header className={styles.navbar}>
      {/* <img src={Logo} alt="alt"></img> */}
      <a href="/"><AiFillCamera size={25} /></a>
      <nav>
        <ul className={nav ? [styles.menu, styles.active].join(' ') : [styles.menu]}>
          <li><a href="/portraits">Portraits</a></li>
          <li><a href="/landscapes">Landscapes</a></li>
        </ul>
      </nav>
      <div onClick={()=> setNav(!nav)} className={styles.mobile_btn}>
        {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} /> }
        
        
      </div>
    </header>

    // <nav>
    //   <ul>
    //     <li>
    //       <Link to="/">Home</Link>
    //     </li>
    //     <li>
    //       <Link to="/portfolio">Portfolio</Link>
    //     </li>
    //     <li>
    //       <Link to="/about">About</Link>
    //     </li>
    //   </ul>
    // </nav>
  );
}
export default Navbar;