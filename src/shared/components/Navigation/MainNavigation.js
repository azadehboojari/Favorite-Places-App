import './MainNavigation.css';

import { Link } from 'react-router-dom';
import MainHeader from './MainHeader';
import React from 'react';

const MainNavigation = props => {
    return (
        <MainHeader>
            <button className="main-navigation__menu-btn">
                <span />
                <span />
                <span />
            </button>
            <h1>
                <Link to='/'> Favorite Places </Link>
            </h1>
            <nav>
                ...
            </nav>
        </MainHeader>
    )
}
export default MainNavigation;