import React from 'react';
import styles from './POTD.module.css';
import { Divider, Container, Box, Typography } from '@mui/material';
// import Picture from './pic.jpg';

function PhotoOfTheDay() {
  return (
    <>
      <Container className={styles.container}>
        <Divider className={styles.divider}>
          <div className={styles.dividerText}>Photo of the day</div>
        </Divider>

        <Container className={styles.photoContainter}>
          <Box component='div' className={styles.triangle}>
            <div className={styles.triangleTextHolder}>
              Photo <br />
              <span className={styles.triangleText}>of the</span>
              <br /> day
            </div>
          </Box>

          <Box compopnent='div' className={styles.description}>
            <Typography variant='h4' className={styles.description__title}>
              {' '}
              Defending The Throne
            </Typography>
            <Typography variant='paragraph' className={styles.description__text}>
              Los Angeles Lakes guard Derek Fisher, right, is pressured by the Denver Nuggets Nene
              during th efirst quarter of NBA exhibition action on Oct 16 <br />
              <span className={styles.description__textAuthor}>Photo Courtesy MCT</span>
            </Typography>
          </Box>
        </Container>
      </Container>
    </>
  );
}

export default PhotoOfTheDay;
