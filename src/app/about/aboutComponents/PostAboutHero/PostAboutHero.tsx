import LayoutWrapper from "@/components/LayoutWrapper";
import styles from "./PostAboutHero.module.css";

const PostAboutHero = () => {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <h2 className={styles.heading}>
            We offer only the top notch honey, at the best value, along with
            honey products made to fit seamlessly into your pantry.
          </h2>
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default PostAboutHero;
