
import React, { useEffect, useRef } from 'react';
import '../styles/landingPage.css';
import { gsap } from 'gsap';
import { Draggable } from 'gsap/Draggable';


gsap.registerPlugin(Draggable);

const LandingPage: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const lettersRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        const letters = lettersRef.current?.querySelectorAll('.letter');

        if (container && letters) {
            letters.forEach((letter) => {
                Draggable.create(letter, {
                    bounds: container, // Restrict letters within container
                    inertia: true, // Inertia for smooth dragging
                    type: 'x,y',
                    onDrag: function () {
                        // Rotate the letter dynamically during dragging
                        gsap.to(letter, {
                            rotation: this.getDirection() === 'right' ? '-=20' : '+=20',
                            ease: 'power1.out',
                        });
                    },
                    onDragEnd: function () {
                        // After release, add a weightless fall with rotation
                        gsap.to(letter, {
                            rotation: gsap.utils.random(-120, 120, -90), // Random rotation
                            y: container.clientHeight - letter.clientHeight, // Fall to bottom of container
                            ease: 'bounce.out', // Bounce effect on reaching bottom
                            duration: 2, // Duration of fall
                        });
                    },
                });
            });
        }
    }, []);

    return (
   
       
        <div className="mx-auto  bg-gray-50 dark:bg-gray-900 py-24 sm:py-32 ">
             
                <section className="landingpageBackground">
                  
                    <div className="landingpage-container" ref={containerRef}>
                        <div className="draggable-container">
                            <div ref={lettersRef} className="letters">
                                <span className="letter">M</span>
                                <span className="letter">o</span>
                                <span className="letter">r</span>
                                <span className="letter">g</span>
                               
                         
                                <span className="letter">🐒</span>
                                
                            </div>
                            <span className="TitleFullStackDeveloper">1.FullStack Developer {'>>'} </span>
                            <h4>Click and Drag the text above </h4>
                        </div>


                    </div>

                </section> 
                        </div>

      
      
    );
};

export default LandingPage;
