import styles from "../../theme/Testimonial.module.css";

const starIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    viewBox="0 0 20 20"
    fill="currentColor"
    color="#fc0056"
    width="20"
    height="20"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);
const greyStarIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    viewBox="0 0 20 20"
    fill="currentColor"
    color="grey"
    width="20"
    height="20"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const ratingStars = (rating) => {
  let lit = [];
  for (let i = 0; i < rating; i++) {
    lit.push(starIcon);
  }
  return lit;
};

const greyRatingStars = (rating) => {
  let lit = [];
  for (let i = 0; i < 5 - rating; i++) {
    lit.push(greyStarIcon);
  }
  return lit;
};

const TestimonialItem = ({ user }) => {
  return (
    <div className={styles.card}>
      <div>
        {ratingStars(user.rating)}
        {greyRatingStars(user.rating)}
      </div>
      <h4>{user.title}</h4>
      <h5>{user.body}</h5>

      <div className={styles.userNameGrid}>
        <img
          src={user.photo}
          alt="user's photo"
          className={styles.gridItem1}
          width={50}
          height={50}
        />
        <h4 className={styles.gridItem2}>{user.name}</h4>
        <h5 className={styles.gridItem3}>{user.email}</h5>
      </div>
    </div>
  );
};

export default TestimonialItem;
