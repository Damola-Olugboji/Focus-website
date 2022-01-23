/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Box, Heading, Text, Image, Button } from 'theme-ui';
import BannerImg from 'assets/banner-img.jpg';
import BannerImg2 from 'assets/banner-image2.jpg';
import BannerImg3 from 'assets/banner-image3.gif';
import BannerImg4 from 'assets/banner-image4.jpeg';
import BannerImg5 from 'assets/banner-image5.gif';
import { Carousel } from 'react-responsive-carousel';
import { SubwayTwoTone } from '@material-ui/icons';

export default function Banner() {
  return (
    <section sx={styles.banner} id="home">
      <Container sx={styles.banner.container}>
        <Box sx={styles.banner.contentBox}>
          <Heading as="h1" variant="heroPrimary" sx={styles.banner.bannerHeader}>
            FOCUS 101
          </Heading>
          <Text as="p" variant="heroSecondary">
            Finding Our Calling as Undergraduate Students
          </Text>
        </Box>
        <Box sx={styles.banner.imageBox}>
          <Carousel showStatus={false} showIndicators={false} swipeable={false} interval={3000} autoPlay={true} infiniteLoop={true}>
            <div>
              <Image sx={styles.image} src={BannerImg3} />
            </div>
            <div>
              <Image sx={styles.image} src={BannerImg4} />
            </div>
            <div>
              <Image sx={styles.image} src={BannerImg} />
            </div>
            <div>
              <Image sx={styles.image} src={BannerImg5} />
            </div>
            <div>
              <Image sx={styles.image} src={BannerImg2} />
            </div>
          </Carousel>
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  image: {
    borderRadius: 20,
  },
  banner: {
    bannerHeader: {
      '@media screen and (max-width: 600px)': {
        display: 'none',
      },
    },
    pt: ['140px', '145px', '155px', '170px', null, null, '180px', '215px'],
    pb: [2, null, 0, null, 2, 0, null, 5],
    position: 'relative',
    zIndex: 2,
    '&::before': {
      position: 'absolute',
      content: '""',
      bottom: 6,
      left: 0,
      height: '100%',
      width: '100%',
      zIndex: -1,
      backgroundRepeat: `no-repeat`,
      backgroundPosition: 'bottom left',
      backgroundSize: '36%',
    },
    '&::after': {
      position: 'absolute',
      content: '""',
      bottom: '40px',
      right: 0,
      height: '100%',
      width: '100%',
      zIndex: -1,

      backgroundRepeat: `no-repeat`,
      backgroundPosition: 'bottom right',
      backgroundSize: '32%',
    },
    container: {
      minHeight: 'inherit',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
    contentBox: {
      width: ['100%', '90%', '535px', null, '57%', '60%', '68%', '60%'],
      mx: 'auto',
      textAlign: 'center',
      mb: ['40px', null, null, null, null, 7],
    },
    imageBox: {
      justifyContent: 'center',
      textAlign: 'center',
      display: 'inline-flex',
      mb: [0, null, -6, null, null, '-40px', null, -3],
      img: {
        position: 'relative',
        height: [245, 'auto'],
      },
    },
  },
};
