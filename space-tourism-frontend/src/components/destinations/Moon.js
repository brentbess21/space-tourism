import React from 'react';

import Tabs from './Tabs';

const Moon = () => {
    return (
        <main id="main" class="grid-container grid-container--destination flow">
            <h1 class="numbered-title"><span>01</span> Pick your destination</h1>

            <img src="./../../assets/destination/image-moon.webp" alt="the moon" />

            <Tabs />
            <article class="destination-info">
                <h2 class="fs-800 uppercase ff-serif">Moon</h2>

                <p>See our planet as you’ve never seen it before. A perfect relaxing trip away to help 
                regain perspective and come back refreshed. While you’re there, take in some history 
                by visiting the Luna 2 and Apollo 11 landing sites.</p>
            
                <div class="destination-meta flex">
                    <div>
                        <h3 class="txt-light fs-200 uppercase">Avg. distance</h3>
                        <p class="fs-500 ff-serif uppercase">384,400 km</p>
                    </div>
                    <div>
                        <h3 class="txt-light fs-200 uppercase">Est. travel time</h3>
                        <p class="fs-500 ff-serif uppercase">3 days</p>
                    </div>
                </div>
            </article>
        </main>
    )
}

export default Moon;