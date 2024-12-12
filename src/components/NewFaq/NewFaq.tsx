/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { FC, useState } from "react";
import LayoutWrapper from "../LayoutWrapper";
import styles from "./NewFaq.module.css";
import Plus from "../../../public/icons/plus.svg";

const faqs = [
  {
    id: 301,
    question: "What makes the honey on your marketplace unique?",
    answer:
      "We curate honey from small-scale, sustainable beekeepers who focus on quality and authenticity. Each jar of honey offers unique flavors and characteristics based on the flowers and regions where the bees forage.",
  },
  {
    id: 302,
    question: "Does the honey you sell come with any guarantees?",
    answer:
      "Yes, we stand by the quality of our honey. If you're not satisfied with your purchase, we offer a 30-day return policy for unopened jars in their original condition.",
  },
  {
    id: 303,
    question: "Is the honey raw and unfiltered?",
    answer:
      "Absolutely! We prioritize raw, unfiltered honey to preserve its natural enzymes, nutrients, and rich flavor profiles. Our producers use minimal processing to ensure you get the best quality honey.",
  },
  {
    id: 304,
    question: "What is your shipping policy?",
    answer:
      "We ship nationwide! Orders are typically processed within 2-3 business days, and we offer multiple shipping options at checkout. Free shipping is available for orders over $50.",
  },
];

const NewFaq: FC = () => {
  const [selected, setSelected] = useState(0);

  const toggle = (i: any) => {
    setSelected(i);
  };
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.top}>
            <h2 className={styles.heading}>Frequently Asked Questions</h2>
          </div>
          <div className={styles.bottom}>
            <div className={styles.bRight}>
              {faqs.slice(0, 4).map((x: any, i: number) => (
                <div
                  key={x.id}
                  className={`${styles.qaContainer} ${
                    selected === i ? styles.active : ""
                  }`}
                  onClick={() => toggle(i)}
                >
                  <div className={styles.headingArrowContainer}>
                    {selected === i ? (
                      <Plus
                        className={styles.iconFlip}
                        width={35}
                        height={35}
                      />
                    ) : (
                      <Plus className={styles.icon} width={30} height={30} />
                    )}
                    <h3 className={styles.question} lang='en'>
                      {x.question}
                    </h3>
                  </div>
                  <div
                    className={
                      selected === i
                        ? styles.answerContainer + " " + styles.show
                        : styles.answerContainer
                    }
                  >
                    <div className={styles.answerbox}>
                      <div></div>
                      <p className={styles.answer} lang='en'>
                        {x.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default NewFaq;
