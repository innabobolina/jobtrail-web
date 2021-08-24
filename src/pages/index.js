import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import Header from "../components/Header/Header"
import SEO from 'components/seo';



export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
          <SEO title="Jobtrail App" />
   
    </ThemeProvider>
  );
}
