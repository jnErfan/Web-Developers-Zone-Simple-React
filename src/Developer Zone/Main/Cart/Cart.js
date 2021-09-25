import React from 'react';
import "./Cart.css";

const Cart = props => {

    const {cartUpdate} = props
console.log(cartUpdate);
    const totalSalary = (previous,current) => previous + parseInt(current.salary) ;
   const salary =  cartUpdate.reduce(totalSalary,0);

    return (
        <div>
            
            <div className="cart bg-white p-3 shadow-sm rounded-3 mt-4 shoping-cart" id="my-cart">
          <h1>Developers Hired</h1>
          <table className="table">
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Total Hired :</th>
                <td><i className="fas fa-cart-plus"> </i> <span id="total-Products"> {cartUpdate.length}</span></td>
              </tr>
              <tr>
                <th>Total Salary :</th>
                <td><i className="fas fa-dollar-sign"></i> <span id="price">  {salary}</span></td>
              </tr>
            </tbody>
            <h1></h1>
          </table>
          <div className="parces text-center">
            <button  className="btn btn-primary text-center">Buy Now</button>
          </div>
        </div>


        </div>
    );
};

export default Cart;