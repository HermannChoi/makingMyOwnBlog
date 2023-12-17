import Image from "next/image";
import styles from "./page.module.scss";
import Header from "./components/Header/Header";

export default function Home() {
  return (
    <>
      <div className={styles.body}>
        <Header />
        메인페이지
      </div>
    </>
  );
}
