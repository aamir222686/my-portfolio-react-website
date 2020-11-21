import React from 'react';
import './header.styles.scss';
import { Icon } from 'semantic-ui-react';
import Jump from 'react-reveal/Jump';
import Pulse from 'react-reveal/Pulse';

const Header = () => (
    <div className='main-container'>
        <Pulse>
            <span className='normal-text'>
                <p>Hello, I'm
                <span className='name'> Aamir Hussain</span>.</p>
            I'm a front-end developer.
        </span>
        </Pulse>
        <Jump>
            <span className='icon-set'>
                <a href='https://www.linkedin.com/in/aamir-hussain-2196a916b/' target='_blank'>
                    <Icon className='icon' color='red' size='big' name='linkedin' />
                </a>
                <a href='https://github.com/aamir222686' target='_blank'>
                    <Icon className='icon' color='red' size='big' name='github' />
                </a>
                <a href='https://www.facebook.com/aamir.hussain.7334' target='_blank'>
                    <Icon className='icon' color='red' size='big' name='facebook' />
                </a>
            </span>
        </Jump>
    </div>
)

export default Header;