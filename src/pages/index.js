import React from "react";
import { ThemeProvider } from "theme-ui";
import theme from "theme";
// import SEO from 'components/seo';
import Banner from "../sections/banner";
import Layout from "components/layout";
import KeyFeature from "../sections/key-feature";
import VideoFeature from "components/feature-video";
import Feature from "sections/feature";
import Package from "sections/pricingSectionData";
import TestimonialCard from "../sections/testimonial";

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Banner />
        <KeyFeature />
        <VideoFeature />
        <Feature />
        <Package />
        <TestimonialCard />
      </Layout>
    </ThemeProvider>
  );
}
