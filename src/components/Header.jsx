// Header.jsx

import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
// import { useState, useEffect } from "react";

const Header = () => {
  return (
    <div className={styles.header}>
      <Link to={`/`} className={styles.Link}>
        <div>Blog</div>
      </Link>
      <Link to={`/contact`} className={styles.Link}>
        <div>お問い合わせ</div>
      </Link>
    </div>
  );
};

export default Header;
