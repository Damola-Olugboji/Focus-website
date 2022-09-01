import React from 'react'
import theme from 'theme'
import { Box, Text, Button, ThemeProvider, Flex, Card, Link } from 'theme-ui'
import ReactAudioPlayer from 'react-audio-player';
import { FaYoutube, FaSpotify, FaAnchor, FaExclamationTriangle } from 'react-icons/fa'
import { useMediaQuery } from 'react-responsive'
import useCollapse from 'react-collapsed'

export default function PodcastSingle({ title, description, disabled, isNew, releaseDate, extraDescription, spotifyLink, youtubeLink, anchorLink, image, }) {

    const styles = {
        descriptionBox: {
            wordWrap: 'break-word',
            pl: '60px',
            pr: '40px',
        },
        iconFlex: {
            pt: '20px',
            display: 'flex',
            justifyContent: 'space-around'
        },
        iconStyle: {
            fontSize: '30px',
            cursor: 'pointer'
        },
        outerBox: {
            display: 'flex',
            justifyContent: 'center',
            mt: '60px',
            ml: '70px',
            mr: '70px',
            mb: '10px'

        },
        cardStyle: {
            h2: {
                lineHeight: '30px'
            },
            display: 'flex',
            justifyContent: 'space-evenly',
            flexDirection: 'row',
            alignItems: 'center',
            // flexShrink: 1,
            // flexWrap: 'wrap',
            // flexGrow: 1,
            verticalAlign: 'middle',
            backgroundColor: disabled ? "#A9A9A9" : 'background',
            pt: '40px',
            pb: '40px',
            pr: '40px',
            pl: '40px',
            borderRadius: 4,
            border: '2px solid',
            borderColor: '#433d39',
            boxShadow: '0 0 30px rgba(0, 0, 0, 0.5)',

        }
    }

    const mobileStyle = {
        descriptionBox: {
            wordWrap: 'break-word',
            pl: '60px',
            pr: '40px',
        },
        iconFlex: {
            pt: '20px',
            display: 'flex',
            justifyContent: 'space-around'
        },
        iconStyle: {
            fontSize: '30px',
            cursor: 'pointer'
        },
        outerBox: {
            display: 'flex',
            justifyContent: 'center',
            mt: '60px',
            ml: '70px',
            mr: '70px',
            mb: '10px'

        },
        cardStyle: {
            h2: {
                lineHeight: '30px'
            },
            display: 'flex',
            // justifyContent: 'space-evenly',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            // flexShrink: 1,
            // flexWrap: 'wrap',
            // flexGrow: 1,
            backgroundColor: disabled ? "#A9A9A9" : 'background',
            pt: '40px',
            pb: '40px',
            pr: '40px',
            pl: '40px',
            borderRadius: 4,
            border: '2px solid',
            borderColor: '#433d39',
            boxShadow: '0 0 30px rgba(0, 0, 0, 0.5)',

        },
        toggleButton: {
            pt: '30px'
        },
        description: {
            pt: '15px',
            fontSize: '15px'
        }


    }
    const isMobile = useMediaQuery({ query: '(max-width: 1000px)' })
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse()

    return (
        <ThemeProvider theme={theme}>
            {isMobile ?
                <Box sx={mobileStyle.outerBox}>
                    {!disabled ?
                        (<Card sx={mobileStyle.cardStyle}>
                            <Box sx={{ width: '100%' }}>
                                <Text as='h2' sx={{ textAlign: 'center' }} >{title}</Text>
                                <Text as='h3' sx={{ textAlign: 'center', pt: '10px' }} >{releaseDate}</Text>
                                <Box sx={styles.iconFlex}>
                                    <FaYoutube style={mobileStyle.iconStyle} ></FaYoutube>
                                    <FaSpotify style={mobileStyle.iconStyle}></FaSpotify>
                                    <FaAnchor style={mobileStyle.iconStyle}></FaAnchor>
                                </Box>
                            </Box>

                            <Box sx={mobileStyle.toggleButton}>
                                <Button {...getToggleProps()}>
                                    {isExpanded ? 'Collapse' : 'Description'}
                                </Button>
                                <Text {...getCollapseProps()} as='p' sx={mobileStyle.description}>
                                    {description}
                                </Text>
                            </Box>
                        </Card>) :
                        <Card sx={mobileStyle.cardStyle}>
                            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                <Text as="h2" sx={{ padding: '15px' }}> {title}</Text>
                                <Text as="h3" sx={{ padding: '15px' }}> Release Date:  {releaseDate}</Text>
                            </Box>
                        </Card>}
                </Box>
                :
                <Box sx={styles.outerBox}>
                    {!disabled ?
                        (<Card sx={styles.cardStyle}>
                            <Box sx={{ width: '100%' }}>
                                <Text as='h2' sx={{ textAlign: 'center' }} >{title}</Text>
                                <Text as='h3' sx={{ textAlign: 'center', pt: '10px' }} >{releaseDate}</Text>
                                <Box sx={styles.iconFlex}>
                                    <FaYoutube style={styles.iconStyle} ></FaYoutube>
                                    <FaSpotify style={styles.iconStyle}></FaSpotify>
                                    <FaAnchor style={styles.iconStyle}></FaAnchor>
                                </Box>
                            </Box>
                            <Box sx={styles.descriptionBox}>
                                <Text as='h3' >
                                    {description}
                                </Text>
                            </Box>
                        </Card>) :
                        <Card sx={styles.cardStyle}>
                            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                <Text as="h2" sx={{ padding: '15px' }}> {title}</Text>
                                <Text as="h3" sx={{ padding: '15px' }}> Release Date:  {releaseDate}</Text>
                            </Box>
                        </Card>}
                </Box>}
        </ThemeProvider >
    )
}

