/** @jsx jsx */
import { jsx, Container, Box, Image, Button, ThemeProvider } from 'theme-ui';
import TextFeature from 'components/text-feature';
import BannerImg from 'assets/content-image.jpg';
import shapePattern from 'assets/shape-pattern2.png';
import { keyframes } from '@emotion/core';
import { useState } from 'react';
import Link from 'next/link';
import ModalVideo from 'react-modal-video';
import { IoIosPlay } from 'react-icons/io';
import { useMediaQuery } from 'react-responsive'
import theme from 'theme'
const data = {
  subTitle: 'Focus 101 Event Timeline',
  title: 'Stay up to date with our upcoming events!',
  description:
    'Get your tests delivered at let home collect sample from the victory of the managements that supplies best design system guidelines ever.',
  btnName: 'Upcoming Events',
  btnURL: './',
};

export default function CoreFeature() {
  const isMobile = useMediaQuery({ query: '(max-width: 1000px)' })
  const [videoOpen, setVideoOpen] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    setVideoOpen(true);
  };

  return (
    <ThemeProvider theme={theme}>
      {isMobile ?
        <section sx={{ variant: 'section.coreFeature' }} id="events">
          <Container sx={styles.containerBox}>
            <Box sx={styles.contentBox}>
              <TextFeature subTitle={data.subTitle} title={data.title} mobile={isMobile} />{' '}
              <Link href="/events" passHref>
                <Button sx={styles.button}>
                  <a> View Events </a>
                </Button>
              </Link>
            </Box>
          </Container>
        </section>
        :
        <section sx={{ variant: 'section.coreFeature' }} id="events">
          <Container sx={styles.containerBox}>
            <Box sx={styles.contentBox}>
              <TextFeature subTitle={data.subTitle} title={data.title} mobile={isMobile} />{' '}
              <Link href="/events" passHref>
                <Button>
                  <a> View Events </a>
                </Button>
              </Link>
            </Box>
            <Box sx={styles.thumbnail}>
              <Image src={BannerImg} alt="Thumbnail" sx={styles.image} />
              <Button sx={styles.videoBtn} onClick={() => setVideoOpen(true)} aria-label="Play Button">
                <span>
                  <IoIosPlay />
                </span>
              </Button>
              <Box sx={styles.shapeBox}>
                <Image src={shapePattern} alt="Shape" />
              </Box>
            </Box>
            <ModalVideo channel="youtube" autoplay isOpen={videoOpen} videoId="_BJNNFRyuOs" onClose={() => setVideoOpen(false)} />
          </Container>
        </section>}
    </ThemeProvider>
  );
}

const playPluse = keyframes`
  from {
    transform: translateX(-50%) translateY(-50%) translateZ(0) scale(1);
    opacity: 1;
  }

  to {
	transform: translateX(-50%) translateY(-50%) translateZ(0) scale(1.5);
    opacity: 0;
  }
`;

const styles = {
  button: {
    fontSize: '20px'
  },
  image: {
    borderRadius: 20,
  },
  containerBox: {
    mt: '110px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: ['wrap', null, null, 'nowrap'],
    pb: [0, 7, 0, null, 7],
  },
  videoBtn: {
    zIndex: 2,
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    width: ['60px', null, '80px', null, '100px'],
    height: ['60px', null, '80px', null, '100px'],
    p: '0px !important',
    backgroundColor: 'transparent',
    '&::before': {
      position: 'absolute',
      content: '""',
      left: '50%',
      top: '50%',
      transform: 'translateX(-50%) translateY(-50%)',
      display: 'block',
      width: ['60px', null, '80px', null, '100px'],
      height: ['60px', null, '80px', null, '100px'],
      backgroundColor: 'primary',
      borderRadius: '50%',
      animation: `${playPluse} 1.5s ease-out infinite`,
      opacity: 0.5,
    },
    '> span': {
      backgroundColor: 'rgba(255,255,255,0.3)',
      width: 'inherit',
      height: 'inherit',
      textAlign: 'center',
      borderRadius: '50%',
      cursor: 'pointer',
      transition: 'all 0.5s',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
      zIndex: 2,
    },
    svg: {
      fontSize: [40, null, 48, null, 62],
    },
  },
  contentBox: {
    flexShrink: 0,
    px: [0, null, '30px', 0],
    textAlign: ['center', null, null, 'left'],
    width: ['100%', '80%', null, 340, 400, 430, null, 485],
    pb: ['50px', '60px', null, 0],
    mx: ['auto', null, null, 0],
    '.description': {
      pr: [0, null, 6, 7, 6],
    },
  },
  thumbnail: {
    display: 'inline-flex',
    position: 'relative',
    mr: 'auto',
    ml: ['auto', null, null, null, 7],
    '> img': {
      position: 'relative',
      zIndex: 1,
      height: [310, 'auto'],
    },
  },
  shapeBox: {
    position: 'absolute',
    bottom: -65,
    right: -165,
    zIndex: -1,
    display: ['none', 'inline-block', 'none', null, 'inline-block'],
  },
};
