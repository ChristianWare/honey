import LayoutWrapper from "../LayoutWrapper";
import styles from "./Unlock.module.css";
import Image from "next/image";
import Unlock1 from "../../../public/images/product1.png";
import Unlock2 from "../../../public/images/product2.png";
import Unlock3 from "../../../public/images/product3.png";
import Button from "../Button/Button";
import ScrollHorizontalText from "../ScrollHorizontalText/ScrollHorizontalText";

const data = [
  {
    id: 1,
    src: Unlock1,
  },
  {
    id: 2,
    src: Unlock2,
  },
  {
    id: 3,
    src: Unlock3,
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
              <div key={x.id} className={styles.imgContainer}>
                <Image
                  src={x.src}
                  alt='image'
                  title='image'
                  fill
                  className={styles.img}
                />
              </div>
            ))}
          </div>
        </div>
      </LayoutWrapper>
      <ScrollHorizontalText text='Unlocking the Power of Honey One Jar at a Time' />
    </section>
  );
};
export default Unlock;
