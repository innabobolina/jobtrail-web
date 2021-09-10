import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';

import SEO from 'components/seo';
import Package from 'components/pricingSectionData';
import Feature from 'components/feature';



export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
          <SEO title="Jobtrail App" />
          <div />
          <div />
          <Feature />
          <div />
          <div />
          <div />
          <Package /> 
          <div />
    </ThemeProvider>
  );
}
