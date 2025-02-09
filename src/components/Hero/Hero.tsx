import styles from "./Hero.module.css";
import Image from "next/image";
import HeroImage from "../../../public/images/honey.png";
import Nav from "../Nav/Nav";
import Button from "../Button/Button";
import LayoutWrapper from "../LayoutWrapper";

const Hero = () => {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.imgOverlay}></div>
        <div className={styles.navContainer}>
          <Nav />
        </div>
        <Image
          src={HeroImage}
          alt='hero'
          title='hero'
          fill
          className={styles.img}
          priority
        />
        <div className={styles.content}>
          <div className={styles.actualContent}>
            <h1 className={styles.heading}>
              Golden drips <br /> of natural delight.{" "}
            </h1>
            <p className={styles.copy}>
              Perfectly unfiltered honey full of rich flavor. Sweetness you can
              trust in every drop.
            </p>
            <div className={styles.btnContainer}>
              <Button href='/shop' text='Shop Now' btnType='yellow' />
              <Button href='/about' text='Our Story' btnType='yellowOutline' />
            </div>
          </div>
        </div>
      </LayoutWrapper>
    </section>
    // </div>
  );
};
export default Hero;
