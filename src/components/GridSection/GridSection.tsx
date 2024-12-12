import Image from "next/image";
import LayoutWrapper from "../LayoutWrapper";
import styles from "./GridSection.module.css";
import Link from "next/link";
import Img1 from "../../../public/images/unlock1.jpg";
import Img2 from "../../../public/images/unlock2.jpg";
import Img3 from "../../../public/images/unlock3.jpg";
import GridSectionInfo from "../GridSectionInfo/GridSectionInfo";

const GridSection = () => {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.top}>
            <h2 className={styles.heading}>
              Founded by honey enthusiasts, we know the latest buzz from the
              biggest beehives.
            </h2>
          </div>
          <div className={styles.bottom}>
            <div className={styles.boxContainer}>
              <div className={styles.topContainer}>
                <div className={styles.blend}>
                  <h3 className={styles.headingii}>About Us</h3>
                  <p className={styles.copyii}>
                    ~ Learn more about our history here ~
                  </p>
                </div>
              </div>
              <div className={styles.box1}>
                <Image
                  src={Img1}
                  alt='Nacho fries'
                  layout='fill'
                  objectFit='cover'
                  className={styles.img}
                />
              </div>
              <div className={styles.box2}>
                <Image
                  src={Img3}
                  alt='drone image 2'
                  layout='fill'
                  objectFit='cover'
                  className={styles.img}
                />
              </div>
              <div className={styles.box3}>
                <h5 className={styles.wickenburg}>Manuka Honey</h5>
              </div>

              <div className={styles.box4}>
                <h5 className={styles.quintero}>Whipped Honey</h5>
              </div>

              <div className={styles.box5}>
                <Image
                  src={Img1}
                  alt='drone image 3'
                  layout='fill'
                  objectFit='cover'
                  className={styles.img}
                />
              </div>
            </div>
            <div className={styles.boxContainer2}>
              <div className={styles.box1B}>
                <Image
                  src={Img2}
                  alt='drone image 4'
                  layout='fill'
                  objectFit='cover'
                  className={styles.img}
                />
              </div>
              <div className={styles.box2B}>
                <h5 className={styles.boulders}>Pollen</h5>
              </div>
              <div className={styles.box3B}>
                <h5 className={styles.wekopa}>Beeswax</h5>
              </div>
              <div className={styles.box4B}>
                <h5 className={styles.troon}>Nectar</h5>
              </div>
              <div className={styles.box5B}>
                <Image
                  src={Img3}
                  alt='drone image 6'
                  layout='fill'
                  objectFit='cover'
                  className={styles.img}
                />
              </div>
            </div>
          </div>
        </div>
        <GridSectionInfo />
      </LayoutWrapper>
    </section>
  );
};
export default GridSection;
