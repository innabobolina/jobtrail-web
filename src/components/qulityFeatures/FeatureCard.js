import styles from "../../theme/QulityFeatures.module.css";

const FeatureCard = ({ content }) => {
  return (
    <div className={styles.featureCard}>
      <div className={styles.icons}>
        <content.icon />
      </div>
      <div className={styles.description}>
        <h5 className={styles.title}>{content.title}</h5>{" "}
        <h6>{content.description}</h6>
      </div>
    </div>
  );
};

export default FeatureCard;

// {content.icon}
// {content.title}
// {content.description}
