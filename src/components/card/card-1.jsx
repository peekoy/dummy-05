import React from "react";

const card_1 = (props) => {
  return (
    <div className="card-01">
      <img src={props.img} />
      <h3>{props.content}</h3>
      <p>{props.paragraph}</p>
    </div>
  )
}

export default card_1;