import styles from "./GridSectionInfo.module.css";

const data = [
  {
    id: 1,
    title: "Proven partnerships and expertise",
    copy: "We sell hundreds of thousands of coverages annually through partnerships with sports leagues and associations, mountain resorts and destination travel companies.",
  },
  {
    id: 2,
    title: "Benefits designed for outdoor active markets",
    copy: "Maximize appeal and adoption with targeted coverage made to meet your customers’ needs when they’re interacting with your business.",
  },
  {
    id: 3,
    title: "Brand alignment and affinity",
    copy: "Spot isn't just insurance; it's a lifestyle brand that seamlessly aligns with the essence of your business, enhancing the overall customer experience.",
  },
  {
    id: 4,
    title: "Ready-made marketing materials",
    copy: "With co-branded landing pages, emails, FAQs and ads, we help educate your customers on the value of Spot products so it’s easy to understand and easy to purchase.",
  },
];

const GridSectionInfo = () => {
  return (
    <section className={styles.container}>
      {data.map((x) => (
        <div key={x.id} className={styles.card}>
          <h3 className={styles.title}>{x.title}</h3>
          <p className={styles.copy}>{x.copy}</p>
        </div>
      ))}
    </section>
  );
};
export default GridSectionInfo;
