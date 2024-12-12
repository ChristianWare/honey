import LayoutWrapper from "@/components/LayoutWrapper";
import styles from "./PostAboutHero.module.css";

const PostAboutHero = () => {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.top}>
            <h2 className={styles.heading}>
              We offer only the top notch honey, at the best value, along with
              honey products made to fit seamlessly into your pantry.
            </h2>
          </div>
          <div className={styles.bottom}>
            <p className={styles.copy}>
              Our flagship line features 23+ honeys sourced
              from American beekeepers, each one with a unique local taste of
              where it’s harvested, whether that’s Florida orange groves or
              Maine blueberry fields.
            </p>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default PostAboutHero;
