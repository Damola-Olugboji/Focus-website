import * as React from 'react';
import { Timeline } from 'react-responsive-timeline';
import SingleEvent from './single-event';
import { Box, Text } from 'theme-ui';

const data = [
  {
    title: (
      <SingleEvent
        title="College Ministry Graduate Celebration!"
        description="Join us as we celebrate our new college graduates!"
        extraDescription="Location: Refer to the group chat"
        align="left"
      />
    ),
    sub: '24 July 2022 | 1:30pm',
  },
  {
    title: (
      <SingleEvent
        title="Focus 101 Zoom Meeting"
        description="Join us on zoom!"
        extraDescription="Meeting ID: 569 966 0936,  PWD: 171438"
        link="https://rutgers.zoom.us/my/omo19?pwd=aExPYXFTWFZsc1VmbDM1UGJibXZyZz09"
        linkText="Join Here"
        align="left"
      />
    ),
    sub: '17 July 2022 | 9pm',
  },
  {
    title: (
      <SingleEvent
        title="Focus 101 Zoom Bible Study"
        description="Join us on zoom!"
        extraDescription="Meeting ID: 569 966 0936,  PWD: 171438"
        link="https://rutgers.zoom.us/my/omo19?pwd=aExPYXFTWFZsc1VmbDM1UGJibXZyZz09"
        linkText="Join Here"
        align="left"
      />
    ),
    sub: '26 Jun 2022 | 9pm',
  },
  {
    title: (
      <SingleEvent
        title="Memorial Day Game Night"
        description="Join us for good food, fun games, and a great time!"
        extraDescription="Location: Refer to the group chat"
        align="left"
      />
    ),
    sub: '30 May 2022 | 6:30pm',
  },
  {
    title: (
      <SingleEvent
        title="Focus 101 Zoom Bible Study"
        description="Join us on zoom!"
        extraDescription="Meeting ID: 569 966 0936,  PWD: 171438"
        link="https://rutgers.zoom.us/my/omo19?pwd=aExPYXFTWFZsc1VmbDM1UGJibXZyZz09"
        linkText="Join Here"
        align="left"
      />
    ),
    sub: '15 May 2022 | 9pm',
  },
  {
    title: (
      <SingleEvent
        title="Focus 101 Zoom Bible Study"
        description="Join us in continuing our bible study series! (week 5)"
        extraDescription="Meeting ID: 569 966 0936,  PWD: 171438"
        link="https://rutgers.zoom.us/my/omo19?pwd=aExPYXFTWFZsc1VmbDM1UGJibXZyZz09"
        linkText="Join Here"
        align="left"
      />
    ),
    sub: '24 Apr 2022 | 9pm',
  },
  {
    title: (
      <SingleEvent
        title="Focus 101 Zoom Bible Study"
        description="Join us in continuing our bible study series! (week 4)"
        extraDescription="Meeting ID: 569 966 0936,  PWD: 171438"
        link="https://rutgers.zoom.us/my/omo19?pwd=aExPYXFTWFZsc1VmbDM1UGJibXZyZz09"
        linkText="Join Here"
        align="left"
      />
    ),
    sub: '10 Apr 2022 | 9pm',
  },
  {
    title: (
      <SingleEvent
        title="Focus 101 Zoom Bible Study"
        description="Join us in continuing our bible study series! (week 3)"
        extraDescription="Meeting ID: 569 966 0936,  PWD: 171438"
        link="https://rutgers.zoom.us/my/omo19?pwd=aExPYXFTWFZsc1VmbDM1UGJibXZyZz09"
        linkText="Join Here"
        align="left"
      />
    ),
    sub: '27 Mar 2022 | 9pm',
  },

  {
    title: (
      <SingleEvent
        title="Focus 101 Zoom Bible Study"
        description="Join us in continuing our bible study series! (week 2)"
        extraDescription="Meeting ID: 569 966 0936,  PWD: 171438"
        link="https://rutgers.zoom.us/my/omo19?pwd=aExPYXFTWFZsc1VmbDM1UGJibXZyZz09"
        linkText="Join Here"
        align="left"
      />
    ),
    sub: '13 Mar 2022 | 9pm',
  },
  {
    title: (
      <SingleEvent
        title="Focus 101 Zoom Bible Study"
        description="Join us in discussing our first bible study! (week 1)"
        extraDescription="Meeting ID: 569 966 0936,  PWD: 171438"
        link="https://rutgers.zoom.us/my/omo19?pwd=aExPYXFTWFZsc1VmbDM1UGJibXZyZz09"
        linkText="Join Here"
        align="left"
      />
    ),
    sub: '27 Feb 2022 | 9pm',
  },
  {
    title: (
      <SingleEvent
        title="Focus 101 Zoom Bible Study"
        description="Join us for our first zoom meeting of 2022 "
        extraDescription="Meeting ID: 569 966 0936,  PWD: 171438"
        link="https://rutgers.zoom.us/my/omo19?pwd=aExPYXFTWFZsc1VmbDM1UGJibXZyZz09"
        linkText="Join Here"
        link2="https://docs.google.com/document/d/1E3m90ZWNCUUX2_oAhdPM223DOA9teHCFB6awGuI8J40/edit?usp=sharing"
        link2Text="Meeting Notes"
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
