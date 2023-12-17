"use client";

import Header from "@/app/components/Header/Header";
import React, { useEffect } from "react";
import styles from "./MarkDown.module.scss";
import useStore from "../../../store/headerStore";

const MarkDown = () => {
  const { setHeaderText } = useStore();

  useEffect(() => {
    setHeaderText("MarkDown");
  }, []);

  return (
    <div className={styles.body}>
      <Header />
      MarkDown페이지
    </div>
  );
};

export default MarkDown;
