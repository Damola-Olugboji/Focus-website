import React from 'react';
import { useState, useRef } from 'react';
import { Box, Button, Label, Input, Select, Flex, Radio } from 'theme-ui';
import { Modal } from 'react-responsive-modal';
import { useMediaQuery } from 'react-responsive'
import emailjs from '@emailjs/browser';

export default function ContactForm() {
  const form = useRef();

  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  function sendEmail(e) {
    emailjs.sendForm('service_v7358qa', 'template_77rutnc', form.current, 'user_f5BW8mcuEEqY7UJccX0dM').then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
    e.target.reset();
  }
  const isMobile = useMediaQuery({ query: '(max-width: 1000px)' })

  return (
    <Box>
      <Box as="form" ref={form} onSubmit={sendEmail}>
        <Label htmlFor="fullname">Fullname</Label>
        <Input name="fullname" id="fullname" mb={5} />
        <Label htmlFor="age">Age</Label>
        <Input name="age" id="age" mb={5} />
        <Label htmlFor="level">Level</Label>
        {isMobile ? <Box mb={5} sx={{ justifyContent: 'space-evenly' }}>
          <Box sx={{ display: 'flex', pb: '20px' }}>
            <Label sx={{ pr: '50px' }}>
              <Radio name="level" value="freshman" sx={styles.radioStyle} /> Freshman
            </Label>
            <Label>
              <Radio name="level" value="sophomore" sx={styles.radioStyle} /> Sophomore
            </Label>
          </Box>
          <Box sx={{ display: 'flex' }}>
            <Label>
              <Radio name="level" value="junior" sx={styles.radioStyle} /> Junior
            </Label>
            <Label>
              <Radio name="level" value="senior" sx={styles.radioStyle} /> Senior
            </Label>
          </Box>
        </Box>
          : <Flex mb={5}>
            <Label>
              <Radio name="level" value="freshman" sx={styles.radioStyle} /> Freshman
            </Label>
            <Label>
              <Radio name="level" value="sophomore" sx={styles.radioStyle} /> Sophomore
            </Label>
            <Label>
              <Radio name="level" value="junior" sx={styles.radioStyle} /> Junior
            </Label>
            <Label>
              <Radio name="level" value="senior" sx={styles.radioStyle} /> Senior
            </Label></Flex>}
        <Label htmlFor="university">What post-secondary institution are you attending?</Label>
        <Input name="university" id="university" mb={5} />
        <Label htmlFor="major">Major</Label>
        <Input name="major" id="major" mb={5}></Input>
        <Label htmlFor="number">Phone Number</Label>
        <Input name="number" id="number" mb={5}></Input>
        <Button type="submit">Submit</Button>
        <Modal open={open} onClose={onCloseModal} center>
          <h2>Success </h2>
        </Modal>
      </Box>
    </Box>
  );
}

const styles = {
  radioStyle: {
    cursor: 'pointer',
  },
};
