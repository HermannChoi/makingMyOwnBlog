"use client";

import React, { useState } from "react";
import styles from "./Profile.module.scss";
import Image from "next/image";
import img from "/public/images/IMG_1.jpg";
import Link from "next/link";

const Profile = () => {
  const [materialIcons, setMaterialIcons] = useState(
    "material-symbols-outlined"
  );
  const changeMaterial = () => {};

  return (
    <div className={styles.profile_space}>
      <div className={styles.image_container}>
        <Image className={styles.img} src={img} alt="profile_pic" />
      </div>
      <div className={styles.myName}>Hermann Choi</div>
      <div className={styles.description}>
        A sprout with lots of photosynthesis
      </div>
      <div className={styles.button_space}>
        <div className={styles.btnEach_space}>
          <Link
            href="/"
            className={`${styles.home} ${styles.icons} material-symbols-outlined`}
          >
            house
          </Link>
        </div>
        <div className={styles.btnEach_space}>
          <div
            className={`${styles.search} ${styles.icons} material-symbols-outlined`}
          >
            search
          </div>
        </div>
        <div className={styles.btnEach_space}>
          <Link
            href="/category/Guestbook"
            className={`${styles.guestbook} ${styles.icons} material-symbols-outlined`}
          >
            book
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Profile;
