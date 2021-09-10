import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';

// import SEO from 'components/seo';
import Package from 'components/pricingSectionData';
import Feature from 'components/feature';


import Layout from "components/layout";
import KeyFeature from "../sections/key-feature";
import TestimonialCard from "../sections/testimonial";

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Feature />
        <Package /> 
        <KeyFeature />
        <TestimonialCard />
      </Layout>
    </ThemeProvider>
  );
}
