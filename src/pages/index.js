import React from "react";
import { ThemeProvider } from "theme-ui";
import theme from "theme";
// import SEO from 'components/seo';
import Form from "../sections/form";
import Banner from "../sections/banner";
import Package from "sections/pricingSectionData";
import Feature from "sections/feature";
import Layout from "components/layout";
import KeyFeature from "../sections/key-feature";
import TestimonialCard from "../sections/testimonial";

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        {/* <Form /> */}
        <Banner />
        <Feature />
        <Package />
        <KeyFeature />
        <TestimonialCard />
      </Layout>
    </ThemeProvider>
  );
}
