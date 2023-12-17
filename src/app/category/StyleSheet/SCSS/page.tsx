"use client";

import Header from "@/app/components/Header/Header";
import React, { useEffect } from "react";
import styles from "./SCSS.module.scss";
import useStore from "../../../store/headerStore";

const SCSS = () => {
  const { setHeaderText } = useStore();

  useEffect(() => {
    setHeaderText("SCSS");
  }, []);

  return (
    <div className={styles.body}>
      <Header />
      SCSS페이지
    </div>
  );
};

export default SCSS;
