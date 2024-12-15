import LayoutWrapper from "../LayoutWrapper";
import styles from "./Quotes.module.css";
import Image from "next/image";
import Img1 from "../../../public/images/honey.png";
import Img2 from "../../../public/images/unlock3.jpg";
import ScrollHorizontalText from "../ScrollHorizontalText/ScrollHorizontalText";

const Quotes = () => {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.top}>
            <div className={styles.left}>
              <div className={styles.imgContainer}>
                <Image
                  src={Img1}
                  fill
                  alt='image'
                  title='image'
                  className={styles.img}
                />
              </div>
            </div>
            <div className={styles.right}>
              <h3 className={styles.quote}>
                &quot;This honey is absolutely divine! The rich, complex flavors
                are simply amazing. I&apos;ve never tasted anything like
                it&quot;
              </h3>
              <p className={styles.name}>Bob Stinchcomb</p>
              <p className={styles.title}>
                svp, sales at ALTERRA MOUNTAIN COMPANY
              </p>
            </div>
          </div>
          <div className={styles.bottom}>
            <div className={styles.left}>
              <div className={styles.imgContainer}>
                <Image
                  src={Img2}
                  fill
                  alt='image'
                  title='image'
                  className={styles.img}
                />
              </div>
            </div>
            <div className={styles.right}>
              <h3 className={styles.quote}>
                &quot;I&apos;ve been buying honey from this company for years
                and I&apos;m always impressed with the quality. It&apos;s the
                perfect addition to my tea, yogurt, and baking.&quot;
              </h3>
              <p className={styles.name}>elle truax</p>
              <p className={styles.title}>
                founder of Björkstam Hat Co.crested butte, colorado and Spot
                customer
              </p>
            </div>
          </div>
        </div>
      </LayoutWrapper>
      <ScrollHorizontalText text='HONEY DESIGNED FOR YOUR WELLNESS' />{" "}
    </section>
  );
};
export default Quotes;
