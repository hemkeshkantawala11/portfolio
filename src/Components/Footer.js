// src/components/Footer.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faFacebookMessenger, faWhatsapp, faFacebook, faGoogle, faTelegram } from '@fortawesome/free-brands-svg-icons';
import './../StyleSheets/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="social-icons">
                <a href="https://www.linkedin.com/in/hemkesh-kantawala-563330288/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a href="https://github.com/hemkeshkantawala11" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} />
                </a>
                <a href="https://wa.me/y+917990047081" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faWhatsapp} />
                </a>
                <a href="mailto:hemkesh123kantawala@gmail.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGoogle} />
                </a>
                <a href="https://t.me/hemkesh11" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faTelegram} />
                </a>
            </div>
            <br/><br/>
            <p>© 2024 All Rights Reserved to <span>Hemkesh Kantawala</span></p>
        </footer>
    );
}

export default Footer;
