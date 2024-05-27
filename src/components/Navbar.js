

import Logo from '../assets/logo.png';
import { Link as ScrollLink } from 'react-scroll';




function Navbar() {

 

  return (
    <nav className="nav">
      <div className="nav-brand">
        <img src={Logo} alt="Logo" className="nav-logo" />
        <h1 className="nav-title">BeatShuffle</h1>
      </div>
      <div className="nav-click-content">
        <ScrollLink to="home" smooth={true} duration={500} className='home-link'>Home</ScrollLink>
        <ScrollLink to="shuffle" smooth={true} duration={500} className='shuffle-link'>Shuffle</ScrollLink>
       
    
      </div>
    </nav>
  );
}

export default Navbar;
