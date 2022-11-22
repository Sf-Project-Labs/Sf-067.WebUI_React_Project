import CameraAltIcon from '@mui/icons-material/CameraAlt';
import picture from '../../assets/personal_form/pexels-pixabay-356043-scaled.jpg';
import { TextField, Box, Button, Typography, Grid, Avatar } from '@mui/material';

export function PersonalForm() {
  return (
    <Grid container spacing={0} direction='column' alignItems='center' justifyContent='center'>
      <form>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'center',
            paddingTop: '45px',
            paddingBottom: '27px',
          }}
        >
          <Avatar
            src={picture}
            alt='profile'
            sx={{
              width: 120,
              height: 120,
              borderRadius: '50%',
              marginLeft: '44px',
            }}
          ></Avatar>
          <CameraAltIcon
            sx={{
              color: 'white',
              backgroundColor: '#D72130',
              borderRadius: '50%',
              padding: '10px',
              position: 'relative',
              right: '45px',
            }}
          />
        </Box>
        <Typography
          sx={{
            fontSize: 10,
            color: '#434C5D',
            fontWeight: 600,
            paddingBottom: '8px',
          }}
        >
          FIRST NAME
        </Typography>
        <TextField
          sx={{ fontSize: 16, color: 'black', fontWeight: 400, width: '389px' }}
          variant='outlined'
          size='small'
          required
          defaultValue='Ivan'
        ></TextField>
        <Typography
          sx={{
            fontSize: 10,
            color: '#434C5D',
            fontWeight: 600,
            paddingBottom: '8px',
            paddingTop: '16px',
          }}
        >
          LAST NAME
        </Typography>
        <TextField
          sx={{ fontSize: 16, color: 'black', fontWeight: 400, width: '389px' }}
          variant='outlined'
          size='small'
          required
          defaultValue='Baloh'
        ></TextField>
        <Typography
          sx={{
            fontSize: 10,
            color: '#434C5D',
            fontWeight: 600,
            paddingBottom: '8px',
            paddingTop: '16px',
          }}
        >
          EMAIL
        </Typography>
        <TextField
          sx={{ fontSize: 16, color: 'black', fontWeight: 400, width: '389px' }}
          variant='outlined'
          size='small'
          required
          defaultValue='vanyabalog@gmail.com'
        ></TextField>
        <Button
          variant='contained'
          sx={{
            paddingTop: '8px',
            paddingBottom: '8px',
            paddingLeft: '20px',
            paddingRight: '20px',
            boxShadow: 0,
            display: 'block',
            width: '389px',
            marginTop: '35px',
          }}
        >
          UPDATE PROFILE
        </Button>
      </form>
    </Grid>
  );
}
