"use client";
import React, { useEffect, useState } from "react";
import styles from "./Header.module.scss";

const Header = () => {
  const numbers = Array.from({ length: 39 }, (_, i) => i);

  return (
    <div className={styles.header_space}>
      <div className={styles.greet}>{`Welcome to Hermann's blog`}</div>
      <div className={styles.bar_space}>
        {numbers.map((number) => (
          <div key={number} className={styles.bar}></div>
        ))}
      </div>
    </div>
  );
};

export default Header;
