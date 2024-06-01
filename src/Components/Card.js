import React from 'react';
import PropTypes from 'prop-types';
import './../StyleSheets/Card.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Card = ({ imagePath, cardTitle, cardDesc, skillsUsed, linkToWeb }) => {
    return (
        <div className="card">
            <div className="card-image">
                <img src={imagePath} alt={cardTitle} />
            </div>
            <div className="card-content">
                <h2>{cardTitle}</h2>
                <p>{cardDesc}</p>
                <div className="skillsUsed">
                    {skillsUsed.map((skill, index) => (
                        <span key={index}>{skill}</span>
                    ))}
                </div>
                <div className="linksC">
                    <a href="https://github.com/hemkeshkantawala11">
                        <img src="https://cdn3.emoji.gg/emojis/4601_github.png" alt="Local Image"></img>
                    </a>
                    <a href={linkToWeb}>
                        <img src="https://uxwing.com/wp-content/themes/uxwing/download/web-app-development/open-external-link-icon.png" alt=""/>
                    </a>
                </div>
            </div>
        </div>
    );
}

Card.propTypes = {
    imagePath: PropTypes.string.isRequired,
    cardTitle: PropTypes.string.isRequired,
    cardDesc: PropTypes.string.isRequired,
    skillsUsed: PropTypes.arrayOf(PropTypes.string).isRequired,
    linkToWeb: PropTypes.string.isRequired,
};

export default Card;
