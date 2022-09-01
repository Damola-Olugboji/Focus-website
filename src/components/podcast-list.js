import React from 'react';
import { ThemeProvider, Text, Box } from 'theme-ui';
import theme from 'theme';
import PodcastSingle from 'components/podcast-single'

const data = [
    { title: 'Episode 1a: College Graduates', releaseDate: "9/18/22", disabled: false, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
    { title: 'Episode 1b: College Graduates', releaseDate: "9/18/22", disabled: false, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus rutrum tellus pellentesque eu tincidunt tortor. Lectus mauris ultrices eros in cursus turpis massa. Morbi tincidunt ornare massa eget egestas purus viverra. Eget magna fermentum iaculis eu. Quam quisque id diam vel quam elementum. Quisque sagittis purus sit amet volutpat consequat mauris. Lectus mauris ultrices eros in. Donec adipiscing tristique risus nec feugiat in. Donec ac odio tempor orci dapibus ultrices in iaculis nunc. Fermentum odio eu feugiat pretium nibh ipsum consequat nisl vel. Quis viverra nibh cras pulvinar mattis nunc sed. Odio tempor orci dapibus ultrices in. Mus mauris vitae ultricies leo. Viverra mauris in aliquam sem fringilla ut morbi tincidunt augue. In nibh mauris cursus mattis molestie a iaculis at. Suspendisse potenti nullam ac tortor vitae purus faucibus ornare.", },
    { title: 'Episode 1c: College Graduates', releaseDate: "9/25/22", disabled: true, description: "asidaosdhasioudnaosudasn" },
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
                {data.map(({ title, description, disabled, releaseDate, isNew }) => {
                    return <PodcastSingle title={title} description={description} disabled={disabled} releaseDate={releaseDate} />
                })}
            </Box>
        </ThemeProvider >
    )
}

