import LayoutWrapper from "../LayoutWrapper";
import styles from "./Unlock.module.css";
import Image from "next/image";
import Unlock1 from "../../../public/images/unlock1.jpg";
import Unlock2 from "../../../public/images/unlock2.jpg";
import Unlock3 from "../../../public/images/unlock3.jpg";
import Button from "../Button/Button";

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
            <h2 className={styles.heading}>
              Unlock new earnings and retain revenue.
            </h2>
            <h3 className={styles.title}>Injury Insurance</h3>
            <p className={styles.copy}>
              Give your customers the confidence of covered medical expenses.
              Works with passes, tickets or memberships where your customers may
              be at increased risk of getting hurt.
            </p>
            <div className={styles.btnContainer}>
              <Button href='/shop' text='Explore more' btnType='yellow' arrow />
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
    </section>
  );
};
export default Unlock;
