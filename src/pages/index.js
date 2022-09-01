import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from '../sections/banner';
import ServiceSection from '../sections/service-section';
import CoreFeature from '../sections/core-feature';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO title="Focus101" />
        <Banner />
        <ServiceSection />
        <CoreFeature />
      </Layout>
    </ThemeProvider>
  );
}
