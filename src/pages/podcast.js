import React from 'react'
import { ThemeProvider, Box, Text } from 'theme-ui'
import Link from 'next/link'
import theme from 'theme'
import { FaArrowAltCircleLeft } from 'react-icons/fa'
import PodcastList from '../components/podcast-list'

export default function Podcast() {
    return (
        <ThemeProvider theme={theme}>
            <Link href="/">
                <Box sx={styles.headerContainer}>
                    <FaArrowAltCircleLeft />
                    <Text as="p" sx={styles.headerContainer.text}>
                        <a> Back to home</a>
                    </Text>
                </Box>
            </Link>
            <Box sx={styles.podcastContainer}>
                <PodcastList></PodcastList>
            </Box>
        </ThemeProvider>
    )
}

const styles = {
    headerContainer: {
        cursor: 'pointer',
        display: 'flex',
        fontWeight: 'bold',
        textDecoration: 'none',
        justifyContent: 'left',
        alignItems: 'center',

        text: {
            ml: '15px',
        },
        mt: '25px',
        pl: '35px',
    },
    podcastContainer: {
        display: 'flex',
        pb: '40px',
    }
}