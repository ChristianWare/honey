/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import { useState, useEffect } from "react";
import styles from "./Nav.module.css";
import NavLogo from "./NavLogo/NavLogo";
import NavLinks from "./NavLinks/NavLinks";
import NavIcons from "./NavIcons/NavIcons";

interface NavProps {
  color?: string;
}

export default function Nav({ color = "" }: NavProps) {
  const [isVisible, setIsVisible] = useState(true);
  let lastScrollY = 0;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        // Scrolling down
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }
      lastScrollY = currentScrollY > 0 ? currentScrollY : 0; // Prevent negative scroll
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${!isVisible ? styles.hidden : ""}`}>
      <NavLogo color={color} />
      <div className={styles.right}>
        <NavLinks color={color} />
        {/* <NavIcons color={color} /> */}
      </div>
    </header>
  );
}
