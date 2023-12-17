"use client";
import React, { useEffect, useState } from "react";
import styles from "./Header.module.scss";
import useStore from "../../store/headerStore";

const Header = () => {
  const numbers = Array.from({ length: 69 }, (_, i) => i);
  const { headerText, setHeaderText } = useStore();

  useEffect(() => {
    setHeaderText("Welcome to Hermann's Blog");
  }, []);

  return (
    <div className={styles.header_space}>
      <div className={styles.headerText}>{headerText}</div>
      <div className={styles.bar_space}>
        {numbers.map((number) => (
          <div key={number} className={styles.bar}></div>
        ))}
      </div>
    </div>
  );
};

export default Header;
