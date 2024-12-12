import { StaticImageData } from "next/image";
import styles from "./PageIntro.module.css";
import Image from "next/image";
import LayoutWrapper from "../LayoutWrapper";
import Nav from "../Nav/Nav";
import Talk from "../../../public/icons/talk.svg";
import Email from "../../../public/icons/email.svg";
import Faq from "../../../public/icons/faq.svg";
import Arrow from "../../../public/icons/leftArrow.svg";

interface Props {
  text: string | null | undefined;
  copy?: string;
  src?: StaticImageData | string;
  hours?: boolean;
}

const data = [
  {
    id: 1,
    icon: <Email className={styles.icon} />,
    title: "Email",
    copy: "hello@honeydrip.com",
  },
  {
    id: 2,
    icon: <Talk className={styles.icon} />,
    title: "Live Chat",
    copy: "Durring hours of operation",
  },
  {
    id: 3,
    icon: <Faq className={styles.icon} />,
    title: "FAQ's",
    copy: "Visit our help center",
  },
];

const PageIntro = ({ text, copy, src = "", hours }: Props) => {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.imgOverlay}></div>
        <div className={styles.navContainer}>
          <Nav />
        </div>
        <Image
          src={src}
          alt='image'
          title='image'
          fill
          className={styles.img}
          priority
        />
        <div className={styles.actualContent}>
          <h1 className={styles.heading}>{text} </h1>
          <p className={styles.copy}>{copy}</p>
          {hours && (
            <>
              <div className={styles.hoursBox}>
                <h2 className={styles.hours}>Hours of operation</h2>
                <p className={styles.date}>Monday - Friday</p>
                <p className={styles.time}>8:00 AM - 6:00PM CST</p>
              </div>
              <div className={styles.dataBox}>
                {data.map((x) => (
                  <div key={x.id} className={styles.card}>
                    <div className={styles.iconContainer}>{x.icon}</div>
                    <div className={styles.detailsArrowBox}>
                      <div className={styles.da1}>
                        <h3 className={styles.title}>{x.title}</h3>
                        <p className={styles.dataCopy}>{x.copy}</p>
                      </div>
                      <div className={styles.da2}>
                        <Arrow className={styles.arrow} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default PageIntro;
