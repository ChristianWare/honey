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
    title: "A Bee's Knees: Simple Honey Solutions",
    copy: "Tailored options for every honey business, from small-scale to large-scale operations.",
  },
  {
    id: 2,
    title: "Sweeten Your Workflow with Digital Honey Tracking",
    copy: "Effortless inventory management and traceability for your honey products.",
  },
  {
    id: 3,
    title: "Buzzing Efficiency: Streamlined Honey Operations",
    copy: "From hive to honey pot, we streamline your processes for maximum efficiency.",
  },
];

const ProductPreviewSection = () => {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.top}>
            <h2 className={styles.heading}>
              Pure and Simple <br /> Honey the Natural Way.{" "}
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
                  content='Your investment in our honey is backed by our commitment to quality. Every jar is guaranteed to be pure and delicious.'
                />
                <CollapsibleSection
                  title='Shipping & delivery'
                  content='We ship our honey worldwide, ensuring it reaches your doorstep fresh and ready to enjoy. All orders are processed promptly.'
                />
                <CollapsibleSection
                  title='Support'
                  content="For any questions or concerns, please contact our customer support team. We're always here to help."
                />
              </div>
              <div className={styles.btnContainerii}>
                <Button href='/shop' text='More Details' btnType='teal' />
              </div>{" "}
            </div>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default ProductPreviewSection;
