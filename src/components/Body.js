import React from "react";
import useArticles from "../hooks/useArticles";
import Shimmer from "./Shimmer";
import ArticlesCard from "./ArticlesCard";
import ToggleButton from "./ToggleButton";
import { ToggleProvider } from "../utils/ToggleContext";
import Error from "./Error";

const Body = () => {
  const { loading, articles, error } = useArticles();

  if (loading) return <Shimmer />
  if (error) return <Error />
  return (
    <ToggleProvider>
      <div className="center-align,displayFlex">
        <h1 className="center-align">Most Popular Articles</h1>
        <div>
          <ToggleButton />
        </div>
      </div>
      <div className="grid-container">
        {articles.length > 0 &&
          articles.map((item) => {
            return <ArticlesCard key={item.id} article={item} />;
          })}
      </div>
    </ToggleProvider>
  );
};

export default Body;
