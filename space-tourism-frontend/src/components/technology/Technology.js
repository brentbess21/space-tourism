import React from 'react';
import { Link } from 'react-router-dom';

import Header from './../Header';

const Technology = () => {
    return (
        <div className='technology'>
            <Header />
            <h1><span>03</span>Space launch 101</h1>
            <img src='' alt='something' />
            <div>
                <Link to='/'>1</Link>
                <Link to='/'>2</Link>
                <Link to='/'>3</Link>
            </div>
            <article>
                <h2>The terminology...</h2>
                <p>Space capsule</p>
                <p>A space capsule is an often-crewed spacecraft that uses a blunt-body reentry 
                capsule to reenter the Earth's atmosphere without wings. Our capsule is where 
                you'll spend your time during the flight. It includes a space gym, cinema, 
                and plenty of other activities to keep you entertained.</p>
            </article>

            

        



 

            

        </div>
    )
}

export default Technology;