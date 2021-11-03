import React from 'react';

const Moon = () => {
    return (
        <article>
            <img src='./../../assets/destination/image-moon.webp' alt='the moon' />
            <h2 className='fs-800 uppercase ff-serif'>Moon</h2>

            <p>See our planet as you’ve never seen it before. A perfect relaxing trip away to help 
            regain perspective and come back refreshed. While you’re there, take in some history 
            by visiting the Luna 2 and Apollo 11 landing sites.</p>

            <div className='flex'>
                <div>
                    <h3 className='fs-200 uppercase txt-light'>Avg. distance</h3>
                    <p className='fs-500 ff-serif uppercase'>384,400 km</p>
                </div>  

                <div>
                    <h3 className='fs-200 uppercase txt-light'>Est. travel time</h3>
                    <p className='fs-500 ff-serif uppercase'>3 days</p>
                </div>
            </div>
        </article>
    )
}

export default Moon;