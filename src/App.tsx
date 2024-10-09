//import React, { useState, useEffect, useRef } from 'react';

//import './App.css';
//import './styles/landingPage.css';
//import './styles/skillsRow.css';
//import './styles/marquee.css';
//import 'flowbite/dist/flowbite.min.css';
//import Header from './components/Header';
//import BentoBoxProjects from './components/BentoBoxProjects';
//import Marquee from './components/Marquee';
//import SkillSection from './components/SkillSection';
//import './styles/navbar.css'; // Include the CSS styles
//import Footer from './components/Footer';
//import { gsap } from 'gsap';
//import { ScrollTrigger } from 'gsap/ScrollTrigger';
//import LandingPage from './components/landingpage';


//// Register the ScrollTrigger plugin for GSAP
//gsap.registerPlugin(ScrollTrigger);

//const App: React.FC = () => {
//    const [darkMode] = useState<boolean>(() => {
//        const savedMode = localStorage.getItem('theme');
//        return savedMode === 'dark';
//    });

//    const scrollContainerRef = useRef<HTMLDivElement>(null);

//    // GSAP horizontal to vertical scroll effect
//    useEffect(() => {
//        const scrollContainer = scrollContainerRef.current;

//        if (scrollContainer) {
//            // Set up a timeline for horizontal then vertical scroll
//            const tl = gsap.timeline({
//                scrollTrigger: {
//                    trigger: scrollContainer,
//                    start: "top top",
//                    end: "+=3000", // Adjust depending on how long you want the scroll effect to last
//                    scrub: 1,
//                    pin: true, // Pin the container during the scroll
//                    anticipatePin: 1
//                }
//            });

//            // Horizontal scroll (to the right)
//            tl.to(scrollContainer, {
//                x: '-50vw', // Moves 50% to the right
//                duration: 1,
//                ease: "power1.inOut"
//            });

//            // Then, move down (vertical scroll)
//            tl.to(scrollContainer, {
//                y: '-100vh', // Scroll down by the full viewport height
//                duration: 1,
//                ease: "power1.inOut"
//            });
//        }

//        return () => {
//            ScrollTrigger.getAll().forEach(trigger => trigger.kill()); // Clean up on unmount
//        };
//    }, []);

//    // Manage dark mode based on saved preferences
//    useEffect(() => {
//        if (darkMode) {
//            document.body.classList.add('dark');
//            localStorage.setItem('theme', 'dark');
//        } else {
//            document.body.classList.remove('dark');
//            localStorage.setItem('theme', 'light');
//        }
//    }, [darkMode]);

//    return (
//        <div
//            ref={scrollContainerRef}
//            className={`App flex flex-col min-h-screen ${darkMode ? 'dark' : ''}`}
//            style={{ overflow: 'hidden' }} /* Disable native scrollbars */
//        >
//            {/* Header */}
//            <Header />

//            <LandingPage />
        

      
       

//            {/* Main Content */}
//            <main className="flex-grow">
               
//                <Marquee />

              
//                <SkillSection />
//                <BentoBoxProjects />
//            </main>

//            {/* Footer */}
//            <Footer />
//        </div>
//    );
//};

//export default App;
import React, { useState, useEffect, useRef } from 'react';
import Introskills from './components/Introskills';
import './App.css';
import './styles/landingPage.css';
import './styles/skillsRow.css';
import './styles/marquee.css';
import 'flowbite/dist/flowbite.min.css';
import Header from './components/Header';
import BentoBoxProjects from './components/BentoBoxProjects';
import Marquee from './components/Marquee';
import SkillSection from './components/SkillSection';
import './styles/navbar.css'; // Include the CSS styles
import Footer from './components/Footer';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import LandingPage from './components/landingpage';
import AboutMe from './components/AboutMe';
// Register the ScrollTrigger plugin for GSAP
gsap.registerPlugin(ScrollTrigger);

const App: React.FC = () => {
    const [darkMode] = useState<boolean>(() => {
        const savedMode = localStorage.getItem('theme');
        return savedMode === 'dark';
    });

    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const horizontalSectionRef = useRef<HTMLDivElement>(null);

    // GSAP horizontal to vertical scroll effect
    useEffect(() => {
        const scrollContainer = scrollContainerRef.current;
        const horizontalSection = horizontalSectionRef.current;

        if (scrollContainer && horizontalSection) {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: scrollContainer,
                    start: 'top top',
                    end: `+=2000`, // Adjusted this value for horizontal and vertical scrolling
                    scrub: 1,
                    pin: true, // Pin the container during the scroll
                    anticipatePin: 1,
                },
            });

            // Horizontal scroll section
            tl.to(horizontalSection, {
                x: '-100vw', // Move horizontally by 100% of the viewport width
                duration: 1,
                ease: 'power1.inOut',
            });

            // Vertical scroll (after horizontal scroll finishes)
            //tl.to(scrollContainer, {
            //    y: '-vh', // Scroll vertically by one viewport height
            //    duration: 1,
            //    ease: 'power1.inOut',
            //});
        }

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill()); // Clean up on unmount
        };
    }, []);

    // Manage dark mode based on saved preferences
    useEffect(() => {
        if (darkMode) {
            document.body.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.body.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [darkMode]);

    return (
        <div
            ref={scrollContainerRef}
            className={`App flex flex-col min-h-screen ${darkMode ? 'dark' : ''}`}
            style={{ overflow: 'hidden' }} // Disable native scrollbars
        >
            {/* Header */}
            <Header />

            {/* Horizontal Section */}
            <section
                ref={horizontalSectionRef}
                className="flex w-[200vw] h-[100vh] bg-gray-100 dark:bg-gray-800"
            >
                {/* Horizontal content */}
                <div className="flex items-center justify-center w-[100vw]">
                    <LandingPage />
                </div>
                       <AboutMe/>
               
            </section>

            {/* Main Content */}
            <main className="flex-grow">
                <Introskills/>
                <Marquee />
                <SkillSection />
                <BentoBoxProjects />
            </main>

            {/* Footer */}
            <Footer />
        </div>

    );
};

export default App;

