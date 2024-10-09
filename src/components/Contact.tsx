import React from 'react';

const Contact: React.FC = () => {
    return (
        <section id="contact" className="contact-section">
            <h2>Contact</h2>
            <p>If you'd like to work together or just want to say hi, feel free to reach out!</p>
            <div className="contact-info">
                <p>Email: <a href="mailto:your.email@example.com">your.email@example.com</a></p>
                <p>LinkedIn: <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">Your LinkedIn</a></p>
            </div>
        </section>
    );
};

export default Contact;
