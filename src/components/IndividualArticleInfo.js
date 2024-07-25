import React from "react";
import { useParams } from "react-router-dom";

import useArticles from "../hooks/useArticles";
import Shimmer from "./Shimmer";
import "./styles.css";
import Error from "./Error";
import NoImage from "../constants/images/NoImage.jpg";

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
  if (error) return <Error />;
  return (
    <main className="center-align">
      <h1>{selectedArticle.title}</h1>
      <figure>
        {Boolean(img) ? (
          <img src={img["url"]} alt="NoImage" />
        ) : (
          <img src={NoImage} alt="NoImage" />
        )}
        <figcaption className="figcaption">{source}</figcaption>
      </figure>
      <p>{abstract}</p>
    </main>
  );
};

export default IndividualArticleInfo;
