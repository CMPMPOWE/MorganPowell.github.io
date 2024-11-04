import React, { useEffect } from 'react';
import img1 from '../assets/profilePicture/img-1.jpg';
import img2 from '../assets/profilePicture/img-2.jpg';
import img3 from '../assets/profilePicture/img-3.jpg';



const Introskills: React.FC = () => {
    useEffect(() => {
        const lenisScript = document.createElement('script');
        lenisScript.src = "https://unpkg.com/lenis@1.1.13/dist/lenis.min.js";
        lenisScript.async = true;
        document.body.appendChild(lenisScript);

        const gsapScript = document.createElement('script');
        gsapScript.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js";
        gsapScript.async = true;
        document.body.appendChild(gsapScript);

        const scrollTriggerScript = document.createElement('script');
        scrollTriggerScript.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js";
        scrollTriggerScript.async = true;
        document.body.appendChild(scrollTriggerScript);

        return () => {
            document.body.removeChild(lenisScript);
            document.body.removeChild(gsapScript);
            document.body.removeChild(scrollTriggerScript);
        };
    }, []);

    return (
        <div className="container">
            <section className="hero">
                <h1>genesis</h1>
                <p>At the nexus of blblbl asiodhasodijasodij, limitless</p>
            </section>

            <section className="about">
                <div className="about-img">
                    <img src={img2} alt="Profile 1" />
                </div>
                <div className="about-copy">
                    <h1>The omniversal fulcrum</h1>
                </div>
            </section>

            <section className="sticky">
                <div className="intro">
                    <div className="intro-col">
                        <p>Veiled depth of eternity</p>
                        <p>Current of cosmic wisdom</p>
                    </div>

                    <div className="intro-col">
                        <p>Nexus of all existence</p>
                    </div>
                </div>

                <div className="img-1">
                    <img src={img1} alt="Profile 1" />
                </div>
                <div className="img-2">
                    <img src={img2} alt="Profile 2" />
                </div>
                <div className="img-3">
                    <img src={img3} alt="Profile 3" />
                </div>
                <div className="copy">
                    <h1>The cosmic keystone of all coding unlocks all doors</h1>
                </div>
            </section>

            <section className="footer"></section>
        </div>
    );
};

export default Introskills;
