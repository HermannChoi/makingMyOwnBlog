"use client";

import Header from "@/app/components/Header/Header";
import React, { useEffect } from "react";
import styles from "./CSS.module.scss";
import useStore from "../../../store/headerStore";

const CSS = () => {
  const { setHeaderText } = useStore();

  useEffect(() => {
    setHeaderText("CSS");
  }, []);

  return (
    <div className={styles.body}>
      <Header />
      CSS페이지
    </div>
  );
};

export default CSS;
