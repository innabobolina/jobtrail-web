import React from "react";
import { ThemeProvider } from "theme-ui";
import theme from "theme";

import Layout from "components/layout";
import KeyFeature from "../sections/key-feature";
import TestimonialCard from "../sections/testimonial";

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <KeyFeature />
        <TestimonialCard />
      </Layout>
    </ThemeProvider>
  );
}
