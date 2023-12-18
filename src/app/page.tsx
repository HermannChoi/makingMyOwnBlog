import Image from "next/image";
import styles from "./page.module.scss";
import Header from "./components/Header/Header";

export default function Home() {
  return (
    <>
      <div className={styles.body}>
        <Header />
        <div className={styles.inner}>
          헤르만의 개발 블로그에 오신 것을 환영합니다.
        </div>
      </div>
    </>
  );
}
