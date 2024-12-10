import styles from "./Hero.module.css";
import Image from "next/image";
import HeroImage from "../../../public/images/honey.png";
import Nav from "../Nav/Nav";
import Button from "../Button/Button";
// import ContentPadding from "../ContentPadding/ContentPadding";

const Hero = () => {
  return (
    <div className={styles.parent}>
      <section className={styles.container}>
        <div className={styles.imgOverlay}></div>
        <div className={styles.navContainer}>
          {/* <ContentPadding> */}
            <Nav />
          {/* </ContentPadding> */}
        </div>
        <Image
          src={HeroImage}
          alt='hero'
          fill
          className={styles.img}
          // priority
          // sizes='(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 33vw'
        />
        <div className={styles.content}>
          <div className={styles.actualContent}>
            <h1 className={styles.heading}>
              Insurance designed for life in motion.
            </h1>
            <p className={styles.copy}>
              Grow your business and enhance your customer experience with
              embedded insurance solutions made for active and travel markets.
            </p>
            <div className={styles.btnContainer}>
              <Button
                href='/shop'
                text='Shop Studio Elite'
                btnType='yellow'
                // pulse={true}
              />
            </div>
          </div>
          <div className={styles.right}></div>
        </div>
      </section>
    </div>
  );
};
export default Hero;
