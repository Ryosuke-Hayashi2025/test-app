// Home.jsx

import React from "react";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Home = () => {
  const [posts, setPosts] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetcher = async () => {
      const res = await fetch(
        "https://1hmfpsvto6.execute-api.ap-northeast-1.amazonaws.com/dev/posts"
      );
      const data = await res.json();
      setPosts(data.posts);
      setIsLoading(false);
    };

    fetcher();
  }, []);

  if (isLoading) {
    return <p>読み込み中...</p>;
  }

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
              <p className={styles.Title}>{elem.title}</p>
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
