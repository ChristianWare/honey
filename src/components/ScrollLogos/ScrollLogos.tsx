import styles from "./ScrollLogos.module.css";
import Enroll from "../../../public/icons/enroll-bee.svg";
import Guardian from "../../../public/icons/guardian-bee-apparel.svg";
import Kreditbee from "../../../public/icons/kreditbee.svg";
import Beeline from "../../../public/icons/beeline.svg";
import Beergembira from "../../../public/icons/beergembira.svg";
import Beeper from "../../../public/icons/beeper.svg";
import Beebom from "../../../public/icons/beebom.svg";
import Beetween from "../../../public/icons/beetween.svg";

const data = [
  {
    id: 1,
    src: <Enroll className={styles.icon} />,
  },
  {
    id: 2,
    src: <Guardian className={styles.icon} />,
  },
  {
    id: 3,
    src: <Kreditbee className={styles.icon} />,
  },
  {
    id: 4,
    src: <Beeline className={styles.icon} />,
  },
  {
    id: 5,
    src: <Beergembira className={styles.icon} />,
  },
  {
    id: 6,
    src: <Beeper className={styles.icon} />,
  },
  {
    id: 7,
    src: <Beebom className={styles.icon} />,
  },
  {
    id: 8,
    src: <Beetween className={styles.icon} />,
  },
];

const ScrollLogos = () => {
  return (
    <section className={styles.container}>
      {" "}
      <div className={styles.slider}>
        <div className={styles.track}>
          {[...Array(50)].map((_, index) => (
            <div key={index} className={styles.text}>
              {data.map((x) => (
                <div key={x.id} className={styles.logoContainer}>
                  {x.src}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default ScrollLogos;
