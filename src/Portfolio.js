//
//
// import React from "react";
// import { Carousel } from "nuka-carousel";
// import Card from './Components/Card';
// import myImage from './images & GIFs/myImage.png';
// import './StyleSheets/Portfolio.css';
//
// const countTotal = (cards) => {
//
// }
// const Portfolio = () => {
//     return (
//         <div id="Portfolio" className="portfolio">
//             <h1>Projects I Have Built</h1>
//             <hr style={{ width: '10vw', height: '0.5vh', backgroundColor: 'rgb(255,74,87)', border: 'none' }} />
//             <div className="filter">
//                 <button className="filter-button">
//                     All
//                     <div className="countT">
//                         <span>8</span>
//                     </div>
//
//                 </button>
//                 <button className="filter-button">Vanilla JS</button>
//                 <button className="filter-button">Python</button>
//                 <button className="filter-button">React</button>
//             </div>
//             <div className="cards">
//                     < div>
//                         <Card
//                             imagePath={myImage}
//                             cardTitle="Weather App"
//                             cardDesc="A simple weather app built using HTML, CSS, and JavaScript."
//                             skillsUsed={['HTML', 'CSS', 'JavaScript']}
//                             linkToWeb="https://hemkeshkantawala11.github.io/WeatherApp/" />
//                     </div>
//                     <div>
//                         <Card
//                             imagePath={myImage}
//                             cardTitle="Quiz App"
//                             cardDesc="A simple quiz app built using HTML, CSS, and JavaScript."
//                             skillsUsed={['HTML', 'CSS', 'JavaScript']}
//                             linkToWeb="https://hemkeshkantawala11.github.io/QuizApp/" />
//                     </div>
//                     <div>
//                         <Card
//                             imagePath={myImage}
//                             cardTitle="Memory Game"
//                             cardDesc="A simple memory game built using HTML, CSS, and JavaScript."
//                             skillsUsed={['HTML', 'CSS', 'JavaScript']}
//                             linkToWeb="https://hemkeshkantawala11.github.io/MemoryGame/" />
//                     </div>
//                     <div>
//                         <Card
//                             imagePath={myImage}
//                             cardTitle="Memory Game"
//                             cardDesc="A simple memory game built using HTML, CSS, and JavaScript."
//                             skillsUsed={['HTML', 'CSS', 'JavaScript']}
//                             linkToWeb="https://hemkeshkantawala11.github.io/MemoryGame/" />
//                     </div>
//                     <div>
//                         <Card
//                             imagePath={myImage}
//                             cardTitle="Memory Game"
//                             cardDesc="A simple memory game built using HTML, CSS, and JavaScript."
//                             skillsUsed={['HTML', 'CSS', 'JavaScript']}
//                             linkToWeb="https://hemkeshkantawala11.github.io/MemoryGame/" />
//                     </div>
//                     <div>
//                         <Card
//                             imagePath={myImage}
//                             cardTitle="Memory Game"
//                             cardDesc="A simple memory game built using HTML, CSS, and JavaScript."
//                             skillsUsed={['HTML', 'CSS', 'JavaScript']}
//                             linkToWeb="https://hemkeshkantawala11.github.io/MemoryGame/" />
//                     </div>
//                     <div>
//                         <Card
//                             imagePath={myImage}
//                             cardTitle="Memory Game"
//                             cardDesc="A simple memory game built using HTML, CSS, and JavaScript."
//                             skillsUsed={['HTML', 'CSS', 'JavaScript']}
//                             linkToWeb="https://hemkeshkantawala11.github.io/MemoryGame/" />
//                     </div>
//                     <div>
//                         <Card
//                             imagePath={myImage}
//                             cardTitle="Memory Game"
//                             cardDesc="A simple memory game built using HTML, CSS, and JavaScript."
//                             skillsUsed={['HTML', 'CSS', 'JavaScript']}
//                             linkToWeb="https://hemkeshkantawala11.github.io/MemoryGame/" />
//                     </div>
//             </div>
//         </div>
//     );
// }
//
// export default Portfolio;



import React, { useState } from "react";
import Card from './Components/Card';
import myImage from './images & GIFs/myImage.png';
import './StyleSheets/Portfolio.css';
import WebScrapper from './images & GIFs/WebScrapper.jpeg';
import WeatherApp from './images & GIFs/WeatherApp.png';
import QuizApp from './images & GIFs/QuizApp.png';
import MemoryGame from './images & GIFs/MemoryGame.png';
import RoboticManholeCleaner from './images & GIFs/RoboticManholeCleaner.png';
import EditMagic from './images & GIFs/EditMagic.jpeg';
import MonopolyGame from './images & GIFs/MonopolyGame.jpeg';
import DataAnalysis from './images & GIFs/DataAnalysis.jpeg';

const cardsData = [
    {
        imagePath: WeatherApp,
        cardTitle: "Weather App",
        cardDesc: "A simple weather app built using HTML, CSS, and JavaScript.",
        skillsUsed: ['HTML', 'CSS', 'JavaScript'],
        linkToWeb: "https://hemkeshkantawala11.github.io/WeatherApp/"
    },
    {
        imagePath: QuizApp,
        cardTitle: "Quiz App",
        cardDesc: "A simple quiz app built using HTML, CSS, and JavaScript.",
        skillsUsed: ['HTML', 'CSS', 'JavaScript'],
        linkToWeb: "https://hemkeshkantawala11.github.io/QuizApp/"
    },
    {
        imagePath : MemoryGame,
        cardTitle : "Memory Game",
        cardDesc :"A simple memory game built using HTML, CSS, and JavaScript.",
        skillsUsed : ['HTML', 'CSS', 'JavaScript'],
        linkToWeb:"https://hemkeshkantawala11.github.io/MemoryGame/"
    },
    {
        imagePath : DataAnalysis,
        cardTitle : "Data Analysis",
        cardDesc :"It has a data analysis project built using Python. The Analysis i sodne on the dta of the company yulu's sales",
        skillsUsed : ['Python', 'Pandas', 'Numpy', "Matplotlib"],
        linkToWeb:"https://hemkeshkantawala11.github.io/MemoryGame/"
    },
    {
        imagePath : MonopolyGame,
        cardTitle : "Monopoly Game",
        cardDesc :"A fully functional monopoly game built using Python. The game is played in the LAN. Also this is an multiplayer game.",
        skillsUsed : ['Python', 'Tkinter', 'Pickling',"Socket","threading"],
        linkToWeb:"https://github.com/devanujpatel/Monopoly-Game"
    },
    {
        imagePath : RoboticManholeCleaner,
        cardTitle : "Robotic Manhole Cleaner",
        cardDesc :"It was a robotic project in which we made a robot which can clean the manhole. The robot was controlled by the remote control. The robot was made using the arduino and the remote was made using the RF module.",
        skillsUsed : ['Arduino', 'Others'],
        linkToWeb:"https://github.com/hemkeshkantawala11/Robotic-Manhole-Cleaner"
    },
    {
        imagePath : EditMagic,
        cardTitle : "Edit Magic",
        cardDesc :"It is an image editing software built using Java. The software is used to edit the images. The software is built using the Java.IO and java.awt library of java.",
        skillsUsed : ['Java'],
        linkToWeb:"https://github.com/hemkeshkantawala11/EditMagic"
    },
    {
        imagePath : WebScrapper,
        cardTitle : "Price Comparator",
        cardDesc :"It is a price comparator software built using Python. The software is used to compare the prices of the products on the different websites. The software is built using the Selenium library of Python. The User has to only type the product name and the prices from the different websites will be shown.",
        skillsUsed : ['Python', 'selenium'],
        linkToWeb:"https://github.com/hemkeshkantawala11/WebScrapper"
    }

];

const countTotal = (cards) => {
    return cards.length;
};

const filterCards = (cards, filter) => {
    if (filter === "All") {
        return cards;
    }
    return cards.filter(card => card.skillsUsed.includes(filter));
};

const Portfolio = () => {
    const [filter, setFilter] = useState("All");

    const filteredCards = filterCards(cardsData, filter);
    const totalCards = countTotal(cardsData);

    return (
        <div id="Portfolio" className="portfolio">
            <h1>Projects I Have Built</h1>
            <hr style={{ width: '10vw', height: '0.5vh', backgroundColor: 'rgb(255,74,87)', border: 'none' }} />
            <div className="filter">
                <button className="filter-button All" onClick={() => setFilter("All")}>
                    All
                    <div className="countT">
                        <span>{totalCards}</span>
                    </div>
                </button>
                <button className="filter-button" onClick={() => setFilter("JavaScript")}>Vanilla JS</button>
                <button className="filter-button" onClick={() => setFilter("Python")}>Python</button>
                <button className="filter-button" onClick={() => setFilter("React")}>React</button>
            </div>
            <div className="cards">
                {filteredCards.map((card, index) => (
                    <Card
                        key={index}
                        imagePath={card.imagePath}
                        cardTitle={card.cardTitle}
                        cardDesc={card.cardDesc}
                        skillsUsed={card.skillsUsed}
                        linkToWeb={card.linkToWeb}
                    />
                ))}
            </div>
        </div>
    );
};

export default Portfolio;
