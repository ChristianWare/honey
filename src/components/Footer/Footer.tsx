import ContentPadding from "../ContentPadding/ContentPadding";
import NavLogo from "../Nav/NavLogo/NavLogo";
import styles from "./Footer.module.css";

const footerData = [
  {
    id: 1,
    heading: "Company",
    headingItems: [
      {
        id: 1.1,
        item: "Contact us",
      },
      {
        id: 1.2,
        item: "Careers",
      },
      {
        id: 1.3,
        item: "Journal",
      },
    ],
  },
  {
    id: 2,
    heading: "Products",
    headingItems: [
      {
        id: 2.1,
        item: "Injury Insurance",
      },
      {
        id: 2.2,
        item: "Refund Coverage",
      },
      {
        id: 2.3,
        item: "Travel Insurance",
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
        item: "Developer Docs",
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
            Insurance designed for life in motion.
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
          <div>Icons here</div>
        </div>
        <div className={styles.bottom}>
          <p className={styles.disclosures}>
            Spot Insurance 500 W 2nd St. #1900 Austin, TX 78701 is a Delaware
            Corporation. Spot Insurance Agency, Inc. is a licensed agent/broker.
            Our National Producer Number (NPN) is 18724703 and our California
            license number is 6004685. For additional license information,
            contact compliance@getspot.com © 2023 Spot Insurance Inc. All rights
            reserved.
          </p>
        </div>
      </ContentPadding>
    </footer>
  );
};
export default Footer;
