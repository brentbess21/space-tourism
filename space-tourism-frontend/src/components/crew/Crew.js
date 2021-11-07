import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../Header';

const Crew = () => {
    return (
        <div className="crew">
            <Header />
            <div className="landing-page">
                <h1 className="numbered-title"><span>02</span>Meet the crew</h1>

                <div className="tab-list underline-indicators flex">
                    <Link to={`/crew/Commander`}  className="uppercase ff-sans-cond txt-light letter-spacing-2 no-decoration" >The Commander</Link>
                    <Link to={`/crew/MissionSpecialist`}  className="uppercase ff-sans-cond txt-light letter-spacing-2 no-decoration" >Mission Specialist</Link>
                    <Link to={`/crew/Pilot`}  className="uppercase ff-sans-cond txt-light letter-spacing-2 no-decoration" >The Pilot</Link>
                    <Link to={`/crew/FlightEngineer`}  className="uppercase ff-sans-cond txt-light letter-spacing-2 no-decoration" >Flight Engineer</Link>
                </div>
            </div>
        </div>
    )
}

export default Crew;