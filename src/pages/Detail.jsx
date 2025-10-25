// Detail.jsx

import React from "react";
import { useParams } from "react-router-dom";
import styles from "./Detail.module.css";
import { useState, useEffect } from "react";

const Detail = () => {
  const { id } = useParams();

  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetcher = async () => {
      const res = await fetch(
        `https://1hmfpsvto6.execute-api.ap-northeast-1.amazonaws.com/dev/posts/${id}`
      );
      const data = await res.json();
      setPost(data.post);
    };

    fetcher();
  }, [id]);

  if (post === null) {
    return <p>読み込み中...</p>;
  }

  if (!post) {
    return <p>記事が見つかりませんでした。</p>;
  }

  return (
    <div className={styles.container}>
      <div>
        <div>
          <img src={post.thumbnailUrl} alt="記事画像" />
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
          <p className={styles.Title}>{post.title}</p>
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
