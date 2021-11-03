import React from 'react';
import { Link } from 'react-router-dom';

const SubHeader = () => {
    return (
        <div class="tab-list underline-indicators flex">
            <Link to='/'  class="uppercase ff-sans-cond txt-light bg-dark letter-spacing-2 no-decoration">Moon</Link>
            <Link to='/' class="uppercase ff-sans-cond txt-light bg-dark letter-spacing-2 no-decoration">Mars</Link>
            <Link to='/' class="uppercase ff-sans-cond txt-light bg-dark letter-spacing-2 no-decoration">Europa</Link>
            <Link to='/' class="uppercase ff-sans-cond txt-light bg-dark letter-spacing-2 no-decoration">Titan</Link>
        </div>
    )
}

export default SubHeader;