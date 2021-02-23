import React from 'react';
import CardItem from './CardItem';
import './Cards.css';
import image9 from '../images/img-9.jpg'
import image2 from '../images/img-2.jpg'
import image3 from '../images/img-3.jpg'
import image4 from '../images/img-4.jpg'
import image5 from '../images/img-5.jpg'

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
                        path='/projects'
                        />
                        <CardItem 
                        src={image2}
                        text='Test test test'
                        label='test'
                        path='/projects'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem 
                        src={image3}
                        text='Test test test'
                        label='test'
                        path='/projects'
                        />
                        <CardItem 
                        src={image4}
                        text='Test test test'
                        label='test'
                        path='/projects'
                        />
                        <CardItem 
                        src={image5}
                        text='Test test test'
                        label='test'
                        path='/projects'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
