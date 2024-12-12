import LayoutWrapper from "@/components/LayoutWrapper";
import styles from "./Spotlight.module.css";
import Quote from "../../../../../public/icons/quote.svg";

const Spotlight = () => {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.iconContainer}>
            <Quote className={styles.icon} />
          </div>
          <h2 className={styles.heading}>
            Every jar of honey on our platform is carefully curated with a focus
            on quality, sustainability, and authenticity.
          </h2>
          <div className={styles.nameContainer}>
            <p className={styles.name}>BRAD HALLIN</p>
            <p className={styles.title}>
              MEMBERSHIP & TECHNICAL DIRECTOR AT USA BMX
            </p>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default Spotlight;
