import React from 'react';
import CartInfo from '../Cart Info/CartInfo';
import "./Cart.css";


const Cart = props => {
    const {cartUpdate} = props

    const totalSalary = (previous,current) => previous + parseInt(current.salary) ;
    const salary =  cartUpdate.reduce(totalSalary,0);
  
    const reFreash=()=>{
      window.location.reload()
    }

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
          </table>
                     {
                         cartUpdate.map(developerDetails => <CartInfo
                            key={developerDetails.id}
                            developerDetails={developerDetails}
                            />)
                     }

          <div className="parces text-center">
          <button onClick={reFreash} className="btn btn-primary text-center">Clear All</button>
          </div>

        </div>
        </div>
    );
};

export default Cart;