import Image from "next/image";
import LayoutWrapper from "../LayoutWrapper";
import styles from "./GridSection.module.css";
import Link from "next/link";
import Img1 from "../../../public/images/unlock1.jpg";

const GridSection = () => {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.top}>
            <h2 className={styles.heading}>
              Founded by outdoor enthusiasts, we know the active space.
            </h2>
          </div>
          <div className={styles.bottom}>
            <div className={styles.boxContainer}>
              <div className={styles.topContainer}>
                <div className={styles.blend}>
                  <h3 className={styles.headingii}>Our Golf Courses</h3>
                  <p className={styles.copyii}>~ Courses We Partner With ~</p>
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
                  src={Img1}
                  alt='drone image 2'
                  layout='fill'
                  objectFit='cover'
                  className={styles.img}
                />
              </div>
              <Link href='/' className={styles.box3}>
                <h5 className={styles.wickenburg}>Wickenburg</h5>
              </Link>

              <Link href='/' className={styles.box4}>
                <h5 className={styles.quintero}>Quintero</h5>
              </Link>

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
                  src={Img1}
                  alt='drone image 4'
                  layout='fill'
                  objectFit='cover'
                  className={styles.img}
                />
              </div>
              <Link href='/' className={styles.box2B}>
                <h5 className={styles.boulders}>Boulders</h5>
              </Link>
              <Link href='/' className={styles.box3B}>
                <h5 className={styles.wekopa}>We-Ko-Pa</h5>
              </Link>
              <Link href='/' className={styles.box4B}>
                <h5 className={styles.troon}>Troon</h5>
              </Link>
              <div className={styles.box5B}>
                <Image
                  src={Img1}
                  alt='drone image 6'
                  layout='fill'
                  objectFit='cover'
                  className={styles.img}
                />
              </div>
            </div>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default GridSection;
