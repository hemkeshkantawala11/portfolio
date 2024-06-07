// src/components/Academic.js
import React from 'react';
import './../StyleSheets/Academic.css';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


const Academic = () => {
    return (
        <div id="Academic" className="academic">
            <h1>Academic Qualifications</h1>
            <hr style={{ width: '10vw', height: '0.5vh', backgroundColor: 'rgb(255,74,87)', border: 'none' }} />
            <br></br><br></br><br></br><br></br>
            <div className="timeline">
                <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{marginRight: "30vw",width: "20vw", background: 'rgb(45,47,123)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(45,47,123)' }}
                        date=".  2016 - 2020"
                        iconStyle={{ background: 'rgb(255, 74, 87)', color: '#fff' }}
                    >
                        <h3 className="vertical-timeline-element-title">Secondary School Certificate</h3>
                        <h4 className="vertical-timeline-element-subtitle">Bhartiya Vidya Bhavan's</h4>
                        <br/>
                        <h5 className="vertical-timeline-element-subtitle">Vadodara, GUJ</h5>
                        <p style = {{width : "fit-content"}} >
                            <li>
                                Percentage: 97.8%
                            </li>
                            <li>
                                Achievements: 3rd Rank in School
                            </li>
                            <li>
                                Honours : Participated in National Level Science Exhibition By CBSE
                            </li>
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="2020-2023  ."
                        contentStyle={{width: "20vw", background: 'rgb(45,47,123)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(45,47,123)' }}
                        iconStyle={{ background: 'rgb(255, 74, 87)', color: '#fff' }}
                    >
                        <h3 className="vertical-timeline-element-title">Senior Secondary Education</h3>
                        <h4 className="vertical-timeline-element-subtitle">
                            Bhartiya Vidya Bhavan's
                        </h4>

                        <h5> Vadodara, GUJ</h5>
                        <p style = {{width : "fit-content"}}>
                            <li>
                                Percentage: 93.6%
                            </li>
                            <li>
                                Achievements:
                                <ul>
                                    <li>4th Rank in School</li>
                                    <li>Highest Marks in Physics</li>
                                    <li>JEE Mains : 97.8%tile</li>
                                </ul>
                            </li>

                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date=".  2023-Present"
                        contentStyle={{width: "20vw", background: 'rgb(45,47,123)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(45,47,123)' }}
                        iconStyle={{ background: 'rgb(255, 74, 87)', color: '#fff' }}

                    >
                        <h3 className="vertical-timeline-element-title">College</h3>
                        <h4 className="vertical-timeline-element-subtitle">Scaler School Of Technology</h4>
                        <h5> Bangalore, KA</h5>
                        <p>
                            <li>
                                Course: BS + MS in Computer Science
                            </li>
                            <li>
                                Achievements:
                                <ul>
                                    <li>Top 5% of the Batch</li>
                                    <li>Currently in 2nd Semester</li>
                                    <li>CGPA: 9</li>
                                    <li>Secretary At Student Council</li>
                                </ul>
                            </li>
                        </p>
                    </VerticalTimelineElement>
                </VerticalTimeline>

            </div>
        </div>
    );
}

export default Academic;
