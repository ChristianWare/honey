import styles from "./NavLogo.module.css";
import { Link } from "next-view-transitions";
import Bee from "../../../../public/icons/bee.svg";

interface NavProps {
  color?: string;
  size?: string;
  iconSize?: string;
}

const NavLogo = ({ color = "", size = "", iconSize = "" }: NavProps) => {
  return (
    <Link
      href='/'
      className={`${styles.logo} ${styles[color]} ${styles[size]}`}
    >
      <span className={styles.span}>Golden Drips</span>
      <Bee className={`${styles.icon} ${styles[iconSize]}`} />
    </Link>
  );
};
export default NavLogo;
