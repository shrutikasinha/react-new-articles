import React from "react";
import { useParams } from "react-router-dom";

import useArticles from "../hooks/useArticles";
import Shimmer from "./Shimmer";
import "./styles.css";
import NoImage from "../constants/images/NoImage.jpg";
import ErrorMessage from "./ErrorMessage";
import { ALT_TEXT } from "../utils/constants";

const IndividualArticleInfo = () => {
  const { resId } = useParams();
  const { articles = [], loading, error } = useArticles();

  let selectedArticle =
    articles.length > 0
      ? articles.filter((filterId) => filterId.id === parseInt(resId))[0]
      : [];

  const { abstract = "", source = "", media = [] } = selectedArticle || {};
  const img = media[0]?.["media-metadata"]?.[2];

  if (loading) return <Shimmer />;
  if (error) return <ErrorMessage />;
  return (
    <main className="center-align">
      <h1>{selectedArticle.title}</h1>
      <figure>
        {img ? (
          <img src={img["url"]} alt={ALT_TEXT} className="individual-img" />
        ) : (
          <img src={NoImage} alt={ALT_TEXT} className="individual-img" />
        )}
        <figcaption className="figcaption">{source}</figcaption>
      </figure>
      <p>{abstract}</p>
    </main>
  );
};

export default IndividualArticleInfo;
