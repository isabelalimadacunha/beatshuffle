import React from 'react';
import LinkedinLogo from '../assets/linkedin-logo.png';
import GitHubLogo from '../assets/github-logo.png';
import SpotifyLogo from '../assets/spotify-logo.png';


function Footer() {
    return (
        <div className='foot-container' id="footer">
            <footer>
                <div className='footer-content'>
                    <div className='credit'>
                        <p>Created by Isabela Cunha</p>
                        <p>Credit</p>
                        <img src={SpotifyLogo} alt="Spotify Logo" className="spotify-logo" /> 
                    </div>
                    
                    <div className='contact'>
                        <p>Contact</p>
                        <p>Email: isabelalimadacunha@gmail.com</p>
                        <div className='contact-logos'>
                            <a href="https://www.linkedin.com/in/isabela-cunha-97903821a/" target="_blank" rel="noopener noreferrer">
                                <img src={LinkedinLogo} alt="Linkedin Logo" className="social-logo" /> 
                            </a>
                            <a href="https://github.com/isabelalimadacunha" target="_blank" rel="noopener noreferrer">
                                <img src={GitHubLogo} alt="GitHub Logo" className="social-logo" /> 
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
