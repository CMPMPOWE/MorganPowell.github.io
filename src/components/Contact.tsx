import React from 'react';

const Contact: React.FC = () => {
    return (
        <section id="contact" className="contact-section">
            <h2>Contact</h2>
            <p>If you'd like to work together or just want to say hi, feel free to reach out!</p>
            <div className="contact-info">
                <p>Email: <a href="mailto:powell250@hotmail.com">powell250@hotmail.com</a></p>
                <p>LinkedIn: <a href="https://www.linkedin.com/in/morgan-powell-879b17b7/" target="_blank" >My LinkedIn</a></p>
            </div>
        </section>
    );
};

export default Contact;
