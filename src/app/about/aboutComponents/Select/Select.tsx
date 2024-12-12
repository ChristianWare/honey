import LayoutWrapper from "@/components/LayoutWrapper";
import styles from "./Select.module.css";
import Image from "next/image";
import SelectImg from "../../../../../public/images/select.jpg";

const data = [
  {
    id: 1,
    title: "Partnering with Producers",
    copy: "We work with passionate beekeepers who share our commitment to ethical and sustainable practices.",
  },
  {
    id: 2,
    title: "Authenticity Guaranteed",
    copy: "All our honey is 100% real, free from additives, and packed with natural goodness.",
  },
  {
    id: 3,
    title: "Flavorful Variety",
    copy: "From rich, dark buckwheat honey to light, floral clover honey, our selection showcases the unique flavors of different regions and flowers.",
  },
];

const Select = () => {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.left}>
            <h2 className={styles.heading}>How We Select Our Honey</h2>
            <p className={styles.copyii}>
              Every jar of honey on we have selected is carefully curated with a
              focus on quality, sustainability, and authenticity.
            </p>
            <div className={styles.mapContainer}>
              {data.map((x) => (
                <div key={x.id} className={styles.card}>
                  <h3 className={styles.title}>{x.title}</h3>
                  <p className={styles.copy}>{x.copy}</p>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.imgContainer}>
              <Image src={SelectImg} alt='' fill className={styles.img} />
            </div>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default Select;
