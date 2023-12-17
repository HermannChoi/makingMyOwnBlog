"use client";

import Header from "@/app/components/Header/Header";
import React, { useEffect } from "react";
import styles from "./JavaScript.module.scss";
import useStore from "../../../store/headerStore";

const JavaScript = () => {
  const { setHeaderText } = useStore();

  useEffect(() => {
    setHeaderText("JavaScript");
  }, []);

  return (
    <div className={styles.body}>
      <Header />
      JavaScript페이지
    </div>
  );
};

export default JavaScript;
