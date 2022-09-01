import BasicTimeline from 'components/timeline';
import React from 'react';
import { Box, Container, Button, Flex, Text } from 'theme-ui';
import Link from 'next/link';
import { FaArrowAltCircleLeft } from 'react-icons/fa';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';

export default function Events() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Link href="/">
          <Box sx={styles.headerContainer}>
            <FaArrowAltCircleLeft />
            <Text as="p" sx={styles.headerContainer.text}>
              <a> Back to home</a>
            </Text>
          </Box>
        </Link>

        <Box sx={styles.container}>
          <BasicTimeline />
        </Box>
        <Box sx={styles.announcementBox}></Box>
      </div>
    </ThemeProvider>
  );
}

const styles = {
  container: {
    justifyContent: 'center',
    mt: '100px',
    alignItems: 'center',
  },
  announcementText: {
    fontSize: 60,
    fontWeight: 'bold',
  },
  announcementBox: {
    justifyContent: 'center',
    display: 'flex',
    textAlign: 'center',
    pt: '40px',
  },
  headerContainer: {
    cursor: 'pointer',
    display: 'flex',
    fontWeight: 'bold',
    alignItems: 'center',
    textDecoration: 'none',
    justifyContent: 'left',
    text: {
      ml: '15px',
    },
    mt: '25px',
    pl: '35px',
  },
};
