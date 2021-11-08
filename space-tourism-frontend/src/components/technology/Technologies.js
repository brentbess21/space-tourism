import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../Header';

const Technologies = () => {
    return (
        <div>
            <Header />
            <div className='landing-page container flow'>
                <h1 className="numbered-title"><span aria-hidden='true'>03</span>Space launch 101</h1>
                <div className="tab-list underline-indicators flex">
                    <Link to='/technology/LaunchVehicle' className="uppercase ff-sans-cond txt-light letter-spacing-2 no-decoration">Launch Vehicle</Link>
                    <Link to='/technology/Spaceport' className="uppercase ff-sans-cond txt-light letter-spacing-2 no-decoration">Spaceport</Link>
                    <Link to='/technology/SpaceCapsule' className="uppercase ff-sans-cond txt-light letter-spacing-2 no-decoration">Space Capsule</Link>
                </div>
            </div>
        </div>
    )
}

export default Technologies;