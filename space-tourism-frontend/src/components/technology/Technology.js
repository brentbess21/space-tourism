import React from 'react';
import { Link } from 'react-router-dom';

import Header from './../Header';

const Technology = () => {
    return (
        <div className='technology'>
            <Header />
            <main id="main" className="grid-container grid-container--tech flow">
                <h1 className="numbered-title"><span aria-hidden='true'>03</span>Space launch 101</h1>
                <img src='./../../assets/technology/image-space-capsule-landscape.jpg' alt='space capsule' className='landscape-img'/>
                <img src='./../../assets/technology/image-space-capsule-portrait.jpg' alt='space capsule' className='portrait-img' />
                <div className="number-indicators flex">
                    <Link to='/' aria-selected='true'>1</Link>
                    <Link to='/'>2</Link>
                    <Link to='/'>3</Link>
                </div>
                <article className="tech-details flow">
                    <h2 className="fs-600 ff-serif uppercase">The terminology...</h2>
                    <p className="fs-700 uppercase ff-serif">Space capsule</p>
                    <p>A space capsule is an often-crewed spacecraft that uses a blunt-body reentry 
                    capsule to reenter the Earth's atmosphere without wings. Our capsule is where 
                    you'll spend your time during the flight. It includes a space gym, cinema, 
                    and plenty of other activities to keep you entertained.</p>
                </article>
            </main>
        </div>
    )
}

export default Technology;