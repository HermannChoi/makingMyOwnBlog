"use client";

import Header from "@/app/components/Header/Header";
import React, { useEffect } from "react";
import styles from "./Language.module.scss";
import useStore from "../../../app/store/headerStore";

const Language = () => {
  const { setHeaderText } = useStore();

  useEffect(() => {
    setHeaderText("Language");
  }, []);

  return (
    <div className={styles.body}>
      <Header />
      Language페이지
    </div>
  );
};

export default Language;
