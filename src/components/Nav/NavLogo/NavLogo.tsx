import styles from "./NavLogo.module.css";
import Link from "next/link";
import Bee from "../../../../public/icons/bee.svg";

interface NavProps {
  color?: string;
}

const NavLogo = ({ color = "" }: NavProps) => {
  return (
    <Link href='/' className={`${styles.logo} ${styles[color]}`}>
      Honey
      <Bee className={styles.icon} />
    </Link>
  );
};
export default NavLogo;
