import ContactForm from "../ContactForm/ContactForm";
import LayoutWrapper from "../LayoutWrapper";
import styles from "./ContactSection.module.css";

const ContactSection = () => {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <h2 className={styles.heading}>Ready to get Started?</h2>
          <div className={styles.contactForm}>
            <ContactForm />
          </div>
          <p className={styles.copy}>
            Need customer service help?{" "}
            <span className={styles.span}>click here</span>
          </p>
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default ContactSection;
