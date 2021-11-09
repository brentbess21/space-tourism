import React from 'react';
import { Link, useParams } from 'react-router-dom';

import Header from './../Header';

const Technology = (props) => {
    
    const { tech } = props;
    const { techName } = useParams();
    const technology = tech.find(vehicle => vehicle.name.replace(/\s+/g, '') === techName)

    const selected = (e) => {
        const targetNumber = e.target;
        const numberList = targetNumber.parentNode;
        numberList
            .querySelector('[aria-selected="true"]')
            .setAttribute('aria-selected', false);
        
        targetNumber.setAttribute('aria-selected', true)       
    }

    return (
        <div className='tech'>
            <Header />
            <main id="main" className="grid-container grid-container--tech flow">
                <h1 className="numbered-title"><span aria-hidden='true'>03</span>Space launch 101</h1>
                <img src={technology.images.landscape} alt={technology.name} className='landscape-img'/>
                <img src={technology.images.portrait} alt={technology.name} className='portrait-img' />
                <div className="number-indicators flex">
                    <Link to='/technology/LaunchVehicle' aria-selected='true' onClick={selected}>1</Link>
                    <Link to='/technology/Spaceport' aria-selected='false' onClick={selected}>2</Link>
                    <Link to='/technology/SpaceCapsule' aria-selected='false' onClick={selected}>3</Link>
                </div>
                <article className="tech-details flow">
                    <h2 className="fs-600 ff-serif uppercase">The terminology...</h2>
                    <p className="fs-700 uppercase ff-serif">{technology.name}</p>
                    <p>{technology.description}</p>
                </article>
            </main>
        </div>
    )
}

export default Technology;