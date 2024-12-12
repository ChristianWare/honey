import { StaticImageData } from "next/image";
import styles from "./PageIntro.module.css";
import Image from "next/image";
import LayoutWrapper from "../LayoutWrapper";
import Nav from "../Nav/Nav";

interface Props {
  text: string | null | undefined;
  copy?: string;
  src?: StaticImageData | string;
}

const PageIntro = ({ text, copy, src = "" }: Props) => {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.imgOverlay}></div>
        <div className={styles.navContainer}>
          <Nav />
        </div>
        <Image src={src} alt='image' title='image' fill className={styles.img} priority />
        <div className={styles.content}>
          <div className={styles.actualContent}>
            <h1 className={styles.heading}>{text} </h1>
            <p className={styles.copy}>{copy}</p>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default PageIntro;
