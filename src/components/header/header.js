/** @jsx jsx */
import { jsx, Container, Flex, Button, Text, Link as ThemeLink } from 'theme-ui';
import { keyframes } from '@emotion/core';
import { Link as Navlink } from 'react-scroll';
import MobileDrawer from './mobile-drawer';
import menuItems from './header.data';
import Link from 'next/link';
import { FaRegStar } from 'react-icons/fa'
import { red } from '@material-ui/core/colors';
export default function Header({ className }) {

  return (

    <header sx={styles.header} className={className} id="Header">
      <Container sx={styles.container}>
        <h1>
          {' '}
          <ThemeLink href="/" sx={styles.links.nav}>
            FOCUS 101
          </ThemeLink>
        </h1>
        <Flex as="nav" sx={styles.nav}>
          {menuItems.map((menuItem, index) => (
            <Navlink activeClass="active" to={menuItem.path} spy={true} smooth={true} offset={-70} duration={500} key={index}>
              {menuItem.label}
            </Navlink>
          ))}
        </Flex>
        <Link href="/podcast" passHref>
          <Button>Podcasts</Button>
        </Link>

        <MobileDrawer />
      </Container>
    </header>
  );
}

const positionAnim = keyframes`
  from {
    position: fixed;
    opacity: 1;
  }

  to {
    position: absolute;
    opacity: 1;
    transition: all 0.4s ease;
  }
`;

const styles = {

  links: {
    nav: {
      fontWeight: 'bold',
      color: 'inherit',
      textDecoration: 'none',
    },
    bold: {
      fontWeight: 'bold',
    },
  },
  header: {
    color: 'text',
    fontWeight: 'body',
    py: 4,
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: 'transparent',
    transition: 'all 0.4s ease',
    animation: `${positionAnim} 0.4s ease`,
    '.contact__btn': {
      flexShrink: 0,
      mr: [15, 20, null, null, 0],
      ml: ['auto', null, null, null, 0],
    },
    '&.sticky': {
      position: 'fixed',
      backgroundColor: 'background',
      color: '#000000',
      boxShadow: '0 1px 2px rgba(0, 0, 0, 0.06)',
      py: 3,
      'nev > a': {
        color: 'text',
      },
    },
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  nav: {
    mx: 'auto',
    display: 'none',
    '@media screen and (min-width: 1024px)': {
      display: 'block',
    },
    a: {
      fontSize: 2,
      fontWeight: 'body',
      px: 5,
      cursor: 'pointer',
      lineHeight: '1.2',
      transition: 'all 0.15s',
      '&:hover': {
        color: 'primary',
      },
      '&.active': {
        color: 'primary',
      },
    },
  },
};
