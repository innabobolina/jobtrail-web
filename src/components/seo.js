import React from 'react';
import Head from 'next/head';

export default function SEO({
  description = 'JobTail landing page',
  author = 'Innoworld',
  meta,
  title = 'JobTrail landing website',
}) {
 
  return (
    <Head>
      <title>{title}</title>
    </Head>
  );
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
};
