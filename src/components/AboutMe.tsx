import React, { useEffect, useRef } from 'react';
import '../styles/aboutme.css';

const AboutMe: React.FC = () => {
    const h1Ref = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        const h1Element = h1Ref.current;

        if (!h1Element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    h1Element.classList.add('animate');
                    observer.unobserve(h1Element); // Stop observing after animation starts
                }
            },
            { threshold: 0.1 } // Trigger when 10% of the element is visible
        );

        observer.observe(h1Element);

        // Cleanup the observer on component unmount
        return () => {
            if (h1Element) {
                observer.unobserve(h1Element);
            }
        };
    }, []);

    return (
        <section className="AboutBackground  bg-gray-50 dark:bg-gray-900 ">
            <div className="about-container">
                <div className="about-content">
                    {/* Attach the ref to the h1 element */}
                    <h1 className="aboutMeText" ref={h1Ref}>
                        <span>2. About Me</span>
                    </h1>
                    <p className="about-description">
                        My interest in programming began when I played Tomb Raider on the PS1 as a child. The puzzles in the game sparked my passion for problem-solving at a young age. My first experience with creating a
                        game came when I read a C# book on building a Pac-Man game, where I also learned how to code a basic AI.
                        <br />
                        I have a strong enthusiasm for technology and enjoy delving into its many aspects. I take great pleasure in discovering new programming
                        languages and frameworks, always striving to keep my knowledge up-to-date with the latest trends. Furthermore, I appreciate the importance of teamwork
                        and collaboration, as I believe that collective efforts often yield more effective and innovative solutions.
                        <br />
                        I traveled and live most parts around the world with  great people and making long lasting connections.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
