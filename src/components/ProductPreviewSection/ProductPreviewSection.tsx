import LayoutWrapper from "../LayoutWrapper";
import styles from "./ProductPreviewSection.module.css";
import Arrow from "../../../public/icons/leftArrow.svg";
import Button from "../Button/Button";
import Image from "next/image";
import Img1 from "../../../public/images/productPreview.webp";
import CollapsibleSection from "../CollapsibleSection/CollapsibleSection";

const data = [
  {
    id: 1,
    title: "Simple, flexible integrations",
    copy: "With options optimized for your business needs and level of expertise",
  },
  {
    id: 2,
    title: "100% digital claim filing",
    copy: "Hassle free claims make for happier customers",
  },
  {
    id: 3,
    title: "Streamlined operations",
    copy: "From accounting to customer service–we save you time and resources",
  },
];

const ProductPreviewSection = () => {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.top}>
            <h2 className={styles.heading}>
              Easy to get started and even easier to keep running.
            </h2>
            <div className={styles.dataContainer}>
              {data.map((x) => (
                <div key={x.id} className={styles.card}>
                  <div className={styles.cardTop}>
                    <Arrow className={styles.icon} />
                    <div className={styles.title}>{x.title}</div>
                  </div>
                  <p className={styles.copy}>{x.copy}</p>
                </div>
              ))}
            </div>
            <div className={styles.btnContainer}>
              <Button href='/shop' text='Shop Studio Elite' btnType='yellow' />
            </div>{" "}
          </div>
          <div className={styles.bottom}>
            <div className={styles.bottomLeft}>
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
            <div className={styles.bottomRight}>
              <h3 className={styles.productHeading}>Glass Filled W/ Honey</h3>
              <p className={styles.price}>$25.95</p>
              <p className={styles.details}>
                Famous for world-class honey, Bee Company nurtures thriving
                colonies of honeybees – and partners with beekeepers around the
                globe to bring you local specialties like this raw honeycomb
                from Hungary. It features deliciously chewy pockets of natural
                beeswax filled with sweet, golden acacia honey. A classic
                addition to artisanal cheese platters and charcuterie boards,
                the honeycomb is also wonderful with everything from biscuits
                and muffins to yogurt and ice cream.
              </p>
              <div className={styles.collapsibleSection}>
                <CollapsibleSection
                  title='Warranty'
                  content='Your investment in CHUXLY headphones is backed by our unwavering commitment to quality. Every purchase comes with a 90-day warranty, ensuring your audio journey is supported with peace of mind.'
                />
                <CollapsibleSection
                  title='Shipping & delivery'
                  content='Our global shipping network ensures that no matter where you are, your headphones will arrive at your doorstep with swift efficiency. All orders ship next business day.'
                />
                <CollapsibleSection
                  title='Support'
                  content='Download the CHUXLY app now – available on Google Play and the Apple Store. For technical support, please visit our Support page.'
                />
              </div>
              <div className={styles.btnContainerii}>
                <Button
                  href='/shop'
                  text='Shop Studio Elite'
                  btnType='teal'
                />
              </div>{" "}
            </div>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default ProductPreviewSection;
