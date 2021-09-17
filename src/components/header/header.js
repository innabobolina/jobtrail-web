import { jsx, Container, Flex, Button } from "theme-ui";
import { keyframes } from "@emotion/core";
import { Link } from "react-scroll";
import { GrStar } from "react-icons/gr";
import MobileDrawer from "./mobile-drawer";
import menuItems from "./header.data";
import { Children } from "react";

export default function Header({ className, buttonGetStarted }) {
  return (
    <header
      sx={styles.header}
      className={className}
      id="header"
      style={{ marginTop: "10px" }}
    >
      <Container sx={styles.container}>
        <div sx={styles.logo} style={{ display: "flex", alignItems: "center" }}>
          <GrStar size={50} style={{ color: "#2F93DA" }} />
          <span style={{ fontSize: "1.5rem" }}>JobTrail</span>
        </div>
        <Flex as="nav" sx={styles.nav}>
          {menuItems.map((menuItem, i) => (
            <Link
              activeClass="active"
              to={menuItem.path}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              key={i}
            >
              {menuItem.label}
            </Link>
          ))}
        </Flex>
        {/* <Button className="donate__btn">Get Started</Button> */}
        {buttonGetStarted}
        <MobileDrawer />
      </Container>
    </header>
  );
}

const positionAnim = keyframes`
  from {
    position: fixed;
    opacity: 1;
  }

  to {
    position: absolute;
    opacity: 1;
    transition: all 0.4s ease;
  }
`;

const styles = {
  header: {
    color: "text",
    fontWeight: "body",
    py: 4,
    width: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    transition: "all 0.4s ease",
    animation: `${positionAnim} 0.4s ease`,
    ".donate__btn": {
      flexShrink: 0,
      mr: [15, 20, null, null, 0],
      ml: ["auto", null, null, null, 0],
    },
    "&.sticky": {
      position: "fixed",
      backgroundColor: "white",
      color: "#000000",
      boxShadow: "0 1px 2px rgba(0, 0, 0, 0.06)",
      py: 3,
      "nev > a": {
        color: "text",
      },
    },
  },
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  nav: {
    mx: "auto",
    display: "none",
    "@media screen and (max-width: 1024px)": {
      display: "none",
    },
    a: {
      fontSize: 2,
      fontWeight: "body",
      px: 5,
      cursor: "pointer",
      lineHeight: "1.2",
      transition: "all 0.15s",
      "&:hover": {
        color: "star",
      },
      "&.active": {
        color: "star",
      },
    },
  },
};
