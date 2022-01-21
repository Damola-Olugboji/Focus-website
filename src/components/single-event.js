import { Box, Text } from 'theme-ui';

export default function SingleEvent({ title, description, align, link, linkText }) {
  return (
    <Box sx={{ textAlgin: { align }, alignItems: 'center' }}>
      <Text as="h2">{title}</Text>
      <Text as="p">{description}</Text>
      {link && (
        <Text as="p" sx={styles.text}>
          <a href={link} target="_blank" rel="noopener noreferrer">
            {' '}
            {linkText}
          </a>
        </Text>
      )}
    </Box>
  );
}

const styles = {
  a: {
    textDecoration: 'none',
  },
};
