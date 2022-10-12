import {
    Grid,
    Container,
    Button,
    TextField,
    Box,
    Typography,
    AppBar,
    Toolbar,
  } from "@mui/material";
  
  function Footer() {
    return (
      <footer>
        <Box px={{ sm: 5 }} py={{ sm: 5 }}>
          <Container maxWidth="lg">
            <Grid container spacing={3}>
              <Grid item xs={12} sm={4}>
                <Typography variant="h2" sx={{ paddingBottom: "29px" }}>
                  COMPANY INFO
                </Typography>
                <Typography variant="h3" sx={{ paddingBottom: "14px" }}>
                  About Sports Hub
                </Typography>
                <Typography variant="h3" sx={{ paddingBottom: "14px" }}>
                  News / In the Press
                </Typography>
                <Typography variant="h3" sx={{ paddingBottom: "14px" }}>
                  Advertising / Sport Blogger Ad Network
                </Typography>
                <Typography variant="h3" sx={{ paddingBottom: "14px" }}>
                  Events
                </Typography>
                <Typography variant="h3" sx={{ paddingBottom: "14px" }}>
                  Contant Us
                </Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Typography variant="h2" sx={{ paddingBottom: "29px" }}>
                  CONTRIBUTORS
                </Typography>
                <Typography variant="h3" sx={{ paddingBottom: "14px" }}>
                  Featured Writers Program
                </Typography>
                <Typography variant="h3" sx={{ paddingBottom: "14px" }}>
                  Featured Team Writers Program
                </Typography>
                <Typography variant="h3" sx={{ paddingBottom: "14px" }}>
                  Internship Program
                </Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Typography variant="h2" sx={{ paddingBottom: "29px" }}>
                  NEWSLETTER
                </Typography>
                <Typography variant="h3" sx={{ paddingBottom: "14px" }}>
                  Sign up to receive the latest sports news
                </Typography>
                <Box>
                  <TextField
                    id="outlined-basic"
                    placeholder="Your email address"
                    variant="outlined"
                    size="small"
                  ></TextField>
                  <Button
                    variant="contained"
                    sx={{
                      paddingTop: "8.25px",
                      paddingBottom: "7.25px",
                      paddingLeft: "20px",
                      paddingRight: "20px",
                      boxShadow: 0,
                    }}
                  >
                    Subscribe
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
  
        <AppBar position="static">
          <Toolbar>
            <Typography
              variant="h1"
              sx={{
                flexGrow: 1,
                paddingLeft: "68px",
                paddingTop: "24px",
                paddingBottom: "28px",
              }}
            >
              Sports Hub
            </Typography>
            <Box>
              <Typography variant="h4" sx={{ paddingRight: "56px" }}>
                Copyright 2022 Sports Hub
              </Typography>
              <Typography
                variant="h4"
                sx={{ float: "right", paddingRight: "56px" }}
              >
                Privacy / Terms
              </Typography>
            </Box>
          </Toolbar>
        </AppBar>
      </footer>
    );
  }
  
  export default Footer;
  