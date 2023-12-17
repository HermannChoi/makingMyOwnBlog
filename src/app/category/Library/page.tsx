"use client";

import Header from "@/app/components/Header/Header";
import React, { useEffect } from "react";
import styles from "./Library.module.scss";
import useStore from "../../../app/store/headerStore";

const Library = () => {
  const { setHeaderText } = useStore();

  useEffect(() => {
    setHeaderText("Library");
  }, []);

  return (
    <div className={styles.body}>
      <Header />
      Library페이지
    </div>
  );
};

export default Library;
