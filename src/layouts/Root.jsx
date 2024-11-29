import React from 'react';
import { Outlet } from 'react-router-dom';
import Home from '../pages/Home';

const Root = () => {
    return (
        <div className='max-w-6xl mx-auto font-poppins ' > 
            <Outlet> </Outlet>
        </div>
    );
};

export default Root;