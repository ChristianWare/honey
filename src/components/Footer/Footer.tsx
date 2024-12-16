import ContentPadding from "../ContentPadding/ContentPadding";
import NavLogo from "../Nav/NavLogo/NavLogo";
import TopNav from "../TopNav/TopNav";
import styles from "./Footer.module.css";

const footerData = [
  {
    id: 1,
    heading: "Company",
    headingItems: [
      {
        id: 1.1,
        item: "About",
      },
      {
        id: 1.2,
        item: "Our Mission",
      },
      {
        id: 1.3,
        item: "Our Vision",
      },
    ],
  },
  {
    id: 2,
    heading: "Categories",
    headingItems: [
      {
        id: 2.1,
        item: "Whipped Honey",
      },
      {
        id: 2.2,
        item: "Monofloral Honey",
      },
      {
        id: 2.3,
        item: "Honeycomb",
      },
    ],
  },
  {
    id: 3,
    heading: "Resources",
    headingItems: [
      {
        id: 3.1,
        item: "How it works",
      },
      {
        id: 3.2,
        item: "Bee Docs",
      },
      {
        id: 3.3,
        item: "Help Center",
      },
    ],
  },
  {
    id: 4,
    heading: "Legal",
    headingItems: [
      {
        id: 4.1,
        item: "Privacy Policy",
      },
      {
        id: 4.2,
        item: "Terms of Service",
      },
    ],
  },
];

const Footer = () => {
  return (
    <footer className={styles.container}>
      <ContentPadding>
        <div className={styles.top}>
          <div className={styles.topLeft}>
            <NavLogo size='large' iconSize='largeIcon' />
          </div>
          <div className={styles.topRight}>
            Golden drips of natural delight.
          </div>
        </div>
        <div className={styles.middle}>
          {footerData.map((x) => (
            <div key={x.id} className={styles.section}>
              <h3 className={styles.heading}>{x.heading}</h3>
              <ul className={styles.itemList}>
                {x.headingItems.map((y) => (
                  <li key={y.id} className={styles.item}>
                    {y.item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <TopNav />
          </div>
        </div>
        <div className={styles.bottom}>
          <p className={styles.disclosures}>
            Golden Drips, an Arizona-based company, proudly supports sustainable
            beekeeping and the local bee community. Golden Drips is a licensed
            distributor and retailer of premium honey products, crafted with
            care to deliver nature’s finest golden sweetness. For inquiries or
            more information about our products, email us at
            support@goldendrips.com. © 2025 Golden Drips Honey Co. All rights
            reserved.
          </p>
        </div>
      </ContentPadding>
    </footer>
  );
};
export default Footer;
