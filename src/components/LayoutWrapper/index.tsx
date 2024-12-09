"use client";

import ContentPadding from "../ContentPadding/ContentPadding";
import styles from "./LayoutWrapper.module.css";

interface Props {
  color?: string;
  children: React.ReactNode;
}

const LayoutWrapper = ({ children, color = "" }: Props) => {
  return (
    <div
      // initial={{ y: -100, opacity: 0 }}
      // animate={{ y: 0, opacity: 1 }}
      className={`${styles.layout} ${styles[color]}`}
    >
      <ContentPadding>{children}</ContentPadding>
    </div>
  );
};
export default LayoutWrapper;
