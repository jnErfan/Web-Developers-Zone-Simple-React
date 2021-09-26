import React from 'react';

const Footer = () => {
    return (
        <div>
           <footer className="text-center rounded-3 bg-white p-1">
                <p className="pt-3">
                    <i className="far fa-copyright"> </i> Design By <span className="text-primary">Erfan</span> With <span style={{color:'orangered'}}>React</span>
                </p>
            </footer> 
        </div>
    );
};

export default Footer;