/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Box, Heading, Text, Image, Button } from 'theme-ui';
import Img from 'assets/image.jpeg';
import Img1 from 'assets/image1.png';
import Img2 from 'assets/image2.jpg';
import Img3 from 'assets/image3.gif';
import Img4 from 'assets/image4.jpeg';
import Img5 from 'assets/image5.jpeg';
import Img7 from 'assets/image7.jpeg';
import Img8 from 'assets/image8.jpeg';
import Img9 from 'assets/image9.jpeg';
import Img10 from 'assets/image10.jpeg';
import Img11 from 'assets/image11.jpeg';
import Img12 from 'assets/image12.jpeg';
import Img13 from 'assets/image13.jpeg';
import Img14 from 'assets/image14.jpeg';
import Img15 from 'assets/image15.jpeg';

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
              <Image sx={styles.image} src={Img1} />
            </div>
            <div>
              <Image sx={styles.image} src={Img10} />
            </div>
            <div>
              <Image sx={styles.image} src={Img3} />
            </div>

            <div>
              <Image sx={styles.image} src={Img11} />
            </div>
            <div>
              <Image sx={styles.image} src={Img2} />
            </div>
            <div>
              <Image sx={styles.image} src={Img9} />
            </div>
            <div>
              <Image sx={styles.image} src={Img} />
            </div>
            <div>
              <Image sx={styles.image} src={Img12} />
            </div>
            <div>
              <Image sx={styles.image} src={Img15} />
            </div>
          </Carousel>
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  image: {
    borderRadius: 0,
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
