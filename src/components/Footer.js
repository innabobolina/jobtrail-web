import styles from "../theme/Footer.module.css";

const starIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    viewBox="0 0 20 20"
    fill="currentColor"
    color="#2F93DA"
    width="55"
    height="51"
    left="624"
    top="3921"
    background="#2F93DA"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const Footer = () => {
  return (
    <div className={styles.grid}>
      <section className={styles.body}>
        <div className={styles.placeholder}></div>
        <div className={styles.title}>{starIcon} JobTrail</div>
        <ul className={styles.socialMedia}>
          <li className={styles.socialMediaIcon}></li>
          <li className={styles.socialMediaIcon}></li>
          <li className={styles.socialMediaIcon}></li>
        </ul>
      </section>
      <h6 className={styles.copyright}>Copyright by JobTrail 2021</h6>
    </div>
  );
};

export default Footer;
