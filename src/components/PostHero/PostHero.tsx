import LayoutWrapper from "../LayoutWrapper";
import styles from "./PostHero.module.css";

const PostHero = () => {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.left}>
            You want to improve your customer experience and the financial
            resilience of your business without additional expense and hassle.
          </div>
          <div className={styles.right}>
            <h2 className={styles.heading}>
              Offer your customers more value at point-of-sale and beyond with
              insurance products designed to fit seamlessly into your
              operations.
            </h2>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default PostHero;
