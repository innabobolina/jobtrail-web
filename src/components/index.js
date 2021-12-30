import React from "react";
import { ThemeProvider } from "theme-ui";
import theme from "theme";
// import SEO from 'components/seo';
import Banner from "../sections/banner";
import Layout from "components/layout";
import KeyFeature from "../sections/key-feature";
import VideoFeature from "components/feature-video";
import Package from "sections/pricingSectionData";
import TestimonialCard from "../sections/testimonial";
import Feature from "sections/feature";
export default function IndexForPage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <KeyFeature />
        <VideoFeature />
        <Feature />
        <Package />
        <TestimonialCard />
      </Layout>
    </ThemeProvider>
  );
}