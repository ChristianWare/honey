import styles from "./Nav.module.css";
import NavLogo from "./NavLogo/NavLogo";
import NavLinks from "./NavLinks/NavLinks";
import NavIcons from "./NavIcons/NavIcons";

interface NavProps {
  color?: string;
}

export default async function Nav({ color = "" }: NavProps) {
  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <div className={styles.one}>
          <NavLinks color={color} />
        </div>
        {/* <div className={styles.right}> */}
        <div className={styles.two}>
          <NavLogo color={color} />
        </div>
        <div className={styles.three}>
          <NavIcons color={color} />
        </div>
      </div>
      {/* </div> */}
    </header>
  );
}
