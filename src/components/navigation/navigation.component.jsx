import React from 'react';
import { Link } from 'react-router-dom';
import './navigation.styles.scss';

const Navigation = () => (
    <div className='nav-container'>
        <Link className='item' to='/' >HOME</Link>
        <Link className='item' to='/about'>ABOUT</Link>
        <Link className='item' to='/projects'>PROJECTS</Link>
        <Link className='item' to='/contact'>CONTACT</Link>
    </div>
)

export default Navigation; 