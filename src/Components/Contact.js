// src/components/Contact.js
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faHouse, faPhone } from "@fortawesome/free-solid-svg-icons";
import "./../StyleSheets/Contact.css";
import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

const Contact = () => {
    const { ref: contactRef, inView: contactInView } = useInView({ triggerOnce: false, threshold: 0.1 });
    const [isInView, setIsInView] = useState(false);
    const prevInView = useRef(contactInView);

    useEffect(() => {
        if (contactInView !== prevInView.current) {
            setIsInView(contactInView);
            prevInView.current = contactInView;
        }
    }, [contactInView]);

    return (
        <div id="Contact" className={`contact ${isInView ? 'animate-in' : 'animate-out'}`} ref={contactRef}>
            <h1>Contact Me</h1>
            <h5>Let's Work Together</h5>
            <hr style={{ width: '10vw', height: '0.5vh', backgroundColor: 'rgb(255,74,87)', border: 'none' }} />
            <br /><br /><br /><br />
            <div className="contact-info">
                <div className="contact-info-item">
                    <div className="circle">
                        <FontAwesomeIcon icon={faEnvelope} style={{ padding: "1.5vw", height: "8vh", width: "5vw", color: "#ff4a57", border: "2px solid white", borderRadius: "50%" }} />
                    </div>
                    <h2>Email</h2>
                    <h3>hemkesh123kantawala@gmail.com</h3>
                </div>
                <div className="contact-info-item">
                    <div className="circle">
                        <FontAwesomeIcon icon={faPhone} style={{ padding: "1.5vw", height: "8vh", width: "5vw", color: "#ff4a57", border: "2px solid white", borderRadius: "50%" }} />
                    </div>
                    <h2>Phone</h2>
                    <h3>+91 7990047081</h3>
                </div>
                <div className="contact-info-item">
                    <div className="circle">
                        <FontAwesomeIcon icon={faHouse} style={{ padding: "1.5vw", height: "8vh", width: "5vw", color: "#ff4a57", border: "2px solid white", borderRadius: "50%" }} />
                    </div>
                    <h2>Location</h2>
                    <h3>Vadodara, Gujarat, India</h3>
                </div>
            </div>
            <br /><br /><br /><br />

            <div className="contact-form">
                <div className="contact-form-info">
                    <h3>Have You Something to Say ?</h3>
                    <p>Feel free to message me. I am here to help!</p>
                </div>
                <form className="form">
                    <input type="text" id="name" name="name" placeholder="Your Name" required />
                    <input type="email" id="email" name="email" placeholder="Your Email" required />
                    <textarea id="message" name="message" placeholder="Your Message" required rows="5"></textarea>
                    <button type="submit">Send</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;
