import React from 'react';
import CardItem from './CardItem';
import './Cards.css';
import image9 from '../images/img-9.jpg'

function Cards() {
    return (
        <div className='cards'>
            <h1>Projects</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem 
                        src={image9}
                        text='Test test test'
                        label='test'
                        path='/services'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
