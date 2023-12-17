"use client";

import Header from "@/app/components/Header/Header";
import React, { useEffect } from "react";
import styles from "./TypeScript.module.scss";
import useStore from "../../../store/headerStore";

const TypeScript = () => {
  const { setHeaderText } = useStore();

  useEffect(() => {
    setHeaderText("TypeScript");
  }, []);

  return (
    <div className={styles.body}>
      <Header />
      TypeScript페이지
    </div>
  );
};

export default TypeScript;
