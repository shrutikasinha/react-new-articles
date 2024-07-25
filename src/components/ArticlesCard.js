import React, { useContext } from "react";
import { Link } from "react-router-dom";

import "./styles.css";
import NoImage from "../constants/images/NoImage.jpg";
import ToggleContext from "../utils/ToggleContext";
import { ALT_TEXT } from "../utils/constants";

const ArticlesCard = ({ article = {} }) => {
  const { byline = "", title = "", id = 0, url = null, media = [] } = article;
  const { isToggled } = useContext(ToggleContext);
  const image = media[0]?.["media-metadata"]?.[2] || {};
  const toLink = !isToggled ? `/${id}` : url;

  const handleLink = (e) => {
    e.preventDefault();
    window.open(toLink, "_blank");
  };
  return (
    <Link
      to={toLink}
      data-testid={"card"}
      onClick={isToggled && handleLink}
      style={{ textDecoration: "none", color: "black" }}
    >
      <div className="card">
        <figure>
          {image.url ? (
            <img src={image.url} alt={ALT_TEXT} />
          ) : (
            <img src={NoImage} style={{ height: "165px" }} alt={ALT_TEXT} />
          )}

          <figcaption className="figcaption">{byline}</figcaption>
        </figure>
        <div className="card-title">{title}</div>
      </div>
    </Link>
  );
};

export default ArticlesCard;
