import React from "react";
import styles from "./Sidebar.module.scss";
import Profile from "./Profile/Profile";

const Sidebar = () => {
  return (
    <div className={styles.sidebar_space}>
      <Profile />
      <div className={styles.sidebar_inner}>
        <div className={styles.root}>ROOT(0)</div>
        <div className={styles.programming}>
          ...Programming
          <div className={styles.in_programming}>Mark Up</div>
          <div className={styles.in_programming}>Style Sheet</div>
          <div className={styles.in_programming}>Language</div>
          <div className={styles.in_programming}>Library</div>
        </div>
        <div className={styles.framework}>
          ...Framework
          <div className={styles.in_framework}>Node.js</div>
          <div className={styles.in_framework}>Next.js</div>
          <div className={styles.in_framework}>Spring</div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
