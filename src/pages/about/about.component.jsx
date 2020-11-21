import React from 'react';
import './about.styles.scss';
import SkillBars from '../../components/skillbar/skillbar.component';
import Fade from 'react-reveal/Fade';



const About = () => (
    <div className='about-container'>
        <div className='left-container'>
            <Fade left>
                <span>About Me</span>
                <p>Meticulous web developer with over 2 years of experience in freelance
                responsive web development and graphic design and a firm believer of mobile-first
                approach. Proficiency in HTML, CSS, JavaScript plus modern libraries and frameworks
                with extensive working knowledge of design tools using Adobe Suite of applications
            and prototyping tools like Web flow, Figma and Adobe XD.</p>
            </Fade>
        </div>
        <div className='right-container'>
            <Fade right>
                <SkillBars />
            </Fade>
        </div>
    </div>
)

export default About; 