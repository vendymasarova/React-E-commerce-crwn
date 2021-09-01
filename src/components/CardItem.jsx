import React from "react";
import { Link } from "react-router-dom";

function CardItem(props) {
  return (
    <div className="container">
      <li className="cards__item">
        <Link className="cards__item__link" to={props.path}>
          <fugure className="cards__item__pic-wrap" data-category={props.label}>
            <img src={props.src} alt="Travel" className="cards__item__img" />
          </fugure>
          <div className="cards__item__info">
            <h5 className="cards__item__text">{props.text}</h5>
          </div>
        </Link>
      </li>
    </div>
  );
}

export default CardItem;
