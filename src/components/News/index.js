import React from "react";
import { useEffect, useState } from "react";
import { URL_PUBLIC } from "../utils/constans";

export const News = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch(URL_PUBLIC)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Request faild with status ${response.status}`);
        }

        return response.json();
      })
      .then((result) => {
        setArticles(result);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <div>
      <h2>News</h2>
      {articles.map((art) => {
        <article key={art.id}>
          <h4>{art.title}</h4>
        </article>
      })}
    </div>
  );
};
