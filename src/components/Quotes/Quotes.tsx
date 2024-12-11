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
                &quot;Spot’s policy offerings provide a single partner solution
                and allow us to adjust to changing product needs. Spot’s
                technical capabilities provide seamless data flows to allow for
                efficient claim management and customer service.&quot;
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
                &quot;Spot covered so many of the bills that my insurance
                wouldn’t—it’s almost too good to be true.&quot;
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
      <ScrollHorizontalText text='INSURANCE DESIGNED FOR LIFE IN MOTION' />{" "}
    </section>
  );
};
export default Quotes;
