import styles from "../../theme/Testimonial.module.css";
import TestimonialItem from "./TestimonialItem";

import image1 from "../../assets/testimonial/avatar1.png";
import image2 from "../../assets/testimonial/avatar2.png";
import image3 from "../../assets/testimonial/avatar3.png";
import image4 from "../../assets/testimonial/avatar4.png";

const USERSINFO = [
  {
    id: 1,
    rating: 4,
    title: "Layout and organized layers",
    body: "Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.",
    name: "Denny Hilguston",
    photo: image1,
    email: "@dennyhil",
  },
  {
    id: 2,
    rating: 3,
    title: "Modern look & trending design",
    body: "Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.",
    name: "Denny Hilguston",
    photo: image2,
    email: "@dennyhil",
  },
  {
    id: 3,
    rating: 5,
    title: "Design Quality & performance",
    body: "Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.",
    name: "Denny Hilguston",
    photo: image3,
    email: "@dennyhil",
  },
  {
    id: 4,
    rating: 2,
    title: "Layout and organized layers",
    body: "Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.",
    name: "Denny Hilguston",
    photo: image4,
    email: "@dennyhil",
  },
];

const leftArrow = (
  <svg
    className="styles.icon"
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    viewBox="0 0 20 20"
    fill="currentColor"
    width="30"
    height="30"
    color="#CCD5E1"
    cursor="pointer"
  >
    <path
      fillRule="evenodd"
      d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
      clipRule="evenodd"
    />
  </svg>
);

const rightArrow = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    viewBox="0 0 20 20"
    fill="currentColor"
    width="30"
    height="30"
    color="#CCD5E1"
    cursor="pointer"
  >
    <path
      fillRule="evenodd"
      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
      clipRule="evenodd"
    />
  </svg>
);

const TestimonialList = () => {
  return (
    <section className={styles.section}>
      <h6 className={styles.sectionTitle}>TESTIMONIAL</h6>
      <h1 className={styles.sectionName}>Meet Client Satisfaction</h1>
      <div className={styles.grid}>
        {USERSINFO.map((user) => (
          <>
            <TestimonialItem user={user} />
          </>
        ))}
      </div>
      <div className={styles.arrow}>
        <button className={styles.button}>{leftArrow}</button>
        <button className={styles.button}>{rightArrow}</button>
      </div>
    </section>
  );
};

export default TestimonialList;
