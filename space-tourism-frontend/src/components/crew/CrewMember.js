import React from 'react';
import { useParams, Link } from 'react-router-dom';

import Header from '../Header';

const CrewMember = (props) => {

    const { crew } = props;
    const { crewRole } = useParams();

    const crewMember = crew.find(member => member.role.replace(/\s+/g, '') === crewRole)
 
    return (
        <div className='crew'>
            <Header />
            <main id="main" className="grid-container grid-container--crew flow">
                <h1 className="numbered-title"><span aria-hidden="true">02</span> Meet the crew</h1>
                <div className="dot-indicators flex">
                    <Link to={`/crew/Commander`}><span className="sr-only" >The commander</span></Link>
                    <Link to={`/crew/MissionSpecialist`}><span className="sr-only" >Mission Specialist</span></Link>
                    <Link to={`/crew/Pilot`}><span className="sr-only" >The Pilot</span></Link>
                    <Link to={`/crew/FlightEngineer`}><span className="sr-only" >Flight Engineer</span></Link>
                </div>

                <article className="crew-details flow">
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