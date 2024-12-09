import LayoutWrapper from "../LayoutWrapper";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <h1 className={styles.heading}>Insurance</h1>
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default Hero;
