import React from 'react';

import Header from '../Header';

const CrewMember = () => {
    return (
        <div className='crew'>
            <Header />
            <main id="main" class="grid-container grid-container--crew flow">
                <h1 class="numbered-title"><span aria-hidden="true">02</span> Meet your crew</h1>
                <div class="dot-indicators flex">
                    <button aria-selected="true"><span class="sr-only">The co</span></button>
                    <button aria-selected="false"><span class="sr-only">Slide title</span></button>
                    <button aria-selected="false"><span class="sr-only">Slide title</span></button>
                    <button aria-selected="false"><span class="sr-only">Slide title</span></button>
                </div>

                <article class="crew-details">
                    <h2 class="fs-600 ff-serif uppercase">Commander</h2>
                    <p class="fs-700 uppercase ff-serif">Douglas Hurley</p>
                    <p>Douglas Gerald Hurley is an American engineer, former Marine Corps pilot 
                    and former NASA astronaut. He launched into space for the third time as 
                    commander of Crew Dragon Demo-2.</p>
                </article>
        
                <img src="assets/crew/image-douglas-hurley.png" alt="Douglas Hurley" />
            </main>
        </div>
    )
}

export default CrewMember;