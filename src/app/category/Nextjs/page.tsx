"use client";

import Header from "@/app/components/Header/Header";
import React, { useEffect } from "react";
import styles from "./Nextjs.module.scss";
import useStore from "../../store/headerStore";

const Nextjs = () => {
  const { setHeaderText } = useStore();

  useEffect(() => {
    setHeaderText("Nextjs");
  }, []);

  return (
    <div className={styles.body}>
      <Header />
      Nextjs페이지
    </div>
  );
};

export default Nextjs;
