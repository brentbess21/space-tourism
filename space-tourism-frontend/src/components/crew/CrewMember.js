import React from 'react';
import { useParams, Link } from 'react-router-dom';

import Header from '../Header';

const CrewMember = (props) => {

    const { crew } = props;
    const { crewRole } = useParams();

    const crewMember = crew.find(member => member.role.replace(/\s+/g, '') === crewRole)
    console.log("Test:", crewMember.role.replace(/\s+/g, ''));
 
    return (
        <div className='crew'>
            <Header />
            <main id="main" className="grid-container grid-container--crew flow">
                <h1 className="numbered-title"><span aria-hidden="true">02</span> Meet the crew</h1>
                {/* <div className="dot-indicators flex">
                    <button><span className="sr-only">The commander</span></button>
                    <button><span className="sr-only">The mission specialist</span></button>
                    <button><span className="sr-only">The pilot</span></button>
                    <button><span className="sr-only">The crew engineer</span></button>
                </div> */}

                <div className="tab-list underline-indicators flex">
                    <Link to={`/crew/Commander`}  className="uppercase ff-sans-cond txt-light letter-spacing-2 no-decoration" >The Commander</Link>
                    <Link to={`/crew/MissionSpecialist`}  className="uppercase ff-sans-cond txt-light letter-spacing-2 no-decoration" >Mission Specialist</Link>
                    <Link to={`/crew/Pilot`}  className="uppercase ff-sans-cond txt-light letter-spacing-2 no-decoration" >The Pilot</Link>
                    <Link to={`/crew/FlightEngineer`}  className="uppercase ff-sans-cond txt-light letter-spacing-2 no-decoration" >Flight Engineer</Link>
                </div>

                <article className="crew-details">
                    <h2 className="fs-600 ff-serif uppercase">{crewMember.role}</h2>
                    <p className="fs-700 uppercase ff-serif">{crewMember.name}</p>
                    <p>{crewMember.bio}</p>
                </article>
        
                <img src={crewMember.images.png} alt={crewMember.name} />
            </main>
        </div>
    )
}

export default CrewMember;