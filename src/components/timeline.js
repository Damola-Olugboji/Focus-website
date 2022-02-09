import * as React from 'react';
import { Timeline } from 'react-responsive-timeline';
import SingleEvent from './single-event';
import { Box, Text } from 'theme-ui';

const data = [
  {
    title: (
      <SingleEvent
        title="Focus 101 Zoom Meeting"
        description="Join us for our first zoom meeting of 2022 "
        extraDescription="Meeting ID: 569 966 0936,  PWD: 171438"
        link="https://rutgers.zoom.us/my/omo19?pwd=aExPYXFTWFZsc1VmbDM1UGJibXZyZz09"
        linkText="Join Here"
        align="left"
      />
    ),
    sub: '9 Feb 2022 | 9pm',
  },
  {
    title: (
      <SingleEvent
        title="Student Care Packages"
        description="Care packages for the spring 2022 semester"
        align="right"
        link="https://photos.app.goo.gl/QmKiqAxEJZbjGihi8"
        linkText="Care Packages"
      />
    ),
    sub: '16 Jan 2022',
  },
  {
    title: (
      <SingleEvent
        title="Focus 101 Friendsgiving Party"
        description="Thanksgiving + Friends = Friendsgiving!"
        align="left"
        link="https://youtu.be/_BJNNFRyuOs"
        linkText="Event Highlights"
      />
    ),
    sub: '26 Nov 2021',
  },
  {
    title: <SingleEvent title="Paint and Sip Event" description="" align="left" />,
    sub: '16 Jan 2021',
  },
];

export default function BasicTimeline() {
  return (
    <Box sx={styles.container}>
      <Text as="h1" sx={styles.text}>
        {' '}
        <u>Event Timeline</u>
      </Text>
      <Timeline pivot="veritcal" direction="center" tooltip={false} textLimit="none" timelines={data} />
    </Box>
  );
}

const styles = {
  container: {
    textAlign: 'center',
  },
  text: {
    pb: '50px',
    mt: '-50px',
  },
};
