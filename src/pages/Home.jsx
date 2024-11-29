import React from 'react';
import Header from './Shared/Header/Header';
import Navbar from './Shared/Navbar';
import LeftSideNav from './Shared/LeftSidenav/LeftSideNav';
import RightSideNav from './Shared/RightSideNav/RightSideNav';
import BreakingNews from './Shared/BreakingNews/BreakingNews';

const Home = () => {
    return (
        <div>
            <Header> </Header>

            <BreakingNews> </BreakingNews>
            <Navbar> </Navbar>
           
           <div className='grid grid-cols-1 md:grid-cols-4 gap-6 ' >
            <div className='border' > <LeftSideNav> </LeftSideNav>

            </div>

            <div className='text-4xl border md:col-span-2  ' > <h2>News Comming soon </h2> </div>
            <div className='border' >  
                <RightSideNav> </RightSideNav>
                
            </div>
           </div>
        </div>
    );
};

export default Home;