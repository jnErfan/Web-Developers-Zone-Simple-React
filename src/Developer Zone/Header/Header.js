import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className="headerStyle">
            <h1 className=""><span className="welcomeTaxt">Welcome To</span>  <span className="text-info"> Web Developers Zone</span></h1>
            <h3 className="mt-3">Developers Mounthly Selery Budget :  ৳ 500000</h3>
        </div>
    );
};

export default Header;