import React from "react";

const card = (props) => {
  return (
    <div className="card">
      <img src={props.img} />
      <div className="card-content">
        <h3>{props.content}</h3>
      </div>
    </div>
  )
}

export default card;