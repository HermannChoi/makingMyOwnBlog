import React from "react";
import styles from "./MyProfile.module.scss";
import Image from "next/image";
import img from "/public/images/IMG_1.jpg";

const MyProfile = () => {
  return (
    <div className={styles.profile_space}>
      <div className={styles.image_container}>
        <Image className={styles.img} src={img} alt="profile_pic" />
      </div>
      <div className={styles.myName}>Hermann Choi</div>
      <div className={styles.description}>
        A sprout with lots of photosynthesis
      </div>
    </div>
  );
};

export default MyProfile;
