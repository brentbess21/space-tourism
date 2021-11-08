import React from 'react';
import { Link } from 'react-router-dom';

import Header from './Header';

const Home = (props) => {

    return (
        <div className='home'>
            <Header /> 
            <main className= 'grid-container grid-container--home'>
                <div>
                    <h1 className='fs-500 txt-light uppercase ff-sans-cond letter-spacing-1 home-title'>So, you want to travel to <span className='fs-900 txt-white ff-serif display-block'>Space</span></h1>

                    <p>If you are looking for an out of this world experience, look no further than "The Final Frontier!"
                    Meet the people intent on making consumer space travel a reality. 
                    Discover the breath-taking destinations you can dream of visiting.
                    Learn about the technologies that will take you around the Solar System.
                    Finally, space is yours to explore!</p>  
                </div>

                <div>
                    <Link to='/destinations/Moon' className='large-button uppercase ff-serif text-dark bg-white'>Explore</Link>
                </div>
                
            </main>
        </div>
    );
}

export default Home;