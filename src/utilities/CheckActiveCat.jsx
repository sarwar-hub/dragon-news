/* eslint-disable react/prop-types */
import React from 'react';
import { NavLink } from 'react-router-dom';

const CheckActiveCat = ({to, children}) => {
    return (
        <NavLink to={to} className={({ isActive }) => isActive ? "p-2 ps-5 text-dark bg-light text-decoration-none" : "p-2 ps-5 text-secondary text-decoration-none"} >
            {children}
        </NavLink>
    );
};

export default CheckActiveCat;