import React from 'react'
import { Button } from './Button'

function Hero() {
    return (
        <div className='hero-container'>
            <video src='/videos/video-2.mp4' autoPlay loop muted />
            <h1>DAVID CHUNG</h1>
            <p>Full Stack Web Developer</p>
            <div className="hero-btns">
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                    ABOUT ME
                </Button>
            </div>
        </div>
    )
}

export default Hero
