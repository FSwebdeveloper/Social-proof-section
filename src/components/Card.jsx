import React from "react";

function Card(props){
    return (
        <div className="card">
             <div className="img-about">
             <div>
              <img className="avatar-img" src={props.avatar} alt="avatar-img"></img>
             </div>
             <div className="avatar-about">
              <h3 className="card-heading">{props.name}</h3>
              <p className="card-verify">{props.verify}</p>
             </div>
             </div>
             <div>
                <p className="card-about">"{props.about}"</p>
             </div>
            </div>
    )
}

export default Card;