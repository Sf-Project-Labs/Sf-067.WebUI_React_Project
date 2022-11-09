import React from 'react';
import TextField from '@mui/material/TextField';
import Input from '@mui/material/InputAdornment';
import { Box, Button, Avatar } from '@mui/material';
import { styles } from './styles';

export const AddComment = () => {
  return (
    <>
      <Box sx={styles.addCommentElement}>
        <Box sx={styles.avatarWrapper}>
          <Avatar
            alt='John Doe'
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhVcje_7FwYnY1JKP55yfAP53ZmRfPlEcoygnCeMH2bg&s'
            sx={{ width: '35', height: '35' }}
          />
        </Box>

        <Box sx={styles.textFieldWrapper}>
          <Input>
            <TextField
              InputProps={{ disableUnderline: true }}
              id='input-with-icon-textfield'
              placeholder='write a comment'
              variant='standard'
              color='secondary'
            ></TextField>
          </Input>
        </Box>

        <Box sx={styles.buttonWrapper}>
          <Button
            variant='text'
            sx={{ color: '#7F8899', '&:hover': { color: 'black', background: '#FFFFFF' } }}
            disableRipple
          >
            Submit
          </Button>
        </Box>
      </Box>
    </>
  );
};
