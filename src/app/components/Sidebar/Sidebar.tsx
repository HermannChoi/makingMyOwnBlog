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
import { FaAngleRight } from "react-icons/fa";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className={styles.sidebar_space}>
      <Profile />
      <div className={styles.sidebar_inner}>
        <div className={styles.root}>ROOT(0)</div>
        <div className={styles.st_menu}>
          <div className={styles.st_name}> ...Programming</div>
          <div className={styles.nd_menu}>
            <Link href="/category/MarkUp" className={styles.nd_name_space}>
              <Image src={markup} alt="" className={styles.icons} />
              <span>Mark Up</span>
            </Link>
            <Link href="/category/MarkUp/HTML" className={styles.rd_name_space}>
              <FaAngleRight />
              <Image src={html} alt="" className={styles.icons2} />
              <span>HTML</span>
            </Link>
            <Link
              href="/category/MarkUp/MarkDown"
              className={styles.rd_name_space}
            >
              <FaAngleRight />
              <Image src={markdown} alt="" className={styles.icons2} />
              <span>MarkDown</span>
            </Link>
          </div>
          <div className={styles.nd_menu}>
            <Link href="/category/StyleSheet" className={styles.nd_name_space}>
              <Image src={palette} alt="" className={styles.icons} />
              <span>Style Sheet</span>
            </Link>
            <Link
              href="/category/StyleSheet/CSS"
              className={styles.rd_name_space}
            >
              <FaAngleRight />
              <Image src={css} alt="" className={styles.icons2} />
              <span>CSS</span>
            </Link>
            <Link
              href="/category/StyleSheet/SCSS"
              className={styles.rd_name_space}
            >
              <FaAngleRight />
              <Image src={sass} alt="" className={styles.icons2} />
              <span>SCSS</span>
            </Link>
          </div>
          <div className={styles.nd_menu}>
            <Link href="/category/Language" className={styles.nd_name_space}>
              <Image src={language} alt="" className={styles.icons} />
              <span>Language</span>
            </Link>
            <Link
              href="/category/Language/JavaScript"
              className={styles.rd_name_space}
            >
              <FaAngleRight />
              <Image src={js} alt="" className={styles.icons2} />
              <span>JavaScript</span>
            </Link>
            <Link
              href="/category/Language/TypeScript"
              className={styles.rd_name_space}
            >
              <FaAngleRight />
              <Image src={ts} alt="" className={styles.icons2} />
              <span>TypeScript</span>
            </Link>
          </div>
          <div className={styles.nd_menu}>
            {" "}
            <Link href="/category/Library" className={styles.nd_name_space}>
              <Image src={library} alt="" className={styles.icons} />
              <span>Library</span>
            </Link>
          </div>
        </div>
        <div className={styles.st_menu}>
          <div className={styles.st_name}> ...Framework</div>
          <div className={styles.nd_menu}>
            <Link href="/category/Nodejs" className={styles.nd_name_space}>
              <Image src={nodejs} alt="" className={styles.icons} />
              <span>Node.js</span>
            </Link>
            <Link href="/category/Nextjs" className={styles.nd_name_space}>
              <Image src={nextjs} alt="" className={styles.icons} />
              <span>Next.js</span>
            </Link>
            <Link href="/category/Spring" className={styles.nd_name_space}>
              <Image src={spring} alt="" className={styles.icons} />
              <span>Spring</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
