/** @jsx jsx */
import React from 'react'
import { Box, jsx, Container, Button, Text, ThemeProvider } from 'theme-ui'
import theme from 'theme'
import Link from 'next/link'
import { useMediaQuery } from 'react-responsive'


export default function ContactSection() {

    const isMobile = useMediaQuery({ query: '(max-width: 900px)' })

    return (

        <ThemeProvider theme={theme}>
            <section sx={{ variant: 'section.contact' }} id="contact">
                <Container sx={styles.containerBox}>
                    {isMobile ? <>
                        <Text sx={mobileStyles.upperText} as="h1">Be included in our upcoming events and meetings!</Text>
                        <Text sx={mobileStyles.lowerText} as="h1">Get in touch with us here!</Text>
                    </>
                        : <>
                            <Text sx={styles.upperText} as="h1">Be included in our upcoming events and meetings!</Text>
                            <Text sx={styles.lowerText} as="h1">Get in touch with us here!</Text>
                        </>}
                    <Link href="/contact" passHref>
                        <Button sx={styles.buttonStyle}> Contact Us</Button>
                    </Link>
                </Container>
            </section>
        </ThemeProvider>
    )
}

const mobileStyles = {
    upperText: {
        fontSize: '24px',
        color: 'white',
        pb: '5px',
    },
    lowerText: {
        fontSize: '20px',
        color: 'white',
        fontWeight: 1,
    }
}
const styles = {
    containerBox: {
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: ['wrap', null, null, 'nowrap'],
        pb: [0, 7, 7, 7, 7],
    },
    buttonStyle: {
        mt: '30px',
        bg: 'white',
        color: 'primary'
    },
    upperText: {
        color: 'white',
        fontSize: '30px',
    },
    lowerText: {
        color: 'white',
        fontWeight: 2
    }

}