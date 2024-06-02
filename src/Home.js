import hand from './images & GIFs/wavingHand.gif';
import React, {useEffect, useState} from "react";
import * as PropTypes from "prop-types";
import IMAGE from './images & GIFs/myImage.png';
import './StyleSheets/Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';


const WordSwitcher = () => {
    const words = ["self-taught", "passionate", "experienced", "fast-learner"];
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, 2000); // Change word every 2 seconds

        return () => clearInterval(interval); // Clean up interval on component unmount
    }, [words.length]);

    return (

            <span className="word">{words[currentIndex]}</span>

    );
};


const Home = () => {
    return (
        <div id = "Home" className="HomeContent">
            <div className="homeText">
                <h3 style = {{color: "grey"}}>WELCOME TO MY CREATIVE JOURNEY</h3>
                <div className="textImage">
                    <h2> Hi I'am Hemkesh</h2>
                    <img className="gif-image" src={hand} alt="Local GIF" />
                </div>
                <h2> A <WordSwitcher/> software Engineer </h2>
                <div className="ButtonsHome">

                    <a href="https://www.linkedin.com/in/hemkesh-kantawala-563330288/" target="_blank"><button className="Linkedin">LinkedIn</button></a>


                    <a href=".Contact">
                        <button className="contactMe">
                            <FontAwesomeIcon icon={faUser} />
                        </button>
                    </a>

                </div>
            </div>
            <div className = "myImage">
                <img className="moving-image" src={IMAGE} alt="Local Image"/>
            </div>
        </div>

    );
}

export default Home;

