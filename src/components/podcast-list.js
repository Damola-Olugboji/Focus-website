import React from 'react';
import { ThemeProvider, Text, Box } from 'theme-ui';
import theme from 'theme';
import PodcastSingle from 'components/podcast-single'

const data = [
    { title: 'Episode 1a: College Graduates', releaseDate: "9/18/22", disabled: false, spotifyLink: "https://open.spotify.com/show/3CeIbwXY2sDD0RRCSrInAT", anchorLink: "https://spotifyanchor-web.app.link/e/F0W4OqHXptb", youtubeLink: "https://c.tenor.com/X_uMvcVDyZwAAAAC/not-quite-yet-enough.gif", description: "Going to college is usually a unique experience for most students - some love it, some hate it, but one thing's for sure - the experience always differs widely. In this episode we talk to Sebastien Barthelemy, a recent college grad, as he shares his experience, his successes, his low points, and ultimately his advice." },
    { title: 'Episode 1b: College Graduates', releaseDate: "9/25/22", disabled: true, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus rutrum tellus pellentesque eu tincidunt tortor. Lectus mauris ultrices eros in cursus turpis massa. Morbi tincidunt ornare massa eget egestas purus viverra. Eget magna fermentum iaculis eu. Quam quisque id diam vel quam elementum. Quisque sagittis purus sit amet volutpat consequat mauris. Lectus mauris ultrices eros in. ", },
    { title: 'Episode 1c: College Graduates', releaseDate: "9/28/22", disabled: true, description: "asidaosdhasioudnaosudasn" },
    // { title: 'title', description: "asidaosdhasioudnaosudasn" },
    // { title: 'title', description: "asidaosdhasioudnaosudasn" },
    // { title: 'title', description: "asidaosdhasioudnaosudasn" },
]

export default function PodcastList() {
    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'stretch' }}>
                <Text as="h1" sx={{ textAlign: 'center', pt: '35px' }}>
                    Episode List
                </Text>
                {data.map(({ title, description, disabled, releaseDate, spotifyLink, anchorLink, youtubeLink }) => {
                    return <PodcastSingle title={title} description={description} disabled={disabled} releaseDate={releaseDate} spotifyLink={spotifyLink} anchorLink={anchorLink} youtubeLink={youtubeLink} />
                })}
            </Box>
        </ThemeProvider >
    )
}

