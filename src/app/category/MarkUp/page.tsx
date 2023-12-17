"use client";

import Header from "@/app/components/Header/Header";
import React, { useEffect } from "react";
import styles from "./MarkUp.module.scss";
import useStore from "../../store/headerStore";

const MarkUp = () => {
  const { setHeaderText } = useStore();

  useEffect(() => {
    setHeaderText("Mark Up");
  }, []);

  return (
    <div className={styles.body}>
      <Header />
      MarkUp페이지
    </div>
  );
};

export default MarkUp;
