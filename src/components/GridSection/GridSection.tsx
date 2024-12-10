import LayoutWrapper from "../LayoutWrapper";
import styles from "./GridSection.module.css";

const GridSection = () => {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.top}>
            <h2 className={styles.heading}>
              Founded by outdoor enthusiasts, we know the active space.
            </h2>
          </div>
          <div className={styles.bottom}></div>
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default GridSection;
