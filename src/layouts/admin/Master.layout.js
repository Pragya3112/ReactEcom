import React from 'react';

import '../../assets/admin/dist/css/';
import '../../assets/admin/dist/css/pages/dashboard1.css';

import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';

const MasterLayout = () => {
    return (
        <div className="skin-default-dark fixed-layout">
             <div id="main-wrapper"> 
                <Navbar />
                
                <Sidebar />

                <div className="page-wrapper">

                </div>
                <Footer />
             </div>
        </div>
    );
}

export default MasterLayout;