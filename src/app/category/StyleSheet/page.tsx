"use client";

import Header from "@/app/components/Header/Header";
import React, { useEffect } from "react";
import styles from "./StyleSheet.module.scss";
import useStore from "../../store/headerStore";

const StyleSheet = () => {
  const { setHeaderText } = useStore();

  useEffect(() => {
    setHeaderText("StyleSheet");
  }, []);

  return (
    <div className={styles.body}>
      <Header />
      StyleSheet페이지
    </div>
  );
};

export default StyleSheet;
