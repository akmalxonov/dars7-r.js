import React from 'react';
import Navbar from '../navbar';
import Footer from '../footer';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div>
            <div>
            <div className="container">
                <Navbar />
                <main><Outlet /></main>
                <Footer />
            </div>
        </div>
        </div>
    );
}

export default MainLayout;
