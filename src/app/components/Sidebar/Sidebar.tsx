import React from "react";
import styles from "./Sidebar.module.scss";
import Profile from "./Profile/Profile";
import Image from "next/image";
import markup from "/public/images/markup.svg";
import html from "/public/images/html.svg";
import markdown from "/public/images/markdown.svg";
import palette from "/public/images/palette.svg";
import css from "/public/images/css.svg";
import sass from "/public/images/sass.svg";
import language from "/public/images/language.svg";
import js from "/public/images/js.svg";
import ts from "/public/images/ts.svg";
import library from "/public/images/library.svg";
import nodejs from "/public/images/nodejs.svg";
import nextjs from "/public/images/nextjs.svg";
import spring from "/public/images/language.svg";

const Sidebar = () => {
  return (
    <div className={styles.sidebar_space}>
      <Profile />
      <div className={styles.sidebar_inner}>
        <div className={styles.root}>ROOT(0)</div>
        <div className={styles.st_menu}>
          <div className={styles.st_name}> ...Programming</div>
          <div className={styles.nd_menu}>
            <div className={styles.nd_name_space}>
              <Image src={markup} alt="mu" className={styles.icons} />
              <span>Mark Up</span>
            </div>
            <div className={styles.rd_menu}>
              <div className={styles.rd_name_space}>
                <span> {`>`} </span>
                <Image src={html} alt="html" className={styles.icons2} />
                <span>HTML</span>
              </div>
            </div>
            <div className={styles.rd_menu}>
              <div className={styles.rd_name_space}>
                <span> {`>`} </span>
                <Image src={markdown} alt="html" className={styles.icons2} />
                <span>MarkDown</span>
              </div>
            </div>
          </div>
          <div className={styles.nd_menu}>
            <div className={styles.nd_name_space}>
              <Image src={palette} alt="mu" className={styles.icons} />
              <span>Style Sheet</span>
            </div>
            <div className={styles.rd_menu}>
              <div className={styles.rd_name_space}>
                <span> {`>`} </span>
                <Image src={css} alt="html" className={styles.icons2} />
                <span>CSS</span>
              </div>
            </div>
            <div className={styles.rd_menu}>
              <div className={styles.rd_name_space}>
                <span> {`>`} </span>
                <Image src={sass} alt="html" className={styles.icons2} />
                <span>SCSS</span>
              </div>
            </div>
          </div>
          <div className={styles.nd_menu}>
            {" "}
            <div className={styles.nd_name_space}>
              <Image src={language} alt="mu" className={styles.icons} />
              <span>Language</span>
            </div>
            <div className={styles.rd_menu}>
              <div className={styles.rd_name_space}>
                <span> {`>`} </span>
                <Image src={js} alt="html" className={styles.icons2} />
                <span>JavaScript</span>
              </div>
            </div>
            <div className={styles.rd_menu}>
              <div className={styles.rd_name_space}>
                <span> {`>`} </span>
                <Image src={ts} alt="html" className={styles.icons2} />
                <span>TypeScript</span>
              </div>
            </div>
          </div>
          <div className={styles.nd_menu}>
            {" "}
            <div className={styles.nd_menu}>
              {" "}
              <div className={styles.nd_name_space}>
                <Image src={library} alt="mu" className={styles.icons} />
                <span>Library</span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.st_menu}>
          <div className={styles.st_name}> ...Framework</div>
          <div className={styles.nd_menu}>
            <div className={styles.nd_name_space}>
              <Image src={nodejs} alt="mu" className={styles.icons} />
              <span>Node.js</span>
            </div>
            <div className={styles.nd_name_space}>
              <Image src={nextjs} alt="mu" className={styles.icons} />
              <span>Next.js</span>
            </div>
            <div className={styles.nd_name_space}>
              <Image src={spring} alt="mu" className={styles.icons} />
              <span>Spring</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
