import { useState } from 'react';

import { Link } from "react-router-dom";

import toast from 'react-hot-toast';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import "./contact.scss";

const Contact = () => {

    const [copyText, setCopyText] = useState('bombel.top@gmail.com');

    const toastId = 'mailToast';
    
    const handleCopyText = () => {
        navigator.clipboard.writeText(copyText);
        toast.success('Mail was copied!', {
            id: toastId,
            style: {
                fontSize: '1.6rem'
            }
        });
    }

    return (
        <section className="contact" id="contact">
            <div className="contact__wrapper">
                <div className="contact__title">
                    <h2 className="text--large">Contact me</h2>
                </div>
                <div className="contact__content">
                    <div className="contact-mail">
                        <FontAwesomeIcon icon={faEnvelope} />
                        <span className="text--medium" onClick={handleCopyText}>bombel.top@gmail.com</span>
                    </div>
                    <div className="contact-discord">
                        <FontAwesomeIcon icon={faDiscord} />
                        <Link to="https://discord.com/users/428618348205703179" className="btn btn--white" target="_blank">
                        <span className="text--medium">Discord</span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
  );
};

export default Contact;
