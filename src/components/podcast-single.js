import React from 'react'
import theme from 'theme'
import { Box, Text, Button, ThemeProvider, Flex, Card, Link } from 'theme-ui'
import { FaYoutube, FaSpotify, FaAnchor } from 'react-icons/fa'
import { useMediaQuery } from 'react-responsive'
import useCollapse from 'react-collapsed'

export default function PodcastSingle({ title, description, disabled, releaseDate, extraDescription, spotifyLink, youtubeLink, anchorLink, image, }) {

    const styles = {
        link: {
            color: '#433d39',
            textDecoration: 'none',
        },
        descriptionBox: {
            wordWrap: 'break-word',
            pl: '60px',
            pr: '40px',
            width: '70%',
            fontSize: '18px',
            fontWeight: 400,
        },
        headerBox: {
            width: '25%'
        },
        iconFlex: {
            pt: '20px',
            display: 'flex',
            justifyContent: 'space-around',

        },
        iconStyle: {
            fontSize: '37px',
            cursor: 'pointer',
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
            justifyContent: 'center',
            flexFlow: 'wrap',
            // justifyContent: 'space-evenly',
            // flexDirection: 'row',
            alignItems: 'center',
            // flexShrink: 1,
            // flexWrap: 'wrap',
            // flexGrow: 1,
            // verticalAlign: 'top',
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
                            <Box sx={{ width: "100%" }}>
                                <Text as='h2' sx={{ textAlign: 'center' }} >{title}</Text>
                                <Text as='h3' sx={{ textAlign: 'center', pt: '10px' }} >{releaseDate}</Text>
                                <Box sx={styles.iconFlex}>
                                    <Link sx={styles.link} href={youtubeLink} target="_blank"><FaYoutube style={mobileStyle.iconStyle} ></FaYoutube></Link>
                                    <Link sx={styles.link} href={spotifyLink} target="_blank"> <FaSpotify style={mobileStyle.iconStyle} ></FaSpotify></Link>
                                    <Link sx={styles.link} href={anchorLink} target="_blank"> <FaAnchor style={mobileStyle.iconStyle} ></FaAnchor></Link>
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
                            <Box sx={styles.headerBox}>
                                <Text as='h2' sx={{ textAlign: 'center' }} >{title}</Text>
                                <Text as='h3' sx={{ textAlign: 'center', pt: '10px' }} >{releaseDate}</Text>
                                <Box sx={styles.iconFlex}>
                                    <Link sx={styles.link} href={youtubeLink} target="_blank"><FaYoutube style={styles.iconStyle} ></FaYoutube></Link>
                                    <Link sx={styles.link} href={spotifyLink} target="_blank"> <FaSpotify style={styles.iconStyle} ></FaSpotify></Link>
                                    <Link sx={styles.link} href={anchorLink} target="_blank"> <FaAnchor style={styles.iconStyle} ></FaAnchor></Link>
                                </Box>
                            </Box>
                            <Box sx={styles.descriptionBox}>
                                <Text as='p' >
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

