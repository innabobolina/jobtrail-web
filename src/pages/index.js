import React from "react";
import { ThemeProvider } from "theme-ui";
import theme from "theme";

import SEO from "components/seo";
import TestimonialList from "components/testimonial/TestimonialList";
import Footer from "../components/Footer";

export default function IndexPage() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <SEO title="Jobtrail App" />
      </ThemeProvider>

      <TestimonialList />
      <Footer />
    </>
  );
}
