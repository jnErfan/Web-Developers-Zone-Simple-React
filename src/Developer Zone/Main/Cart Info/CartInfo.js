import React from 'react';
import "./CartInfo.css"

const CartInfo= props => {
const {developerDetails} = props

// Update Developer Name And Salary In Cart 
    return (
 <div className="card mb-3">
         
        <div className="row g-0">
        <div className="col-md-4">
                  <img src={developerDetails.img} className="img-fluid rounded-start" alt="Developer"/>
        </div>
        <div className="col-md-8 bg-info d-flex align-items-center justify-content-center">
               <div>
                  <h5>{developerDetails.name}</h5>
                  <p>{developerDetails.salary} /Mounth</p>
               </div>
        </div>
        </div>
</div>
    );
};

export default CartInfo;