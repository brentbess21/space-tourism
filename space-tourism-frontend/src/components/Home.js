import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='home component-body'>
            <div className= 'grid-container grid-container--home'>
                <div>
                    <h1 className='fs-500 txt-light uppercase ff-sans-cond letter-spacing-1'>So, you want to travel to <span className='fs-900 txt-white ff-serif display-block'>Space</span></h1>

                    <p>Let’s face it; if you want to go to space, you might as well genuinely go to 
                    outer space and not hover kind of on the edge of it. Well sit back, and relax 
                    because we’ll give you a truly out of this world experience!</p>
                </div>
                <div>
                    <Link to='/' className='large-button uppercase ff-serif text-dark bg-white'>Explore</Link>
                </div>
            </div>
        </div>
    );
}

export default Home;