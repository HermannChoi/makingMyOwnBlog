"use client";

import Header from "@/app/components/Header/Header";
import React, { useEffect } from "react";
import styles from "./HTML.module.scss";
import useStore from "../../../store/headerStore";

const HTML = () => {
  const { setHeaderText } = useStore();

  useEffect(() => {
    setHeaderText("HTML");
  }, []);

  return (
    <div className={styles.body}>
      <Header />
      HTML페이지
    </div>
  );
};

export default HTML;
