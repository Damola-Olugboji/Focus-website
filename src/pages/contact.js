import React from 'react';
import { Box, Text, Link } from 'theme-ui';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import ContactForm from 'components/contact-form';

export default function Contact() {
  return (
    <ThemeProvider theme={theme}>
      <Link href="/" sx={styles.links.nav}>
        <Box sx={styles.headerContainer}>
          <IoMdArrowRoundBack />
          <Text as="p" sx={styles.headerContainer.text}>
            Back to home
          </Text>
        </Box>
      </Link>

      <Box sx={styles.formContainer}>
        <Text as="h2"> Focus 101 Contact Form</Text>
        <ContactForm />
      </Box>
    </ThemeProvider>
  );
}

const styles = {
  formContainer: {
    justifyContent: 'center',
    padding: '35px',
  },
  links: {
    bold: {
      fontWeight: 'bold',
    },
    nav: {
      fontWeight: 'bold',
      color: 'inherit',
      textDecoration: 'none',
    },
  },
  headerContainer: {
    ml: '30px',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'left',
    text: {
      ml: '15px',
    },
    mt: '25px',
  },
};
