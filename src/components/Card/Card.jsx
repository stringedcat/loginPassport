import React from "react";
import "./card.css";
const Card = ({ post }) => {
  return (
    <div className="card">
      <span className="title">{post.title}</span>
      <img src={post.img} className="img" alt="" />
      <p className="desc">{post.desc}</p>
      <button className="cardButton">Read More</button>
    </div>
  );
};

export default Card;
