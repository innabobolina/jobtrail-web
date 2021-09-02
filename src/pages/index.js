import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';

import SEO from 'components/seo';
import Package from 'components/pricingSectionData';



export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
          <SEO title="Jobtrail App" />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <Package /> 
          <div />
    </ThemeProvider>
  );
}
