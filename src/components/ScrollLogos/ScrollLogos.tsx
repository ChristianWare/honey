import styles from "./ScrollLogos.module.css";
import Apple from "../../../public/icons/apple.svg";
import Bitbucket from "../../../public/icons/bitbucket.svg";
import Codeiepie from "../../../public/icons/codiepie.svg";
import Hooli from "../../../public/icons/hooli.svg";
import Inkscape from "../../../public/icons/inkscape.svg";
import Keybase from "../../../public/icons/keybase.svg";
import Protools from "../../../public/icons/protools.svg";
import Pwa from "../../../public/icons/pwa.svg";
import Rackext from "../../../public/icons/rackext.svg";
import Raspberry from "../../../public/icons/raspberry.svg";
import Reason from "../../../public/icons/reason.svg";
import Rewire from "../../../public/icons/rewire.svg";
import Valorant from "../../../public/icons/valorant.svg";

const data = [
  {
    id: 1,
    src: <Apple className={styles.icon} />,
  },
  {
    id: 2,
    src: <Bitbucket className={styles.icon} />,
  },
  {
    id: 3,
    src: <Codeiepie className={styles.icon} />,
  },
  {
    id: 4,
    src: <Hooli className={styles.icon} />,
  },
  {
    id: 5,
    src: <Inkscape className={styles.icon} />,
  },
  {
    id: 6,
    src: <Keybase className={styles.icon} />,
  },
  {
    id: 7,
    src: <Protools className={styles.icon} />,
  },
  {
    id: 8,
    src: <Pwa className={styles.icon} />,
  },
  {
    id: 9,
    src: <Rackext className={styles.icon} />,
  },
  {
    id: 10,
    src: <Raspberry className={styles.icon} />,
  },
  {
    id: 11,
    src: <Reason className={styles.icon} />,
  },
  {
    id: 12,
    src: <Rewire className={styles.icon} />,
  },
  {
    id: 12,
    src: <Valorant className={styles.icon} />,
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
