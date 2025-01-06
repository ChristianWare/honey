import LayoutWrapper from "../LayoutWrapper";
import styles from "./Unlock.module.css";
import Image from "next/image";
import Unlock1 from "../../../public/images/honeyCat.jpg";
import Unlock2 from "../../../public/images/monoCat.jpg";
import Unlock3 from "../../../public/images/whippedCat.jpg";
import Button from "../Button/Button";
import ScrollHorizontalText from "../ScrollHorizontalText/ScrollHorizontalText";
import { Link } from "next-view-transitions";

const data = [
  {
    id: 1,
    src: Unlock1,
    href: "/collections/honeycomb",
    title: " Honey Comb",
  },
  {
    id: 2,
    src: Unlock2,
    href: "/collections/monofloral-honeys",
    title: "Monofloral Honeys",
  },
  {
    id: 3,
    src: Unlock3,
    href: "/collections/whipped-honey",
    title: "Whipped Honey",
  },
];

const Unlock = () => {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.left}>
            <h2 className={styles.heading}>Unlock the Sweetness of Nature</h2>
            <p className={styles.copy}>
              Discover a world of flavor with our three unique honey varieties.
              Each jar offers a taste of nature&apos;s sweetness, from the bold,
              floral notes of Wildflower Honey to the delicate sweetness of
              Clover Honey and the bright citrusy flavor of Orange Blossom
              Honey.
            </p>
            <div className={styles.btnContainer}>
              <Button
                href='/collections'
                text='See All Categories'
                btnType='yellow'
                arrow
              />
            </div>
          </div>
          <div className={styles.right}>
            {data.map((x) => (
              <Link href={x.href} key={x.id} className={styles.link}>
                <div className={styles.imgContainer}>
                  <div className={styles.imgOverlay}></div>
                  <Image
                    src={x.src}
                    alt='image'
                    title='image'
                    fill
                    className={styles.img}
                  />
                  <p className={styles.text}>{x.title}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </LayoutWrapper>
      <ScrollHorizontalText text='Unlocking the Power of Honey One Jar at a Time' />
    </section>
  );
};
export default Unlock;
