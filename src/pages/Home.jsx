// Home.jsx

import React from "react";
import posts from "../data/posts";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className={styles.container}>
      {posts.map((elem) => (
        <div key={elem.id} className={styles.Block}>
          <Link to={`/posts/${elem.id}`} className={styles.Link}>
            <div>
              <div className={styles.Tag}>
                <div className={styles.Date}>
                  {new Date(elem.createdAt).toLocaleDateString("ja-JP")}
                </div>
                <ul className={styles.Categories}>
                  {elem.categories.map((category) => {
                    return (
                      <li className={styles.Category} key={category}>
                        {category}
                      </li>
                    );
                  })}
                </ul>
              </div>
              <p className={styles.Title}>APIで取得した{elem.title}</p>
              <div
                className={styles.Body}
                dangerouslySetInnerHTML={{ __html: elem.content }}
              ></div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Home;
