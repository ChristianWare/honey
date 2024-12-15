import styles from "./layout.module.css";
import Footer from "@/components/Footer/Footer";
import NewFaq from "@/components/NewFaq/NewFaq";
import ContactSection from "@/components/ContactSection/ContactSection";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
  // pathname?: string;
}) {
  return (
    <div className={styles.container}>
      {children}
      <NewFaq />
      <ContactSection />
      <Footer />
    </div>
  );
}
