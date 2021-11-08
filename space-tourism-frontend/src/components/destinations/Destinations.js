import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../Header';

const Destinations = (props) => {    

    return(
        <div className="destinations">
            <Header />
            <div className="landing-page container flow">
                <h1 className="numbered-title"><span>01</span> Explore the destinations</h1>

                <div className="tab-list underline-indicators flex">
                        <Link to={`/destinations/Moon`}  className="uppercase ff-sans-cond txt-light  letter-spacing-2 no-decoration" >Moon</Link>
                        <Link to={`/destinations/Mars`}  className="uppercase ff-sans-cond txt-light  letter-spacing-2 no-decoration" >Mars</Link>
                        <Link to={`/destinations/Europa`}  className="uppercase ff-sans-cond txt-light letter-spacing-2 no-decoration" >Europa</Link>
                        <Link to={`/destinations/Titan`}  className="uppercase ff-sans-cond txt-light letter-spacing-2 no-decoration" >Titan</Link>
                </div>
            </div>
        </div>
    )
}

export default Destinations;