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
                            <p>I am a highly skilled and experienced Front-End Developer with 2 years of experience in the industry. I am proficient in a variety of technologies with the latest web development trends and best practices. I am a highly motivated and results-oriented individual with a strong work ethic. I am always eager to learn new things and take on new challenges. I am also a team player and I am always willing to help others.</p>
                            <p>In my previous role, I was responsible for developing and maintaining a large-scale web application. I also worked on a variety of projects, including developing a new user interface, improving the performance of the application, and adding new features. I am confident that I have the skills and experience necessary to be successful in a Front-End engineer role. I am a hard worker and I am always willing to go the extra mile. I am also a team player and I am always willing to help others.</p>
                            <p>I am eager to take on new challenges and I am always looking for ways to improve my skills. I am confident that I can make a significant contribution to your team or build your projects with the latest technologies.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
