import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';

import SEO from 'components/seo';



export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
  
          <SEO title="Jobtrail App" />
   
    </ThemeProvider>
  );
}
