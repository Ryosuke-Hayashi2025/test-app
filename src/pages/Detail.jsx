// Detail.jsx

import React from "react";
import { useParams } from "react-router-dom";
import posts from "../data/posts";
import styles from "./Detail.module.css";

const Detail = () => {
  const { id } = useParams();
  const post = posts.find((post) => post.id.toString() === id);

  return (
    <div className={styles.container}>
      <div key={post.id}>
        <div>
          <img src={post.thumbnailUrl} alt="記事画像"/>
          <div className={styles.Tag}>
            <div className={styles.Date}>
              {new Date(post.createdAt).toLocaleDateString("ja-JP")}
            </div>
            <ul className={styles.Categories}>
              {post.categories.map((category) => {
                return (
                  <li className={styles.Category} key={category}>
                    {category}
                  </li>
                );
              })}
            </ul>
          </div>
          <p className={styles.Title}>APIで取得した{post.title}</p>
          <div
            className={styles.Body}
            dangerouslySetInnerHTML={{ __html: post.content }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Detail;