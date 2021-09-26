import React from 'react';
import "./Developer.css";
import "./Developer.css";

const Developers = props => {
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
            <p className="email"><span className="text-primary">Email : </span> <br /> {email}</p>
            <button onClick={()=>props.getHired(props.developer)} className="btn btn-info text-white"><i className ="fas fa-user-check" > </i> Get Hire</button>
            <button className="btn btn-outline-info ms-2">DETAILS</button>
            </div>
            </div>
         </div>       
</div>
    );
};

export default Developers;