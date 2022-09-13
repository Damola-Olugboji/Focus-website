/** @jsx jsx */
import React from 'react'
import { Box, jsx, Container, Button, Text, ThemeProvider } from 'theme-ui'
import theme from 'theme'
import Link from 'next/link'

export default function ContactSection() {
    return (

        <ThemeProvider theme={theme}>
            <section sx={{ variant: 'section.contact' }} id="contact">
                <Container sx={styles.containerBox}>
                    <Text sx={styles.textStyle} as="h1">Be included in our upcoming events and meetings!</Text>
                    <Text sx={styles.textStyle} as="h1">Get in touch with us here!</Text>
                    <Link href="/contact" passHref>
                        <Button sx={styles.buttonStyle}> Contact Us</Button>
                    </Link>
                </Container>
            </section>
        </ThemeProvider>
    )
}

const styles = {
    containerBox: {
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: ['wrap', null, null, 'nowrap'],
        pb: [0, 7, 0, null, 4],
    },
    buttonStyle: {
        mt: '30px',
        bg: 'white',
        color: 'primary'
    },
    textStyle: {
        color: 'white'
    }

}