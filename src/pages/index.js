import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import SEO from 'components/seo';
import Header from "../components/Header/Header";
import Hero from 'components/Header/Hero';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <SEO title="Jobtrail App" />
      <Header />
      <Hero />
    </ThemeProvider>
  );
}
