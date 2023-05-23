import React from "react";

const Card_2 = (props) => {
  return (
    <div className="card-02">
      <div>
        <span>{props.number}</span>
      </div>
      <div>
        <h3>{props.content}</h3>
        <p>{props.paragraph}</p>
      </div>
    </div>
  )
}

export default Card_2;