"use client";

import Header from "@/app/components/Header/Header";
import React, { useEffect } from "react";
import styles from "./Spring.module.scss";
import useStore from "../../store/headerStore";

const Spring = () => {
  const { setHeaderText } = useStore();

  useEffect(() => {
    setHeaderText("Spring");
  }, []);

  return (
    <div className={styles.body}>
      <Header />
      Spring페이지
    </div>
  );
};

export default Spring;
