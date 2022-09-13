import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from '../sections/banner';
import ServiceSection from '../sections/service-section';
import CoreFeature from '../sections/core-feature';
import ContactSection from '../sections/contact-us'

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO title="Focus101" />
        <Banner />
        <ServiceSection />
        <CoreFeature />
        <ContactSection />
      </Layout>
    </ThemeProvider>
  );
}
