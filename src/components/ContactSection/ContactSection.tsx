import LayoutWrapper from "../LayoutWrapper";
import styles from "./ContactSection.module.css";

const ContactSection = () => {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <h2 className={styles.heading}>Ready to get Started?</h2>
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default ContactSection;
