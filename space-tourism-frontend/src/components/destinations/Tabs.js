import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';



const Tabs = (props) => {
    const { destinations, destination } = props;

    console.log("Destination:" , destination)
    return (
        <div>
            <nav className='tab-list underline-indicators flex'>
            
                { destination ? 
                destination.map(dest => {
                    return <Link to={`/destinations/${dest.name}`}  className="uppercase ff-sans-cond txt-light bg-dark letter-spacing-2 no-decoration" key={dest.name}>{dest.name}</Link>

                }) :
                destinations.map(dest => {
                    return <Link to={`/destinations/${dest.name}`}  className="uppercase ff-sans-cond txt-light bg-dark letter-spacing-2 no-decoration" key={dest.name}>{dest.name}</Link>
                
                })}
                
            </nav>

        
        </div>
    )
}

export default Tabs;