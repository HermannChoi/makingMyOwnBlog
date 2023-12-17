"use client";

import Header from "@/app/components/Header/Header";
import React, { useEffect } from "react";
import styles from "./Nodejs.module.scss";
import useStore from "../../store/headerStore";

const Nodejs = () => {
  const { setHeaderText } = useStore();

  useEffect(() => {
    setHeaderText("Nodejs");
  }, []);

  return (
    <div className={styles.body}>
      <Header />
      Nodejs페이지
    </div>
  );
};

export default Nodejs;
