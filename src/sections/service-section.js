import React, { useState } from 'react';
/** @jsx jsx */
import { jsx, Container, Box, Grid, Text, Heading, Button, Image, Link } from 'theme-ui';
import TextFeature from 'components/text-feature';
import ModalVideo from 'react-modal-video';
import { IoIosPlay } from 'react-icons/io';

import ServiceThumb from 'assets/podcastimage.jpg';
import shapePattern from 'assets/shape-pattern1.png';

const data = {
  subTitle: 'Who we are',
  title: 'A ministry dedicated to post-secondary students.',
  features: [
    {
      id: 1,
      imgSrc: null,
      altText: 'Smart Features',
      title: 'Serving university students.',
      text:
        '"Focus 101" is a ministry at Agape House of Worship dedicated to serving students all the way from the undergraduate level to students pursuing their masters and doctorate degrees. Our goal is to create an environment where our university students can provide consistent support and fellowship to one another!',
      linkText: 'Get in touch with us here!',
    },
  ],
};

export default function ServiceSection() {
  const [videoOpen, setVideoOpen] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    setVideoOpen(true);
  };
  return (
    <section sx={{ variant: 'section.services' }} id="about">
      <Container sx={styles.containerBox}>
        <Box sx={styles.thumbnail}>
          <Image src={ServiceThumb} alt="Thumbnail" sx={styles.imageThumbnail} />
          <Box sx={styles.shapeBox}>
            <Image src={shapePattern} alt="shape" />
          </Box>
        </Box>
        <Box sx={styles.contentBox}>
          <TextFeature subTitle={data.subTitle} title={data.title}></TextFeature>
          <Grid sx={styles.grid}>
            {data.features.map((feature) => (
              <Box sx={styles.card} key={feature.id}>
                <Box sx={styles.wrapper}>
                  <Heading sx={styles.wrapper.title}> {feature.title}</Heading>
                  <Text sx={styles.wrapper.subTitle}> {feature.text}</Text>
                  <Link href="/contact" sx={styles.wrapper.links.nav}>
                    <Text>
                      {' '}
                      <u>{feature.linkText}</u>
                    </Text>
                  </Link>
                </Box>
              </Box>
            ))}
          </Grid>
        </Box>
        <ModalVideo channel="youtube" isOpen={videoOpen} videoId="EbDMNjT-QpI" onClose={() => setVideoOpen(false)} />
      </Container>
    </section>
  );
}

const styles = {
  imageThumbnail: {
    borderRadius: '20px',
  },
  coreFeature: {
    py: [0, null, null, 2, null, 7],
    position: 'relative',
  },
  containerBox: {
    display: 'flex',
    alignItems: ['flex-start', null, null, 'center'],
    justifyContent: ['flex-start', null, null, 'space-between'],
    flexDirection: ['column', null, null, 'row'],
    pb: [0, null, null, null, null, 7],
  },
  thumbnail: {
    mr: ['auto', null, null, 6, 60, 85],
    order: [2, null, null, 0],
    ml: ['auto', null, null, 0],
    display: 'inline-flex',
    position: 'relative',
    '> img': {
      position: 'relative',
      zIndex: 1,
      height: [310, 'auto'],
    },
  },
  shapeBox: {
    position: 'absolute',
    bottom: -68,
    left: -160,
    zIndex: -1,
    display: ['none', null, null, null, null, 'inline-block'],
  },

  contentBox: {
    width: ['100%', null, null, 315, 390, 450, null, 500],
    flexShrink: 0,
    mb: [7, null, 60, 0],
    textAlign: ['center', null, null, 'left'],
  },
  grid: {
    pr: [2, 0, null, null, 6, '70px'],
    pl: [2, 0],
    pt: [2, null, null, null, 3],
    mx: 'auto',
    width: ['100%', 370, 420, '100%'],
    gridGap: ['35px 0', null, null, null, '50px 0'],
    gridTemplateColumns: ['repeat(1,1fr)'],
  },
  card: {
    display: 'flex',
    alignItems: 'flex-start',
    transition: 'all 0.3s',
  },

  icon: {
    width: ['45px', null, null, null, '55px'],
    height: 'auto',
    flexShrink: 0,
    mr: [3, null, null, null, 4],
  },
  wrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'left',
    mt: '-5px',
    title: {
      fontSize: 3,
      color: 'heading_secondary',
      lineHeight: 1.4,
      fontWeight: 700,
      mb: [2, null, 3, 2, 3],
    },

    subTitle: {
      fontSize: [1, null, null, '14px', 1],
      fontWeight: 400,
      lineHeight: 1.9,
    },
    links: {
      bold: {
        fontWeight: 'bold',
      },
      nav: {
        fontSize: [1, null, null, '14px', 1],
        fontWeight: 400,
        lineHeight: 1.9,
        textDecoration: 'none',
        color: 'inherit',
      },
    },
  },
  videoWrapper: {
    maxWidth: '100%',
    position: 'relative',
    width: '900px',
    '&:before': {
      content: '""',
      display: 'block',
      paddingTop: '56.25%',
    },
    iframe: {
      width: '100%',
      height: '100%',
      position: 'absolute',
      top: 0,
      left: 0,
    },
  },
};
