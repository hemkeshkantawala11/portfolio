import React, { useEffect } from 'react';
import MImage from './images & GIFs/My Image Left.png';
import './StyleSheets/About.css';

const About = () => {
    useEffect(() => {
        const options = {
            threshold: 0.1,
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.remove('out-view');
                    entry.target.classList.add('in-view');
                } else {
                    if (entry.target.classList.contains('in-view')) {
                        entry.target.classList.remove('in-view');
                        entry.target.classList.add('out-view');
                    }
                }
            });
        }, options);

        const targets = document.querySelectorAll('.container, .AContent');
        targets.forEach(target => observer.observe(target));

        return () => {
            targets.forEach(target => observer.unobserve(target));
        };
    }, []);

    return (
        <div id="About" className="About">
            <div className="container">
                <h1>About Me</h1>
                <p>
                    Become a world's no 1 full-stack web developer. That's why I am learning and mastering web development. I will not stop until I become the Web Development Hero.
                </p>
                <hr style={{ width: '10vw', height: '1vh', backgroundColor: 'rgb(255,74,87)', border: 'none' }} />
            </div>
            <div className="AContent">
                <div className="AITContent">
                    <div className="AImage">
                        <img src={MImage} alt="" />
                    </div>
                    <div className="AText">
                        <h1>Hi There ✌</h1>
                        <div className="text">
                            <p>Hi! I am Hemkesh Kantawala a dynamic individual whose journey into the world of technology began during the COVID-19 pandemic, when I harnessed the abundance of free time to dive into the realms of programming and video editing. With a three-year legacy of completing a comprehensive Python book, My programming skills have solidified into a strong foundation. My fluency in Python serves as a launchpad for further exploration into diverse programming languages. Beyond programming, My passion for video editing adds a creative dimension to my skill set.</p>
                            <p>Currently enrolled as a first-year student at the Scaler School of Technology in Bangalore, Karnataka. I am driven by a thirst for knowledge and a determination to excel, with a keen interest in the stock market. I want to help him by enabling tech-enabled software that can easily perform all the trades, Like Algo Trading using AI. I have a great enthusiasm of studying data science and analytics.</p>
                            <p>I am eager to take on new challenges and I am always looking for ways to improve my skills. I am confident that I can make a significant contribution to your team or build your projects with the latest technologies.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
