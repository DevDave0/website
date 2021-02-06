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
                    SIGN UP
                </Button>
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
                    SIGN UP
                </Button>
            </div>
        </div>
    )
}

export default Hero
