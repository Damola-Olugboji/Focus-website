import React from 'react';
import { useState } from 'react';
import { Box, Button, Label, Input, Select, Flex, Radio } from 'theme-ui';

export default function ContactForm() {
  const [values, setValues] = useState({
    fullname: '',
    age: '',
    age: '',
    level: '',
    university: '',
    major: '',
    number: '',
  });
  return (
    <Box>
      <Box as="form">
        <Label htmlFor="fullname">Fullname</Label>
        <Input name="fullname" id="fullname" mb={5} />
        <Label htmlFor="age">Age</Label>
        <Input name="age" id="age" mb={5} />
        <Label htmlFor="level">Level</Label>
        <Flex mb={5}>
          <Label>
            <Radio name="level" value="undergraduate" sx={styles.radioStyle} /> Undegraduate
          </Label>
          <Label>
            <Radio name="level" value="graduate" sx={styles.radioStyle} /> Graduate
          </Label>
        </Flex>
        <Label htmlFor="university">What post-secondary institution are you attending?</Label>
        <Input name="university" id="university" mb={5} />
        <Label htmlFor="major">Major</Label>
        <Input name="major" id="major" mb={5}></Input>
        <Label htmlFor="number">Phone Number</Label>
        <Input name="number" id="number" mb={5}></Input>
        <Button type="submit" variant="primary">
          {' '}
          Submit{' '}
        </Button>
      </Box>
    </Box>
  );
}

const styles = {
  radioStyle: {
    cursor: 'pointer',
  },
};
