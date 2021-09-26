import React from 'react';
import './Header.css'

// Web Site Main Header 
const Header = () => {
    return (
        <div className="headerStyle">
            <h1 className=""><span className="welcomeTaxt">Welcome To</span>  <span className="text-info"> Web Developers Zone</span></h1>
            <h3 className="mt-3">Developers Mounthly Selery Budget :  <span className="text-primary"> ৳ 500000</span></h3>
        </div>
    );
};

export default Header;