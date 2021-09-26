import React from 'react';
import "./Developer.css";
import "./Developer.css";

const Developers = props => {
    // Destructuring All Dynamic Card Information 
   const {name, skills, graduate, workHistory, salary, email,img} = props.developer;
   
    return (
<div>
     
  <div className="my-4 shadow-sm bg-white rounded-3 text-center">
         <div className="single-product">
            <img className="rounded-circle pt-2" width="200px" height="200px" src={img} alt="" />
            <div className="card-body">
            <h3 className="text-info">{name}</h3>
            <p><span className="text-primary"> Skills: </span> <br /> {skills}</p>
            <p><span className="text-primary">Graduate :</span> <br /> {graduate}</p> 
            <h5><span className="text-primary">Salary : </span> {salary} /Mounth</h5>  
            <p><span className="text-primary">Experiences :</span> <br /> {workHistory}</p>
            <p><span className="text-primary">Email : </span> <br /> <span className="email"> {email}</span></p>
            <button onClick={()=>props.getHired(props.developer)} className="btn btn-info text-white"><i className ="fas fa-user-check" > </i> Get Hire</button>

            <button type="button" className="btn btn-outline-info ms-2" data-bs-toggle="modal" data-bs-target="#staticBackdrop">DETAILS</button>


            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="staticBackdropLabel">Developer Details</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                <a href="#facebook.com"><i className="fab fa-facebook fs-1 pe-3 text-dark"></i></a>
                <a href="#instagram.com"><i className="fab fa-instagram fs-1 pe-3 text-dark"></i></a>
                <a href="#twitter.com"><i className="fab fa-twitter fs-1 pe-3 text-dark"></i></a>
                <a href="#linkedin.com"><i className="fab fa-linkedin fs-1 pe-3 text-dark"></i></a>
                <a href="#github.com"><i className="fab fa-github fs-1 pe-3 text-dark"></i></a>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
            </div>

            
            </div>
            </div>
         </div>       
</div>
    );
};

export default Developers;