/** @jsx jsx */
import { jsx, Button } from "theme-ui";
import React, { useState } from "react";
import Sticky from "react-stickynode";
import Footer from "./footer/footer";
import Header from "./header/header";
import Form from "sections/form";

export default function Layout({ children }) {
  const [isSticky, setIsSticky] = useState(false);

  const handleStateChange = (status) => {
    if (status.status === Sticky.STATUS_FIXED) {
      setIsSticky(true);
    } else if (status.status === Sticky.STATUS_ORIGINAL) {
      setIsSticky(false);
    }
  };

  const [isOpenForm, setIsOpenForm] = useState(false);
  const openFormHandler = () => {
    setIsOpenForm(!isOpenForm);
  };

  const buttonGetStarted = (
    <Button className="donate__btn" onClick={openFormHandler}>
      Get Started
    </Button>
  );

  return (
    <div
      style={{
        overflow: isOpenForm && "hidden",
        maxHeight: isOpenForm && "100vh",
      }}
    >
      <Sticky innerZ={1001} top={0} onStateChange={handleStateChange}>
        <Header
          buttonGetStarted={buttonGetStarted}
          className={`${isSticky ? "sticky" : "unSticky"}`}
        />
      </Sticky>
      {isOpenForm && <Form openFormHandler={openFormHandler} />}
      <main id="content" sx={{ variant: "layout.main" }}>
        {children}
      </main>

      <Footer />
      {isOpenForm && (
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.3)",
            zIndex: 10000,
          }}
        ></div>
      )}
    </div>
  );
}
