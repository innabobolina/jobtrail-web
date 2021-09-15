import { jsx } from "theme-ui";
import { Container, Box, Heading, Text, Image, Button } from "theme-ui";

export default function Banner() {
  return (
    <Container sx={styles.hero} id="home">
      {/* <h1 sx={styles.heading}>Welcome!</h1> */}
      <h1 style={{ color: "#8E8358" }}>Welcome!</h1>
      <p>Some awesome text will come here...</p>
      <Button>Explore</Button>
    </Container>
  );
}
const styles = {
  hero: {
    minHeight: "inherit",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    color: "red",
  },
};
