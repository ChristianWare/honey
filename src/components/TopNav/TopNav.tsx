import styles from "./TopNav.module.css";
import Link from "next/link";
import Insta from "../../../public/icons/instagram.svg";
import LinkedIn from "../../../public/icons/linkedin.svg";
import Facebook from "../../../public/icons/facebook.svg";

const TopNav = () => {
  return (
    <div className={`${styles.header} topNav`} id='home'>
      {" "}
      {/* Added class topNav */}
      <div className={styles.content}>
        <div className={styles.logoContainer}>{/* <Logo /> */}</div>
        <div className={styles.leftBottom}>
          <Link
            href='https://www.linkedin.com/'
            target='_blank'
            aria-label='LinkedIn'
            className={styles.detail}
          >
            <LinkedIn className={styles.icon} />
          </Link>
          <Link
            href='https://www.facebook.com/fontsandfooters/'
            target='_blank'
            aria-label='Facebook'
            className={styles.detail}
          >
            <Facebook className={styles.icon} />
          </Link>
          <Link
            href='https://www.instagram.com/fontsandfooters/'
            target='_blank'
            aria-label='Instagram'
            className={styles.detail}
          >
            <Insta className={styles.icon} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
