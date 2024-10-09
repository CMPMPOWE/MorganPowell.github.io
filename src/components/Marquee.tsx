import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';


const Marquee: React.FC = () => {
    const marqueeRef = useRef<HTMLDivElement>(null);
    const tweenRef = useRef<GSAPTween | null>(null);

    useEffect(() => {
        let currentScroll = 0;
        let isScrollingDown = true;

        // GSAP animation for marquee effect
        const tween = gsap.to(".marquee_part", {
            xPercent: -100,
            repeat: -1,
            duration: 5,
            ease: "linear",
        }).totalProgress(0.5);

        tweenRef.current = tween; // Storing the tween in ref for later control

        gsap.set(".marquee_inner", { xPercent: -50 });

        // Handle scrolling direction to reverse animation
        const handleScroll = () => {
            const newScroll = window.pageYOffset;
            isScrollingDown = newScroll > currentScroll;
            currentScroll = newScroll;
            gsap.to(tween, { timeScale: isScrollingDown ? 1 : -1 });
        };

        // Add scroll event listener
        window.addEventListener("scroll", handleScroll);

        return () => {
            // Clean up event listener when component unmounts
            window.removeEventListener("scroll", handleScroll);
            if (tweenRef.current) {
                tweenRef.current.kill(); // Clean up GSAP tween
            }
        };
    }, []);

    return (
       
        
               
                <div className="marquee">
                    <div className="marquee_inner" ref={marqueeRef}>
                <div className="marquee_part">😃Morgan Portfolio</div>
                        <div className="marquee_part">😃Morgan Portfolio</div>
                <div className="marquee_part">😃Morgan Portfolio</div>
                <div className="marquee_part">😃Morgan Portfolio</div>
                <div className="marquee_part">😃Morgan Portfolio</div>
                <div className="marquee_part">😃Morgan Portfolio</div>
                    </div>
                </div>
            
    );
};

export default Marquee;
