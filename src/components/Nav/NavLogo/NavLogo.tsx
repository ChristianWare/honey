import styles from "./NavLogo.module.css";
import Link from "next/link";
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
      Golden Drips
      <Bee className={`${styles.icon} ${styles[iconSize]}`} />
    </Link>
  );
};
export default NavLogo;
