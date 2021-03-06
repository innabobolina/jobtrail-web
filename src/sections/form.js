import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { Container, Button } from "theme-ui";

export default function Form({ openFormHandler }) {
  return (
    <Container sx={styles.form}>
      <IoMdClose
        size="20px"
        style={{ marginTop: "20px" }}
        onClick={openFormHandler}
      />
      <h2 style={{ textAlign: "center", marginTop: 0 }}>Contact Us Today!</h2>
      <form action="" method="get">
        <div style={{ textAlign: "center" }}>
          <label for="name" style={{ paddingRight: "15px" }}>
            Name{" "}
          </label>
          <input
            type="text"
            name="name"
            id="name"
            required
            placeholder="Please enter your name here"
            size="25"
            style={{ border: "none", borderBottom: "1px solid black" }}
          />
        </div>
        <div style={{ textAlign: "center" }}>
          <label for="email" style={{ paddingRight: "15px" }}>
            Email{" "}
          </label>
          <input
            type="email"
            name="email"
            id="email"
            required
            placeholder="Please enter your email here"
            size="25"
            style={{
              border: "none",
              borderBottom: "1px solid black",
              marginTop: "30px",
            }}
          />
        </div>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <Button style={{ margin: "10px 0 10px" }}>Send</Button>
        </div>
      </form>
    </Container>
  );
}
const styles = {
  form: {
    position: "relative",
    border: "1px solid black",
    backgroundColor: "white",
    width: "400px",
    marginTop: "100px",
    color: "text",
    zIndex: "15000",
  },
};
