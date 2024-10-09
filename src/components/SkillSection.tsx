import React from 'react';
// Importing images from the assets directory
import gitLogo from '../assets/skills/Git.png';
import nodeLogo from '../assets/skills/node.png';
import reactLogo from '../assets/skills/react.png';
import svnLogo from '../assets/skills/SVN.png';
import tailwindLogo from '../assets/skills/tailwind.png';
import tsLogo from '../assets/skills/ts.png';
import visualStudioLogo from '../assets/skills/visualstudiologo.png';
import webstormLogo from '../assets/skills/webstorm.png';
import postmanLogo from '../assets/skills/postman-icon.svg';
import mssqlLogo from '../assets/skills/MSSQL.png';
import jsLogo from '../assets/skills/js.png';
import htmlLogo from '../assets/skills/html.png';
import cssLogo from '../assets/skills/css.png';
import bootstrapLogo from '../assets/skills/Bootstrap_logo.png';
import dynamic from '../assets/skills/dynamic365.webp';
import cSharplogo from '../assets/skills/sharplogo.png';




const SkillSection: React.FC = () => {
    return (
      
            <section className="skills-section">
                <div className="bg-gray-200 dark:bg-gray-700 py-24 sm:py-32">
                    <h2><center>Skills</center></h2>

                <ul className="grid-container">
                    <li><img src={gitLogo} alt="GIT" /></li>
                    <li><img src={nodeLogo} alt="Node.js" /></li>
                    <li><img src={reactLogo} alt="React" /></li>
                    <li><img src={svnLogo} alt="SVN" /></li>

                    <li><img src={tailwindLogo} alt="Tailwind CSS" /></li>
                    <li><img src={tsLogo} alt="Typescript" /></li>
                    <li><img src={visualStudioLogo} alt="Visual Studio" /></li>
                    <li><img src={webstormLogo} alt="Webstorm" /></li>

                    <li><img src={postmanLogo} alt="Postman" /></li>
                    <li><img src={mssqlLogo} alt="MSSQL" /></li>
                    <li><img src={jsLogo} alt="JavaScript" /></li>
                    <li><img src={htmlLogo} alt="HTML" /></li>

                    <li><img src={cssLogo} alt="CSS" /></li>
                    <li><img src={bootstrapLogo} alt="Bootstrap" /></li>
                    <li><img src={dynamic} alt="Dynamic365" /></li>
                    <li><img src={cSharplogo} alt="C#" /></li>
                </ul>
                   
             </div>
            </section>
       
    );
};

export default SkillSection;
