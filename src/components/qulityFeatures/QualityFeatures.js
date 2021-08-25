import styles from "../../theme/QulityFeatures.module.css";
import FeatureCard from "./FeatureCard";

import partnership from "../../assets/feature/partnership.js";
import performance from "../../assets/feature/performance.js";
import subscription from "../../assets/feature/subscription.js";
import support from "../../assets/feature/support.js";

const QualityFeatures = () => {
  const CONTENTS = [
    {
      id: 1,
      icon: performance,
      title: "Fast Performance",
      description:
        "Let’s just get this out of the way - there will always be a kit version of Edu flow. Paid subscriptions allow us to continue helping learners around the world.",
    },
    {
      id: 2,
      icon: subscription,
      title: "Pro Subscription",
      description:
        "We believe it’s important for everyone to have access to software – especially when it comes to digital learning be navigated by keyboard and screen readers.",
    },
    {
      id: 3,
      icon: partnership,
      title: "Partnership deal",
      description:
        "Let’s just get this out of the way - there will always be a kit version of Edu flow. Paid subscriptions allow us to continue helping learners around the world.",
    },
    {
      id: 4,
      icon: support,
      title: "Customer Support",
      description:
        "We believe it’s important for everyone to have access to software – especially when it comes to digital learning be navigated by keyboard and screen readers.",
    },
  ];

  return (
    <div className={styles.section}>
      <h6 className={styles.sectionTitle}>QULITY FEATURES</h6>
      <h2 className={styles.sectionName}>Amazing Useful Featuers</h2>
      <div className={styles.featureCardGrid}>
        {CONTENTS.map((content) => (
          <FeatureCard content={content} />
        ))}
      </div>
    </div>
  );
};

export default QualityFeatures;
