"use client";
import React, { useEffect } from "react";
import styles from "./Guestbook.module.scss";
import Header from "@/app/components/Header/Header";
import useStore from "../../store/headerStore";

const Guestbook = () => {
  const { setHeaderText } = useStore();

  useEffect(() => {
    setHeaderText("Guestbook");
  }, []);

  return (
    <div className={styles.body}>
      <Header /> Guestbook
    </div>
  );
};

export default Guestbook;
