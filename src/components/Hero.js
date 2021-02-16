import React from 'react'
import { Button } from './Button'
import './Hero.css';
import '../App.css';

function Hero() {
    return (
        <div className='hero-container'>
            <h1>DAVID CHUNG</h1>
            <p>Full Stack Web Developer</p>
            <div className="hero-btns">
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                    ABOUT ME
                </Button>
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
                    CONTACT ME
                </Button>
            </div>
        </div>
    )
}

export default Hero
