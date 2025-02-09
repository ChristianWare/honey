import LayoutWrapper from "../LayoutWrapper";
import ScrollHorizontalText from "../ScrollHorizontalText/ScrollHorizontalText";
import styles from "./PostHero.module.css";

const PostHero = () => {
  return (
    <section className={styles.container}>
      <ScrollHorizontalText text='HONEY DESIGNED FOR YOUR WELLNESS' />{" "}
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.left}>
            Do you want access to the best natural honey you can buy? Well
            you&apos;ve come to the right place.
          </div>
          <div className={styles.right}>
            <h2 className={styles.heading}>
              We offer only the top notch honey, at the best value, along with
              honey products made to fit seamlessly into your pantry.
            </h2>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default PostHero;
